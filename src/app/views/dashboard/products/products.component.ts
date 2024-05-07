import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../components/icon/icon.component';
import { PRODUCTS } from '../../../mock-data/product';
import { PaginatePipe } from '../../../pipes/paginate.pipe';
import { Product } from '../../../models/product';
import { ProductPipe } from '../../../pipes/product.pipe';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [IconComponent,CommonModule,TableComponent,FormsModule,ProductPipe,PaginatePipe,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  displayedProducts: number = 5;
  searchValue: string = '';
  products: Product[] = PRODUCTS;
  getSearchValue(): string {
    return this.searchValue;
  }
}
