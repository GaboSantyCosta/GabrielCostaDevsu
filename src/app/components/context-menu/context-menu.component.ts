import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [RouterModule,ModalComponent],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss'
})
export class ContextMenuComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Output() edited = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  edit(): void {
    this.edited.emit();
  }

  delete(): void {
    this.deleted.emit();
  }
  
}
