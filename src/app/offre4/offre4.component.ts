import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; // Import throwError here

@Component({
  selector: 'app-offre4',
  templateUrl: './offre4.component.html',
  styleUrls: ['./offre4.component.css']
})
export class Offre4Component {
  selectedEducation: string = '';
  selectedoption: string = '';
  form: FormGroup;
  user: any;
  fileToUpload: File | null = null;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    // Initialize the form controls using FormBuilder
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedoption: ['DS', Validators.required],
      selectedEducation: ['ESPRIT', Validators.required],
      moyenne1: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      moyenne2: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      moyenne3: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      moyenne4: [null, [Validators.min(0), Validators.max(20)]],
      fileUpload: [null]
    });
  }

  backtochoix() {
    this.router.navigate(['/new-page']);
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      // Perform form submission logic here
    }
  }

  onFileChange(event: any) {
    this.fileToUpload = event.target.files[0]; // Store the uploaded file
  }

  onSelectedEducationChange() {
    this.selectedEducation = this.form.get('selectedEducation').value;
    console.log('Selected Education:', this.selectedEducation); // Debug line
  }

  onSelectedoptionChange() {
    this.selectedoption = this.form.get('selectedoption').value;
    console.log('Selected Option:', this.selectedoption);
  }
}


