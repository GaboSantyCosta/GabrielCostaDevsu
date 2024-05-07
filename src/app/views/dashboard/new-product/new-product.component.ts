import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3}-[a-zA-Z]{3}$')
      ] ],
      name: ['', Validators.required],
      description: ['', Validators.required],
      logo: ['', Validators.required],
      date_release: ['', Validators.required],
      date_revision: ['']
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Enviar el formulario
      console.log('Formulario válido', this.productForm.value);
    } else {
      // Marcar campos inválidos
      this.marcarCamposInvalidos(this.productForm);
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

}
