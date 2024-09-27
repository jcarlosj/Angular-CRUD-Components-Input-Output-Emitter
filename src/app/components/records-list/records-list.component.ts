import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-records-list',
  standalone: true,
  imports: [],
  templateUrl: './records-list.component.html',
  styleUrl: './records-list.component.css'
})
export class RecordsListComponent {
  @Input() records: Array<{ name: string; email: string }> = [];
  @Output() recordSelected = new EventEmitter<{ name: string; email: string }>();
  @Output() recordDeleted = new EventEmitter<{ name: string; email: string }>();

  selectRecord(record: { name: string; email: string }) {
    this.recordSelected.emit(record);
  }

  deleteRecord(record: { name: string; email: string }) {
    this.recordDeleted.emit(record); // Emitir evento para eliminar registro
  }
}
