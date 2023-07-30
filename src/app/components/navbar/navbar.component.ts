import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(protected router: Router) {}

  linkJOJO() {
    window.alert('https://www.youtube.com/watch?v=AQx_KMoCgJU');
  }

  homePage() {
    this.router.navigate(['/']);
  }

  shoppingCartPage() {
    this.router.navigate(['/cart']);
  }

  adminPage() {
    this.router.navigate(['/admin-page']);
  }
}
