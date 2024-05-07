import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditProductComponent } from './views/dashboard/edit-product/edit-product.component';
import { Error404Component } from './views/404/error-404.component';
import { NewProductComponent } from './views/dashboard/new-product/new-product.component';
import { ProductsComponent } from './views/dashboard/products/products.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: ProductsComponent },
            { path: 'new-product', component: NewProductComponent },
            { path: 'edit-product/:id', component: EditProductComponent }
        ]
    },
    {
        path: '**',
        component: Error404Component
    }
];
