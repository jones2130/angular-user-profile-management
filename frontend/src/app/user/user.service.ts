import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user/user';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private url: string = "/users";

  private headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) { }

  public register(user:User) {
    return this.http.post<User>(`${this.url}/register`, user, this.headers).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

  public deleteUser(user: User) {
    return this.http.post(`${this.url}/delete/${user._id}`, user, this.headers);
  }

  public getProfile(id: String) {
    return this.http.get(`${this.url}/${id?id:sessionStorage.getItem('_id')}`, this.headers);
  }

  public getProfiles() {
    return this.http.get(`${this.url}/list`, this.headers);
  }

  public update(user: User, callback) {
    return this.http.post<User>(`${this.url}/update/${user._id}`, user, this.headers).subscribe(res => {
      callback(res);
    }, err => {
      callback(err);
    });
  }
}
