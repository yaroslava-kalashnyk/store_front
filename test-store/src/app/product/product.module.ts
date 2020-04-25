import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
