import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form = this.fb.group({
    name: ['', []],
    email: ['', []],
    text: ['', []],
  });

  constructor(private fb: FormBuilder) {}

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get text(): FormControl {
    return this.form.get('text') as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
