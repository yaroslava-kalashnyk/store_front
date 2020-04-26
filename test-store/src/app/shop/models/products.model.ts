import {Product} from './product.model';

export class Products {

  constructor(public productList: Product[],
              public totalAmount: number) {
  }
}
