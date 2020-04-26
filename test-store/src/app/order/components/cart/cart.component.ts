import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  public productsAmount: number;
  private changeAmountEmitter: EventEmitter<number>;
  private changeAmountSubscription: Subscription;

  @Output()
  public clickCart = new EventEmitter<boolean>();

  constructor(private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productsAmount = 0;
    this.changeAmountEmitter = this.orderService.getAmountOfProductsEventEmitter();
    this.changeAmountSubscription = this.changeAmountEmitter.subscribe(num => {
        this.productsAmount = num;
      }
    );
  }

  public navigateToOrder(): void {
    this.router.navigate(['order'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.changeAmountSubscription.unsubscribe();
  }
}
