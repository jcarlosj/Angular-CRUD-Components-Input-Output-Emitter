import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  @Output() formSubmitted = new EventEmitter<{ name: string; email: string }>();
  registerForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.registerForm = this.fb.group({
      name: [ '', [ Validators.required ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
    });
  }

  onSubmit() {
    if ( this.registerForm.valid ) {
      const formData = this.registerForm.value;
      // Aquí enviarías los datos al componente de la lista
      console.log( formData );
      this.formSubmitted.emit( formData );
    }
  }
}
