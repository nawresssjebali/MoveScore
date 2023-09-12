import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offre3',
  templateUrl: './offre3.component.html',
  styleUrls: ['./offre3.component.css']
})
export class Offre3Component {
  constructor(private router: Router) {}
  backtochoix() {
    
    this.router.navigate(['/new-page']); 
  }
   
}


