import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  nameControl = new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(/^[a-zA-Z]+$/)]);
  ageControl = new FormControl('',[Validators.required,Validators.min(18), Validators.maxLength(2),Validators.minLength(2)]);
  emailControl = new FormControl('',[Validators.required, Validators.email]);
  powerControl = new FormControl('',[Validators.required]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      name: this.nameControl,
      age: this.ageControl,
      email: this.emailControl,
      power: this.powerControl,
    });

    console.log(this.registerForm.get('nombre')?.value)
    console.log(this.emailControl.value);
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }
}

