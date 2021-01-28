import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import auth from 'firebase';
import { from } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {

  constructor(private af:AngularFireAuth , private router:Router) { }

 async loginWithGoogle(){
    await this.af.signInWithPopup(new auth.auth.GoogleAuthProvider());
    this.router.navigateByUrl('/admin');
  }
 async loginWithEmail(email,pass){
    await this.af.signInWithEmailAndPassword(email,pass)
    .then(()=>{this.router.navigateByUrl('/admin')})
  }
  
  async loginWithGithub(){
    await this.af.signInWithPopup(new auth.auth.GithubAuthProvider());
    this.router.navigateByUrl('/admin');
  }
}
