import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productsList$: Observable<Product[]>;
  private category: string;

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
    this.productsList$ = this.productService.getProducts();
  }

  public reloadProducts(category: string): void {
    if (category !== this.category) {
      this.category = category;
      this.productsList$ = this.productService.getProducts(category);
    }
  }
}
