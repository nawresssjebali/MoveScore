import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  isRedText = false;

  toggleColor() {
    this.isRedText = !this.isRedText;
  }
  constructor(private router: Router) {}

  navigateToLogin() {
    // Use the router to navigate to the "login" route
    this.router.navigate(['/login']);
  }
  navigateToAuthAdmin() {
    this.router.navigateByUrl('/auth-admi'); // Navigate to AuthAdminComponent
  }

}