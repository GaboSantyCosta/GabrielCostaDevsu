import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'paginate',
  standalone: true
})
export class PaginatePipe implements PipeTransform {
  transform(products: Product[], itemsPerPage: number): Product[] {
    if (!products || !itemsPerPage) {
      return [];
    }

    return products.slice(0, itemsPerPage);
  }

}
