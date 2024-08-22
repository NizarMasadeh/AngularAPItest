import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategorieesComponent } from './pages/admin/categoriees/categoriees.component';
import { LandingComponent } from './pages/website/landing/landing.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LoginComponent
    },
    // {
    //     path: 'shop',
    //     component: LandingComponent
    // },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'category',
                component: CategorieesComponent
            }
        ]
    }

];
