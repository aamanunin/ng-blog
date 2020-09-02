import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService, AlertType} from '../../services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;

  type: AlertType;
  text: string;
  aSub: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.aSub = this.alertService.alert$.subscribe((alert) => {
      this.type = alert.type;
      this.text = alert.text;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.type = null;
        this.text = null;
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe();
  }
}
