import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  title = 'Modal Login Form';

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    localStorage.setItem('authen', 'console.log(this.loginForm.value)');
    localStorage.setItem('bb', 'test');
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }

  saveMy() {
    localStorage.setItem('author', JSON.stringify(this.loginForm.value));
  }
}
