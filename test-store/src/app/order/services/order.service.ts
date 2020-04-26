import {EventEmitter, Injectable} from '@angular/core';
import {Product} from 'src/app/shop/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private amountOfProducts$: EventEmitter<number> = new EventEmitter();
  private showCart$: EventEmitter<boolean> = new EventEmitter();
  private boughtProducts: Product[] = [];


  public addProductToCart(product: Product): void {
    this.boughtProducts.push(product);
    this.amountOfProducts$.emit(this.boughtProducts.length);
  }

  public getBoughtProducts(): Product[] {
    return this.boughtProducts;
  }

  public cleanBoughtProducts() {
    this.boughtProducts = [];
  }

  public getAmountOfProductsEventEmitter(): EventEmitter<number> {
    return this.amountOfProducts$;
  }

  public getShowCartEventEmitter(): EventEmitter<boolean> {
    return this.showCart$;
  }
}
