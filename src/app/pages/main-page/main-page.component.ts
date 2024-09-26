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
  recordsList: Array<{ name: string; email: string }> = [];
  selectedRecord: { name: string; email: string } | null = null;

  addNewRecord(record: { name: string; email: string }) {
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

  loadRecordToForm(record: { name: string; email: string }) {
    this.selectedRecord = record;
  }
}
