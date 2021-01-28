import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginserService } from '../_service/loginser.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  email:string;
  pass:string;
  constructor(private lser:LoginserService) { }
 
  ngOnInit(): void {
  }
  googleLogin(){
    this.lser.loginWithGoogle()
  }
  emailLogin(email,pass){
    this.lser.loginWithEmail(this.email,this.pass)
    
  }
  
  githubLogin(){
    this.lser.loginWithGithub()
  }
}
