import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.loginForm.get('username').value);
  }
}
