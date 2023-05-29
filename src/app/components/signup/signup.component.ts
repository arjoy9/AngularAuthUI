import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForn from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, 
    private service:AuthService, 
    private router:Router){}

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
      // console.warn(this.signupForm.value);
      this.service.signUp(this.signupForm.value)
      .subscribe({
        next:(result=>{
          // console.warn(result);          
          alert(result.message);
          this.signupForm.reset();
          this.router.navigate(['login']);
        }), 

        error:(err=>{
           alert(err?.err.message);
          // console.warn("something is wrong");       
        })
      })     
    }
    else{
      // console.warn("Form is not valid");
      ValidateForn.validateAllformFileds(this.signupForm);
      alert("your form is invalid...");
      
    }
  }
}
