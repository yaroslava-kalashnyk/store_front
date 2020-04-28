import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {OrderService} from '../../services/order.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {

  public totalPrice: string;
  public form: FormGroup;
  public submitted = false;

  constructor(private localStorageService: LocalStorageService,
              private orderService: OrderService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   card: ['', [Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)]],
    //   month: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
    //   year: ['', [Validators.required, Validators.min(2020), Validators.max(2100)]],
    //   cvv: ['', [Validators.required, Validators.maxLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]+$')]]
    // });

    this.form = this.formBuilder.group({
      card: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]+$')]],
      month: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.min(1), Validators.max(12),
        Validators.pattern('^[0-9]+$')]],
      year: ['', [Validators.required, Validators.min(20), Validators.max(50), Validators.pattern('^[0-9]+$')]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]+$')]]
    });


    this.totalPrice = localStorage.getItem('totalPrice');

    if (!this.totalPrice) {
      this.router.navigate(['']);
    }
  }

  public pay(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.orderService.cleanBoughtProducts();
      this.router.navigate(['success'], {relativeTo: this.route});
    }
  }

  ngOnDestroy(): void {
    this.localStorageService.removeItem('totalPrice');
  }

  get cardForm() {
    return this.form.controls;
  }
}
