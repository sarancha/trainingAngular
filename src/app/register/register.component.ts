import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  registerForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required],
        fullname: ['', Validators.required],
        email: ['', Validators.email],
        address: ['', Validators.required],
        phones: this.formBuilder.array([]),
      },
      { validators: passwordMatchValidator }
    );
  }

  setLocalStorage() {
    if (this.registerForm.valid === true) {
      let authenArr = JSON.parse(localStorage.getItem('authen')) || [];
      //console.log(newLength);
      authenArr.push(this.registerForm.value);
      localStorage.setItem('authen', JSON.stringify(authenArr));
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/login']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  }

  get phoneInputs() {
    return this.registerForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.formBuilder.group({
      line: [, [Validators.minLength(9), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
    });
    this.phoneInputs.push(phone);
    //console.log(this.phoneInputs);
  }

  deletePhone(i) {
    this.phoneInputs.removeAt(i);
  }
}

export function passwordMatchValidator(formgroup: FormGroup) {
  return formgroup.get('password').value ===
    formgroup.get('repeatPassword').value
    ? formgroup.get('repeatPassword').setErrors(null)
    : formgroup.get('repeatPassword').setErrors({ mismatch: true });
}
