import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm: FormGroup;

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
      phones: this.formBuilder.array([]),
    });
  }

  Form() {
    if (localStorage.getItem('authen') === null) {
      var string = localStorage.getItem('authen');
    } else {
      localStorage.setItem('authen', JSON.stringify(this.registerForm.value));
    }
  }

  get phoneInputs() {
    return this.registerForm.get('phones') as FormArray;
  }
  addPhone() {
    const phone = this.formBuilder.group({
      line: [],
    });
    this.phoneInputs.push(phone);
    //console.log(this.phoneInputs);
  }

  deletePhone(i) {
    this.phoneInputs.removeAt(i);
  }
}
