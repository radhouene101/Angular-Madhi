import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements  OnInit{

  formResidence!:FormGroup

  ngOnInit(): void {
    this.formResidence= new FormGroup({
      id:new FormControl("",[Validators.required,Validators.pattern("^[1-9]*$")]),
      name:new FormControl("",[Validators.required,Validators.minLength(1),Validators.pattern("^[A-Z][a-zA-Z]*$")]),
      address:new FormControl("",[Validators.required,Validators.minLength(4),Validators.email])
    })
  }

  get id(){
    return this.formResidence.get('id');
  }
  onSubmit() {
    console.log(this.formResidence.value)
  }
}
