import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    rememberMe: [false]
  });

  constructor(private fb: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login({
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
}
