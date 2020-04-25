import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  public getImageLink(): string {
    return 'data:image/jpeg;base64,' + this.product.imageBase64;
  }
}
