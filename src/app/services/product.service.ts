import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/bp/products`, { headers: this.setHeaders() });
  }

  addProduct(product: Product): Observable<any> {
    console.log(product);
    return this.http.post<Product>(`${this.apiUrl}/bp/products`, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(`${this.apiUrl}/bp/products/${product.id}`, product);
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.delete<Product>(`${this.apiUrl}/bp/products/${product.id}`);
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('authorId', '400');
  }
}
