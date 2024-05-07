import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductService } from '../../../services/product.service';
import { ProductsComponent } from './products.component';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
