import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDetail } from '../models/form-detail.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormDetail = new FormDetail('','','','');

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(myForm: NgForm){
    console.log("c'est ok ^^");
  }
}
