import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1);
    const val2 = control.get(controlName2);

    if (val1?.value == val2?.value) {
      return null
    }

    return { passwordDoesNotMatch: true }
  }
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    passwords: new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, {
      validators: [equalValues('password', 'confirmPassword')]
    }),
    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required]
      }),
      number: new FormControl('', {
        validators: [Validators.required]
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required]
      }),
      city: new FormControl('', {
        validators: [Validators.required]
      }),
    }),
    firstName: new FormControl('', {
      validators: [Validators.required]
    }),
    lastName: new FormControl('', {
      validators: [Validators.required]
    }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>
      ('student', {
        validators: [Validators.required]
      }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false, {
      validators: [Validators.required]
    })
  })

  onSubmit() {
    console.log(this.form)
  }

  onReset() {
    console.log('reseted sucessfully');
    this.form.reset()
  }
}
