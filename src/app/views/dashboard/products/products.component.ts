import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../components/icon/icon.component';
import { PRODUCTS } from '../../../mock-data/product';
import { PaginatePipe } from '../../../pipes/paginate.pipe';
import { Product } from '../../../models/product';
import { ProductPipe } from '../../../pipes/product.pipe';
import { ProductService } from '../../../services/product.service';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [IconComponent,CommonModule,TableComponent,FormsModule,ProductPipe,PaginatePipe,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productService: ProductService = inject(ProductService);
  displayedProducts: number = 5;
  searchValue: string = '';
  products: Product[] = [];
  getSearchValue(): string {
    return this.searchValue;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    })
  }
}
