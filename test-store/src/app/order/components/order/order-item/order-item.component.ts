import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/shop/models/product.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input()
  public product: Product;

  @Output()
  public removeItem = new EventEmitter<Product>();
  @Output()
  public changePrice = new EventEmitter<number>();

  public amount: number;
  public totalPrice: number;

  constructor() {
  }

  ngOnInit(): void {
    this.amount = 1;
    this.calculateTotalPrice();
  }

  public getImageLink(): string {
    return 'data:image/jpeg;base64,' + this.product.imageBase64;
  }

  public addProductItem(): void {
    this.amount += 1;
    this.changePrice.emit(this.product.price);
    this.calculateTotalPrice();
  }

  public removeProductItem(): void {
    this.amount -= 1;
    this.changePrice.emit(-this.product.price);
    this.calculateTotalPrice();

    if (this.amount === 0) {
      this.removeItem.emit(this.product);
    }
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.product.price * this.amount;
  }
}
