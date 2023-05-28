import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForn from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type:string="password";
  isText:boolean =false;
  eyeIcon:string ="fa-eye-slash";

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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
    if (this.loginForm.valid) {
      console.warn(this.loginForm.value);
      
    }
    else{
      console.warn("Form is not valid");
      ValidateForn.validateAllformFileds(this.loginForm);
      alert("your form is invalid...");
      
    }
  }
}
