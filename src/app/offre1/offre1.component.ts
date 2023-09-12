import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre1',
  templateUrl: './offre1.component.html',
  styleUrls: ['./offre1.component.css']
})
export class Offre1Component {
  constructor(private router: Router) {}
  backtochoix() {
    
    this.router.navigate(['/new-page']); 
  }
   
}
