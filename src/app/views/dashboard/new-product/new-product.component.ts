import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIf } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {
  private productService: ProductService = inject(ProductService);
  productForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3}-[a-zA-Z]{3}$')
      ] ],
      name: ['', Validators.required,Validators.maxLength(100),Validators.minLength(10)],
      description: ['', Validators.required,Validators.maxLength(100),Validators.minLength(10)],
      logo: ['', Validators.required],
      date_release: [new Date(), Validators.required],
      date_revision: [{value: this.oneYearLater(), disabled: true}]
    });
  }

  onSubmit(): void {
    try {
      if (this.productForm.valid) {
        this.productService.addProduct(this.productForm.value);
        this.productForm.reset();
      } else {
        // Marcar campos inválidos
        this.marcarCamposInvalidos(this.productForm);
      }
    } catch (error) {
      console.error(error)
    }
  }

  marcarCamposInvalidos(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(control => {
      const formControl = formGroup.get(control);
      if (formControl instanceof FormGroup) {
        this.marcarCamposInvalidos(formControl);
      } else {
        formControl!.markAsDirty();
        formControl!.markAsTouched();
      }
    });
  }

  oneYearLater(): Date {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
  }

}
