import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-card',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  public totalPrice: string;

  constructor(private localStorageService: LocalStorageService,
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.totalPrice = localStorage.getItem('totalPrice');

    if (!this.totalPrice) {
      this.router.navigate(['']);
    }
  }

  public pay(): void {
    this.orderService.cleanBoughtProducts();
    this.router.navigate(['success'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.localStorageService.removeItem('totalPrice');
  }
}
