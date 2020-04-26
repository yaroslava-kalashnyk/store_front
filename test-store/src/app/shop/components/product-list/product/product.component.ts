import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';
import {OrderService} from '../../../../order/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public isAvailable: boolean;

  @Input()
  public product: Product;

  constructor(private orderService: OrderService) {
    this.isAvailable = true;
  }

  ngOnInit(): void {
  }

  public getImageLink(): string {
      return 'data:image/jpeg;base64,' + this.product.imageBase64;
  }

  buy(): void {
    this.isAvailable = false;
    this.orderService.addProductToCart(this.product);
  }
}
