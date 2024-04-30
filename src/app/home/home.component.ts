import { Component } from '@angular/core';
import {ApartementServiceService} from "../services/apartementService/apartement-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private apartementService:ApartementServiceService
  ) {
  }
  servicetest() {
    this.apartementService.testlog();
  }
}
