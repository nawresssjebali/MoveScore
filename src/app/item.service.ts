import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api'; // URL of your API

  constructor(private http: HttpClient) { }

  addItem(itemData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/items`, itemData);
  }
}

