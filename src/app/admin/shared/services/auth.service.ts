import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {IUser} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';
import {IFbAuthResponse} from '../../../../environments/interfaces';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));

    if (new Date() > expDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem(('fb-token'));
  }

  login(user: IUser): Observable<any> {
    const body = {returnSecureToken: true, ...user};

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, body)
      .pipe(tap(this.setToken));
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: IFbAuthResponse | null) {
    if (response === null) {
      localStorage.clear();
      return;
    }

    const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);

    localStorage.setItem('fb-token', response.idToken);
    localStorage.setItem('fb-token-exp', expDate.toString());
  }
}
