import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {OrderComponent} from './components/order/order.component';
import {RouterModule} from '@angular/router';
import {OrderItemComponent} from './components/order/order-item/order-item.component';
import {PaymentComponent} from './components/payment/payment.component';
import {SuccessPaymentComponent} from './components/success-payment/success-payment.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CartComponent, OrderComponent, OrderItemComponent, PaymentComponent, SuccessPaymentComponent],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class OrderModule {
}
