import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {OrderModule} from '../order/order.module';
import {NotFoundComponent} from './components/not-found/not-found.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, OrderModule]
})
export class CoreModule {
}
