import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

describe('UserService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let userService: UserService;
  let testUser: User = {
    _id: '12345',
    username: 'testman',
    first_name: 'Test',
    last_name: 'Man',
    gender: 'male',
    age: 35,
    isSuper: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService, {
          provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }
        }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should call the register user url', inject([UserService], (service: UserService) => {
    service.register(testUser);
    const req = httpMock.expectOne({ method: 'POST'}, 'post call to api');
    expect(req.request.url).toBe('/users/register');
  }));

  it('should call the delete user url', inject([UserService], (service: UserService) => {
    service.deleteUser(testUser).subscribe(() => {});
    const req = httpMock.expectOne({ method: 'POST'}, 'post call to api');
    expect(req.request.url).toBe('/users/delete/12345');
  }));

  it('should call the get profile url with provided user id', inject([UserService], (service: UserService) => {
    service.getProfile(testUser._id).subscribe(() => {});
    const req = httpMock.expectOne({ method: 'GET'}, 'post call to api');
    expect(req.request.url).toBe('/users/12345');
  }));

  it('should call the get profile url with user id provided by the session', inject([UserService], (service: UserService) => {
    sessionStorage.setItem('_id', '56789');
    service.getProfile(null).subscribe(() => {});
    const req = httpMock.expectOne({ method: 'GET'}, 'post call to api');
    expect(req.request.url).toBe('/users/56789');
    sessionStorage.removeItem('_id');
  }));

  it('should call the get profiles url', inject([UserService], (service: UserService) => {
    service.getProfiles().subscribe(() => {});
    const req = httpMock.expectOne({ method: 'GET'}, 'post call to api');
    expect(req.request.url).toBe('/users/list');
  }));

  it('should call the update profile url', inject([UserService], (service: UserService) => {
    service.update(testUser, null);
    const req = httpMock.expectOne({ method: 'POST'}, 'post call to api');
    expect(req.request.url).toBe('/users/update/12345');
  }));
});
