import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import your data service
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  person: any; // Define a variable to store the person's information

  constructor(
    private dataService: DataService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.sharedDataService.sortedUsers$.subscribe((users) => {
      if (users.length > 0) {
        this.person = users[0];
        console.log('Received sorted users:', users);
        console.log('Updated person:', this.person);
      }
    });

}
}






  
