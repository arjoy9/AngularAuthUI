import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForn from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type:string="password";
  isText:boolean =false;
  eyeIcon:string ="fa-eye-slash";

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })   
  }

  hideShow(){
    this.isText = !this.isText;
    // console.warn(this.isText);  
     this.isText ? this.eyeIcon ="fa-eye": this.eyeIcon="fa-eye-slash";
     this.isText ? this.type= "text" : this.type="password";
  }

  
  onSubmit(){
    if (this.signupForm.valid) {
      console.warn(this.signupForm.value);
      
    }
    else{
      console.warn("Form is not valid");
      ValidateForn.validateAllformFileds(this.signupForm);
      alert("your form is invalid...");
      
    }
  }
}
