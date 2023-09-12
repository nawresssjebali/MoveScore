import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3100';

  constructor(private http: HttpClient) { }

  getHighestScorer() {
    return this.http.get(`${this.apiUrl}/api/get-highest-scorer`);
  }

  sendAcceptanceEmail(name: string, email: string): Observable<any> {
    console.log('Sending acceptance email to:', email);
    const data = {
      name: name,
      email: email
    };

    return this.http.post(`${this.apiUrl}/send-acceptance-email`, data);
  }
  sendWaitingListEmail(name: string, email: string): Observable<any> {
    console.log('Sending waiting list email to:', email);
    const data = {
      name: name,
      email: email,
    };

    return this.http.post(`${this.apiUrl}/send-waiting-list-email`, data);
  }

  sendRejectionEmail(name: string, email: string): Observable<any> {
    console.log('Sending rejection email to:', email);
    const data = {
      name: name,
      email: email,
    };

    return this.http.post(`${this.apiUrl}/send-rejection-email`, data);
  }
}
