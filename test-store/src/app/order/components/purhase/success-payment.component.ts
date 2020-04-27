import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purhase',
  templateUrl: './succes-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements AfterViewInit {

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }

}
