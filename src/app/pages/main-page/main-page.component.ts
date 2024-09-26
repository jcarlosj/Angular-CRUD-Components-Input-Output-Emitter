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

  addNewRecord(record: { name: string; email: string }) {
    console.log(record);
    this.recordsList.push( record );
  }
}
