import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ruSure = 'Bạn có chắc không?';
  constructor(protected router: Router, public authSV: AuthService, public dataService: DataService) {}

  linkJOJO() {
    window.alert('https://www.youtube.com/watch?v=AQx_KMoCgJU');
  }

  homePage() {
    this.dataService.getData();
    this.router.navigate(['/']);
  }

  shoppingCartPage() {
    this.router.navigate(['/cart']);
  }

  adminPage() {
    this.dataService.getData();
    this.router.navigate(['/admin-page']);
  }

  login() {
    if (confirm(this.ruSure) == true) {
      this.authSV.loginWithGoogle();
    }
  }

  logout() {
    if (confirm(this.ruSure) == true) {
      this.authSV.logOut();
    }
  }

  goDaoMeo() {
    this.router.navigate(['/cat-facts']);
  }
}
