import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Residence} from "../models/residence";
import {ApartementServiceService} from "../services/apartementService/apartement-service.service";
import {Apartment} from "../models/apartment";

@Component({
  selector: 'app-update-appart',
  templateUrl: './update-appart.component.html',
  styleUrls: ['./update-appart.component.css']
})
export class UpdateAppartComponent implements OnInit{
    id!:number
  formAppart!:FormGroup
  residence: Residence ={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  };
  constructor(
    private activatedRoute : ActivatedRoute,
    private appartService: ApartementServiceService
  ) {}
  listAppart :Array<Apartment>=[]

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];

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
    this.appartService.updateAppart(this.id,this.formAppart.value)
      .subscribe(e =>{})
  }
}
