import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purhase',
  templateUrl: './purhase.component.html',
  styleUrls: ['./purhase.component.css']
})
export class PurhaseComponent implements AfterViewInit {

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }

}
