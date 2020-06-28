import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    const user = JSON.parse(localStorage.getItem('authen'));
    if (user.filter((user) => this.loginForm.get('user'))) {
      console.log('OK');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Passwords Don't Match",
      });
    }
  }
}
