import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {OrderComponent} from './components/order/order.component';
import {RouterModule} from '@angular/router';
import {OrderItemComponent} from './components/order/order-item/order-item.component';
import {CardComponent} from './components/card/card.component';
import {PurhaseComponent} from './components/purhase/purhase.component';


@NgModule({
  declarations: [CartComponent, OrderComponent, OrderItemComponent, CardComponent, PurhaseComponent],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrderModule { }
