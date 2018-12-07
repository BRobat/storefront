import { Alert } from './../../../models/Alert';
import { AlertService } from './../../../services/alert.service';
import { Component } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  alerts: Alert[] = [];
  
  constructor(private alertService: AlertService) { }

   ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
        if (!alert) {
            this.alerts = [];
            return;
        }
        this.alerts.push(alert);
    });
  }

  clear() {
    this.alertService.clearAlerts();
  }
  
}
