import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './shop/components/product-list/product-list.component';
import {OrderComponent} from './order/components/order/order.component';
import {CardComponent} from './order/components/card/card.component';
import {PurhaseComponent} from './order/components/purhase/purhase.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'order', component: OrderComponent},
  {path: 'payment', component: CardComponent},
  {path: 'payment/success', component: PurhaseComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
