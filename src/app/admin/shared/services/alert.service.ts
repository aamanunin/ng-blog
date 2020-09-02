import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger';

export interface IAlert {
  type: AlertType;
  text: string;
}

@Injectable()
export class AlertService {
  public alert$ = new Subject<IAlert>();

  warning(text: string): void {
    this.alert$.next({type: 'warning', text});
  }

  success(text: string): void {
    this.alert$.next({type: 'success', text});
  }

  danger(text: string): void {
    this.alert$.next({type: 'danger', text});
  }
}
