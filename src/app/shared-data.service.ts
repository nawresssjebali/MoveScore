import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private sortedUsersSubject = new BehaviorSubject<any[]>([]);
  sortedUsers$ = this.sortedUsersSubject.asObservable();

  setSortedUsers(users: any[]) {
    this.sortedUsersSubject.next(users);
  }
}