import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './shop/components/product-list/product-list.component';
import {OrderComponent} from './order/components/order/order.component';
import {PaymentComponent} from './order/components/payment/payment.component';
import {SuccessPaymentComponent} from './order/components/purhase/success-payment.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'order', component: OrderComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/success', component: SuccessPaymentComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
