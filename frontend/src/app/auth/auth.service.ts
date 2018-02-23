import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Credentials } from '../user/credentials';
import { User } from '../user/user';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginURL: string = "/users/login";
  private logoutURL: string = "/users/logout";

  private headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(credentials:Credentials, callback) {
    return this.http.post<User>(`${this.loginURL}/`, credentials, this.headers).subscribe(data => {
      sessionStorage.setItem('_id', data._id);
      sessionStorage.setItem('isLoggedIn', true.toString());
      sessionStorage.setItem('isSuper', data.isSuper.toString());
      this.router.navigate(['/profile']);
    }, (err: HttpErrorResponse) => {
      callback(err);
    })
  }

  public logout() {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isSuper');
    
    return this.http.post(`${this.logoutURL}/`, {}).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

  get isLoggedIn(): boolean {
    if(sessionStorage.getItem('isLoggedIn') == 'true') {
      return true;
    } else {
      return false;
    }
  }

  get isSuper(): boolean {
    if(sessionStorage.getItem('isSuper') == 'true') {
      return true;
    } else {
      return false;
    }
  }
}
