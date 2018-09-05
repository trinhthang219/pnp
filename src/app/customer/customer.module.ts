import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
// routes
export const ROUTES: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'detail', component: CustomerDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CustomerComponent,CustomerDetailComponent
  ]
})
export class CustomerModule {}