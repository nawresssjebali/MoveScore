import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3100';

  constructor(private http: HttpClient) { }

  getFirstPerson(): Observable<any> {
    // Replace 'your-endpoint' with the actual endpoint to fetch the data of the first person
    const endpoint = `${this.apiUrl}/api/first-person`; // Replace 'your-endpoint'

    // Make an HTTP GET request to the endpoint
    return this.http.get(endpoint);
  }

  // Implement the logic for the 'reject()' function here
  // Example:
  // reject() {
  //   // Your logic here
  // }
}

  
