import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Credentials } from '../user/credentials';

describe('AuthService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let authService: AuthService;
  let credentials: Credentials = {
    username: 'testman',
    password: 'test1234'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, {
        provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }
      }]
    });

    sessionStorage.setItem('_id', 'test131313131313131');
    sessionStorage.setItem('isLoggedIn', true.toString());
    sessionStorage.setItem('isSuper', true.toString());

    authService = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isSuper');
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should call the login url', inject([AuthService], (service: AuthService) => {
    service.login(credentials, null);
    const req = httpMock.expectOne({ method: 'POST'}, 'post call to api');
    expect(req.request.url).toBe('/users/login/');
  }));

  it('should call the logout url and remove stored session data', inject([AuthService], (service: AuthService) => {
    service.logout();
    const req = httpMock.expectOne({ method: 'POST'}, 'post call to api');
    expect(req.request.url).toBe('/users/logout/');
    expect(sessionStorage.getItem('_id')).toBe(null);
    expect(sessionStorage.getItem('isLoggedIn')).toBe(null);
    expect(sessionStorage.getItem('isSuper')).toBe(null);
  }));

  it('should get the stored value of a user\'s login status', inject([AuthService], (service: AuthService) => {
    expect(service.isLoggedIn).toBe(true);
  }));

  it('should get the stored value of a user\'s admin status', inject([AuthService], (service: AuthService) => {
    expect(service.isSuper).toBe(true);
  }));
});
