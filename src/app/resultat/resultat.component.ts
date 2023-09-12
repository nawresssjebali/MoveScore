import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service/user-service.service';
import { EmailService } from './email.service'; // Import EmailService
import { Observable } from 'rxjs';
import { SharedDataService } from '../shared-data.service'; 

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  sortedUsers: any[] = [];

  constructor(private userService: UserService, private emailService: EmailService,private sharedDataService: SharedDataService) {} // Add emailService here

  ngOnInit() {
    console.log('ngOnInit started.');
    this.fetchSortedUsers();
  }
  
  fetchSortedUsers() {
    console.log('Fetching sorted users from API.');
    this.userService.getSortedUsers().subscribe(
      (users) => {
        console.log('Fetched sorted users:', users);
        this.sortedUsers = users;
        // Update the shared data service with sortedUsers
        this.sharedDataService.setSortedUsers(this.sortedUsers);
        console.log('Shared data updated with sortedUsers:', this.sortedUsers); // Add this line
      },
      (error) => {
        console.error('Error fetching sorted users:', error);
      }
    );
  }
  onDiffuserResultatClick() {
    // Fetch the highest scorer from the backend
    console.log('Diffuser Résultat button clicked');
    
    const user = this.sortedUsers[0];
    if (user) {
      console.log('Sending acceptance email to:', user.email);
      
      const name = user.name;
      const email = user.email;

      // Envoyer l'e-mail d'acceptation au premier candidat
      this.emailService.sendAcceptanceEmail(name, email).subscribe(
        response => {
          console.log('Email sent:', response);
        },
        error => {
          console.error('Error sending email:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Error body:', error.error);
        }
      );

      // Envoyer un e-mail de liste d'attente au deuxième candidat
      const secondCandidate = this.sortedUsers[1];
      if (secondCandidate) {
        const secondCandidateName = secondCandidate.name;
        const secondCandidateEmail = secondCandidate.email;
        
        this.emailService.sendWaitingListEmail(secondCandidateName, secondCandidateEmail).subscribe(
          response => {
            console.log('Email sent to second candidate:', response);
          },
          error => {
            console.error('Error sending email to second candidate:', error);
          }
        );
      }

      // Envoyer des e-mails de refus aux autres candidats
      for (let i = 2; i < this.sortedUsers.length; i++) {
        const candidate = this.sortedUsers[i];
        if (candidate) {
          const candidateName = candidate.name;
          const candidateEmail = candidate.email;
          
          this.emailService.sendRejectionEmail(candidateName, candidateEmail).subscribe(
            response => {
              console.log('Email sent to rejected candidate:', response);
            },
            error => {
              console.error('Error sending email to rejected candidate:', error);
            }
          );
        }
      }
    }
  }
  getFirstPersonFromSortedUsers(): any {
    // Assuming sortedUsers is an array of objects
    if (this.sortedUsers.length > 0) {
      return this.sortedUsers[0];
    } else {
      return null; // Or handle the case when there are no persons in sortedUsers
    }
  }
}