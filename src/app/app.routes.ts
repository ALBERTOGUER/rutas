import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { FindProductComponent } from './components/find-product/find-product.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'productInformation/:id', component: ProductInformationComponent },
    { path: 'findproduct/:termino', component: FindProductComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);