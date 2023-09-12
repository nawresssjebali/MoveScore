import { Component } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { EmailService } from './resultat/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'choix-angular';
  selectedOption:String='';
  selectedFile: File | null = null;

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0] as File;}

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private emailService: EmailService
    ) {}
  onSubmit() {
    // Perform actions when the Submit button is clicked
    // For example, you can handle the file upload here
    console.log('File uploaded:', this.selectedFile);
  }

  onNext() {
    
    switch (this.selectedOption) {
      case 'dd-supgalilée':
        this.router.navigate(['/offre1']);
        break;
      case 'dd-sherbrooke':
        this.router.navigate(['./offre2']);
        break;
        case 'dd-ensim':
        this.router.navigate(['./offre3']);
        break;
        case 'se-ensim':
        this.router.navigate(['./offre4']);
        break;
        case 'ms-cy':
        this.router.navigate(['./offre5']);
        break;
        case 'ms-eurocom':
        this.router.navigate(['./offre6']);
        break;
        default:
        break;
        
    }
}



}
