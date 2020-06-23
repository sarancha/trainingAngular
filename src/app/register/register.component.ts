import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm: FormGroup;

  form() {
    this.registerForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', Validators.email],
      address: ['', Validators.required],
      phone: ['', Validators.maxLength(10), , Validators.minLength(9)],
    });
  }
}
