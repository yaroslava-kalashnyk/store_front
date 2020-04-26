import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) {
  }

  getProducts(category?: string, page?: number, pageSize?: number): Observable<Products> {
    const categoryPath = category || '';
    const pageSizeValue = pageSize || 10;
    const pageValue = page || 0;

    return this.httpClient.get<Products>('http://127.0.0.1:8080/products/' + categoryPath, {
      params: {
        page: pageValue.toString(),
        size: pageSizeValue.toString()
      }
    });
  }
}
