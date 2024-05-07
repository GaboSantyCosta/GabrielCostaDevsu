import { Component, Input, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from '../context-menu/context-menu.component';
import { IconComponent } from '../icon/icon.component';
import { ModalComponent } from '../modal/modal.component';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [IconComponent,CommonModule,ContextMenuComponent,ModalComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() products: Product[] = [];
  isContextMenuVisible: boolean = false;
  contextMenuX: number = 0;
  contextMenuY: number = 0;
  selectedProduct: Product | null = null;
  modalIsOpen: boolean = false;

  private router: Router = inject(Router);
  
  openMenu(event: MouseEvent,product: Product): void {
    event.preventDefault();
    this.selectedProduct = product;
    this.contextMenuX = event.clientX;
    this.contextMenuY = event.clientY;
  }
  
  handleEdit() {
    this.router.navigateByUrl(`edit-product/${this.selectedProduct!.id}`);
    this.selectedProduct = null;
  }
  
  handleDelete() {
    this.modalIsOpen = true;
  }
  
  handleConfirm() {
    this.modalIsOpen = false;
    this.selectedProduct = null;
  }
  
  handleCancel() {
    this.modalIsOpen = false;
    this.selectedProduct = null;
  }
}
