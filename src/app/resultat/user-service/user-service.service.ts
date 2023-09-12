import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getSortedUsers(): Observable<any[]> {
    const url = 'http://localhost:3100/api/get-users-sorted';
    return this.http.get<any[]>(url);
  }
}





