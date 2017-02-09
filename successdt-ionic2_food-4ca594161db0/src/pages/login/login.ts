import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {SignUpPage} from '../sign-up/sign-up';
import {MainTabsPage} from '../main-tabs/main-tabs';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public nav: NavController) {}

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }

  // process login
  login() {
    // add your login code here
    this.nav.push(MainTabsPage);
  }

  // go to sign up page
  signUp() {
    // add our sign up code here
    this.nav.push(SignUpPage);
  }
}
