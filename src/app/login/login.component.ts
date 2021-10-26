import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [false]
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login({
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value,
      rememberMe: this.loginForm.get('rememberMe')!.value
    }).subscribe(
      () => {
        console.log('success');
      },
      () => {
        console.log('failure');
      }
    )
  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle();
  }

}
