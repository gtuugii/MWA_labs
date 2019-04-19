import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';

//@import url('https://un');

@Component({
  selector: 'app-root',
  //template: '<app-databinding></app-databinding>',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'angular';

  signupform: FormGroup;
  loginform: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService){
    this.signupform = this.formBuilder.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'email': ['', Validators.required, Validators.email],
      'password': ['', Validators.required],
      'passwordConfirm': ['', Validators.required],
      'policy': ['', Validators.requiredTrue]
    });

    this.loginform = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': ['']
    });
  }

  onSignupSubmit(){
    console.log(this.signupform);
  }

  onLoginSubmit(){
    this.userService.login(this.loginform.get('email').value, this.loginform.get('password').value);
  }

  onProtectedBtn(){
    console.log('Hello');
    this.userService.verify();
  }

}
