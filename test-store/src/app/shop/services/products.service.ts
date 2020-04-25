import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) {
  }

  getProducts(category?: string): Observable<Product[]> {
    const categoryPath = category || '';
    return this.httpClient.get<Product[]>('http://127.0.0.1:8080/products/' + categoryPath);
  }
}
