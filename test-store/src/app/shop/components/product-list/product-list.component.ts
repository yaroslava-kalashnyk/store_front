import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {OrderService} from '../../../order/services/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public productsList$: Observable<Product[]>;
  public pageAmount: number;

  public currentPage: number;
  public currentPageSize: number;
  private category: string;

  private showCart$: EventEmitter<boolean>;

  constructor(public productService: ProductService,
              private orderService: OrderService) {
    this.currentPage = 1;
    this.currentPageSize = 12;
  }

  ngOnInit(): void {
    this.showCart$ = this.orderService.getShowCartEventEmitter();
    this.showCart$.emit(true);

    this.loadProducts();
  }

  public loadProducts(): void {
    this.productsList$ = this.productService.getProducts(this.category, this.currentPage - 1, this.currentPageSize)
      .pipe(
        tap(p => this.pageAmount = Math.ceil(p.totalAmount / this.currentPageSize)),
        map(productsContent => productsContent.productList));
  }


  public onPageSizeChange(pageSize: number): void {
    this.currentPageSize = pageSize;
    this.currentPage = 1;
    this.loadProducts();
  }

  public changeCategory(category: string): void {
    if (category !== this.category) {
      this.category = category;
      this.loadProducts();
    }
  }

  public onLeftClick(): void {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    this.loadProducts();
  }

  public onRightClick(): void {
    this.currentPage = this.currentPage < this.pageAmount ? this.currentPage + 1 : this.pageAmount;
    this.loadProducts();
  }

  public onPageClick(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.showCart$.emit(false);
  }
}
