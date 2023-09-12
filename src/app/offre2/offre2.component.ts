import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offre2',
  templateUrl: './offre2.component.html',
  styleUrls: ['./offre2.component.css']
})
export class Offre2Component {
  constructor(private router: Router) {}
  
  backtochoix() {
    
    this.router.navigate(['/new-page']); 
  }
   
}
