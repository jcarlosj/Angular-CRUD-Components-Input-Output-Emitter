import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  @Output() formSubmitted = new EventEmitter<{ id: number; name: string; email: string }>();
  @Input() record: { id: number; name: string; email: string } | null = null;
  registerForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.registerForm = this.fb.group({
      name: [ '', [ Validators.required ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['record'] && this.record) {
      this.registerForm.patchValue(this.record); // Cargar los datos en el formulario
    }
  }

  onSubmit() {
    if ( this.registerForm.valid ) {
      const formData = {
        id: this.record?.id || Date.now(), // Generar el ID si no existe
        ...this.registerForm.value
      };

      console.log( formData );
      this.formSubmitted.emit( formData );
      this.resetForm();  // Limpiar el formulario después de crear o actualizar
    }
  }

  // Método para resetear los valores del formulario
  resetForm() {
    this.registerForm.reset();
  }
}
