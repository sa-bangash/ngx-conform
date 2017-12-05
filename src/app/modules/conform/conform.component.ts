import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conform',
  templateUrl: './conform.component.html',
  styleUrls: ['./conform.component.css']
})
export class ConformComponent implements OnInit {
  @Input() title = 'Are you sure?';
  @Input() message = 'This is simple message.';

  @Output() status = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onConfirm() {
    this.status.emit(true);
  }

  onCancel() {
    this.status.emit(false);
  }

}
