import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Residence} from "../models/residence";
import {ActivatedRoute} from "@angular/router";
import {ApartementServiceService} from "../services/apartementService/apartement-service.service";
import {Apartment} from "../models/apartment";

@Component({
  selector: 'app-show-appart',
  templateUrl: './show-appart.component.html',
  styleUrls: ['./show-appart.component.css']
})
export class ShowAppartComponent implements OnInit{
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
  Appart:Apartment[]=[]

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];

    this.appartService.getAppartById(this.id)
      .subscribe((data)=>{
        this.Appart.push( data as any)
        console.log(this.Appart);
      })
  }

}
