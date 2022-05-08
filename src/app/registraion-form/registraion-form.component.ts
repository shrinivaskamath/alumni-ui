import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationFormService } from '../services/registration-form.service';

@Component({
  selector: 'app-registraion-form',
  templateUrl: './registraion-form.component.html',
  styleUrls: ['./registraion-form.component.css'],
})
export class RegistraionFormComponent implements OnInit {
  public years: Array<Number> = [];
  regisrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    occupation: new FormControl(''),
    qualification: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('', [
      Validators.pattern('[0-9]{3}-[0-9]{2}-[0-9]{3}'),
    ]),
    canContact: new FormControl(''),
    fromYear: new FormControl('Select a year'),
    fromClass: new FormControl('Select a class'),
    toYear: new FormControl('Select a year'),
    toClass: new FormControl('Select a class'),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pin: new FormControl(''),
  });
  constructor(private registrationFormService: RegistrationFormService) {}

  ngOnInit(): void {
    for (let i = 1900; i <= 2025; i++) {
      this.years.push(i);
    }
  }

  onSubmit() {
    let formData = {
      name:
        `${this.regisrationForm.get('firstName')?.value} ` +
        `${this.regisrationForm.get('lastName')?.value}`,
      occupation: this.regisrationForm.get('occupation')?.value,
      qualification: this.regisrationForm.get('qualification')?.value,
      email: this.regisrationForm.get('email')?.value,
      mobile: this.regisrationForm.get('phone')?.value,
      canContact: this.regisrationForm.get('canContact')?.value,
      fromYear: this.regisrationForm.get('fromYear')?.value,
      toYear: this.regisrationForm.get('toYear')?.value,
      fromClass: this.regisrationForm.get('fromClass')?.value,
      toClass: this.regisrationForm.get('toClass')?.value,
      line1: this.regisrationForm.get('address1')?.value,
      line2: this.regisrationForm.get('address2')?.value,
      country: this.regisrationForm.get('country')?.value,
      state: this.regisrationForm.get('state')?.value,
      city: this.regisrationForm.get('city')?.value,
      postalCode: this.regisrationForm.get('pin')?.value,
    };

    this.registrationFormService.postFormData(formData).subscribe();
    this.regisrationForm.reset();
  }
}
