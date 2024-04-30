import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Residence} from "../models/residence";
import {ActivatedRoute, Router} from "@angular/router";
import {ApartementServiceService} from "../services/apartementService/apartement-service.service";
import {Apartment} from "../models/apartment";

@Component({
  selector: 'app-add-appart',
  templateUrl: './add-appart.component.html',
  styleUrls: ['./add-appart.component.css']
})
export class AddAppartComponent implements OnInit{
  id!:number
  formAppart!:FormGroup
  residence: Residence ={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  };
  constructor(
    private router : Router,
    private appartService: ApartementServiceService
  ) {}
  listAppart :Array<Apartment>=[]

  ngOnInit(): void {


    this.formAppart= new FormGroup({
      apartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.residence,Validators.required)
    })
    this.appartService.getAppartById(this.id)
      .subscribe((data)=>{
        this.listAppart=data
        this.formAppart.patchValue(this.listAppart as any)
      })
  }

  onSubmit() {
    this.appartService.addAppartement(this.formAppart.value)
      .subscribe(e =>{
        console.log(this.formAppart.value);
        this.router.navigate(['/Appartement']);
      })
  }
}
