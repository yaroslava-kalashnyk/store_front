import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../../../order/services/order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public showCart: boolean;
  private showCart$: EventEmitter<boolean>;
  private showCartSubscription: Subscription;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.showCart$ = this.orderService.getShowCartEventEmitter();
    this.showCartSubscription = this.showCart$.subscribe(showCart => this.showCart = showCart);
  }

  ngOnDestroy(): void {
    this.showCartSubscription.unsubscribe();
  }
}
