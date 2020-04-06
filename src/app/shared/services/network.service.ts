import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private networkConnection = new BehaviorSubject<boolean>(true);
  connectionStatus$ = this.networkConnection.asObservable();

  constructor() {
    window.addEventListener('online', () => {
      this.connectionState(true);
    });

    window.addEventListener('offline', () => {
      this.connectionState(false);
    });
  }

  connectionState(state) {
    this.networkConnection.next(state);
  }
}
