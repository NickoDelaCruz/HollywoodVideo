import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';



const appRoutes: Routes = [
  {
     path: 'cart',
     component: CartComponent
   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
