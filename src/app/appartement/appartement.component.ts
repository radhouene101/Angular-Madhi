import {Component, OnInit} from '@angular/core';
import {ApartementServiceService} from "../services/apartementService/apartement-service.service";
import {Apartment} from "../models/apartment";

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent  implements OnInit{

  constructor(
    private appartementService : ApartementServiceService
  ) {}
  listAppart :Apartment[]=[]
  getAllAppartement(){
    this.appartementService.getAppartement().subscribe(
    (data)=>{
      this.listAppart=data
      console.log(JSON.stringify(this.listAppart));
    }
    )
  }

  ngOnInit(): void {
    this.getAllAppartement()
  }

  deleteAppart(id: number, i: number) {
    this.appartementService.deleteAppart(id).subscribe(p=>{
      this.listAppart.splice(i,1)
      //window.location.reload();
    });
  }

  updateAppart() {

  }

  showDetails(id: number) {

    this.appartementService.getAppartById(id);

  }
}
