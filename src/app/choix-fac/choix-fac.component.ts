import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-choix-fac',
  templateUrl: './choix-fac.component.html',
  styleUrls: ['./choix-fac.component.css']
})
export class ChoixFacComponent  {

  title = 'choix-angular';
  selectedOption:String='';

  constructor(private router: Router, private route: ActivatedRoute) {}
  

  onNext() {
    
    this.router.navigate(['/resultat']);
        
    }

offrechoisie(){
  {{"Offre bien choisie!"}}

}}
