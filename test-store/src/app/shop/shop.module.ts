import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product-list/product/product.component';
import {ProductService} from './services/products.service';
import { ArrayPipe } from './pipes/array.pipe';
import {SelectPipe} from './pipes/select.pipe';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ArrayPipe, SelectPipe],
  providers: [ProductService],
  imports: [CommonModule]
})
export class ShopModule {
}
