import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { article } from 'src/app/Model/article';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  @Input()
  set isDisabled(value: boolean) {
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input()
  set value(value: any) {
    if (!this.form) {
      this.createForm();
    }
    if (value) {
      console.log(value);
      this.form.patchValue(value);
    }
  }

  @Output() summitted: EventEmitter<article> = new EventEmitter<article>();

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  createForm() {
    this.form = this.formBuilder.group({
      title: [{ value: '', disabled: this.isDisabled }],
      content: [{ value: '', disabled: this.isDisabled }],
    });
  }

  onSubmit() {
    const value = this.form.value;
    console.log(value);
    this.summitted.emit(value);
  }
}
