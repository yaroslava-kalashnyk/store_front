import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/shop/models/product.model';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public products: Product[];
  public totalPrice = 0;

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.orderService.getBoughtProducts();
    this.navigateToShopIfEmptyList();
    this.products.forEach(p => this.totalPrice += p.price);
  }

  public removeItem(product: Product) {
    this.products = this.products.filter(p => p.name !== product.name);
    this.navigateToShopIfEmptyList();
  }

  public changePrice(amount: number): void {
    this.totalPrice += amount;
  }

  public pay(): void {
    this.router.navigate(['payment']);
  }

  private navigateToShopIfEmptyList(): void {
    if (this.products.length === 0) {
      this.orderService.cleanBoughtProducts();
      this.router.navigate(['']);
    }
  }
}
