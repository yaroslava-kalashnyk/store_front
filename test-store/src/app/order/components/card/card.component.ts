import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  public totalPrice: string;

  constructor(private localStorageService: LocalStorageService,
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
    this.router.navigate(['success'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.localStorageService.removeItem('totalPrice');
  }
}
