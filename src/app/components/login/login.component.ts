import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForn from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private fb: FormBuilder, 
    private service:AuthService, 
    private router:Router){}

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
      // console.warn(this.loginForm.value);
      // this.service.login(this.loginForm.value).subscribe((result)=>{
      //   if (result) {         
      //   }
      // })
      this.service.login(this.loginForm.value)
      .subscribe({
        next:(result=>{
          alert(result.message);
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        }), 
        
        error:(err=>{
          alert(err?.err.message);
        })
      })
      
    }
    else{
      console.warn("Form is not valid");
      ValidateForn.validateAllformFileds(this.loginForm);
      alert("your form is invalid...");
      
    }
  }
}
