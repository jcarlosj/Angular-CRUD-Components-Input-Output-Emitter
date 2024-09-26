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

  addRecord(record: { name: string; email: string }) {
    this.records.push(record);
  }

  selectRecord(record: { name: string; email: string }) {
    this.recordSelected.emit(record);
  }
}
