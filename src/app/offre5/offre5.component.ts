import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offre5',
  templateUrl: './offre5.component.html',
  styleUrls: ['./offre5.component.css']
})
export class Offre5Component {
  constructor(private router: Router) {}
  backtochoix() {
    
    this.router.navigate(['/new-page']); 
  }
   

}


