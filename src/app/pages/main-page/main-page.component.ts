import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { RecordsListComponent } from '../../components/records-list/records-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RegisterFormComponent,
    RecordsListComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  recordsList: Array<{ id: number; name: string; email: string }> = [];
  selectedRecord: { id: number; name: string; email: string } | null = null;

  addNewRecord(record: { id: number; name: string; email: string }) {

  // Validar si ya existe un registro con el mismo correo
  const emailExists = this.recordsList.some(r => r.email === record.email && r.id !== record.id);
    console.log( emailExists );
  if (emailExists) {
    alert('Este correo ya está registrado. Por favor ingrese otro correo.');
    return;
  }

    // Si es un registro nuevo o si es una actualización
    if (this.selectedRecord) {
      const index = this.recordsList.findIndex(r => r.email === this.selectedRecord!.email);
      if (index !== -1) {
        this.recordsList[index] = record; // Actualiza el registro
      }
    } else {
      this.recordsList.push(record); // Agrega nuevo registro
    }
    this.selectedRecord = null; // Limpia el registro seleccionado después de la operación
  }

  loadRecordToForm(record: { id: number; name: string; email: string }) {
    this.selectedRecord = record;
  }

  deleteRecordFromList(record: { id: number; name: string; email: string }) {
    console.log('Antes de eliminar:', this.recordsList);
    this.recordsList = this.recordsList.filter(r => r !== record); // Eliminar el registro
    console.log('Después de eliminar:', this.recordsList);
  }
}
