import { Alert } from './../models/Alert';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts = new Subject<Alert>();
  
  constructor() { }

  getAlert(): Observable<any> {
    return this.alerts.asObservable();
  }

  success(message) {
    this.alerts.next(<Alert>{message: message});
    console.log(this.alerts);
   
  }


  clear() {
    this.alerts.next();
  }
}
