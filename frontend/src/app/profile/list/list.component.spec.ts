import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { ListComponent } from './list.component';

import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

describe('ListComponent', () => {
  let comp: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let componentUserService: UserService; // the actually injected service
  let httpMock: HttpTestingController;
  let userService: UserService; // the TestBed injected service
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [
        ListComponent
      ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create with no user profiles visible', () => {
    let de = fixture.debugElement.query(By.css('.jumbotron'));
    el = de.nativeElement;
    expect(el.textContent).toContain('No user profiles');
    expect(el.textContent).toContain('Edit Your Profile');
  });

  it('should create a list of users', () => {
    let profileReq = httpMock.expectOne({method: 'GET', url: '/users/list'});
    profileReq.flush([
      {_id: '12345', username: 'testman', first_name: 'Test', last_name: 'Man', gender: 'male', age: 35},
    ]);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('.profile'));
      el = de.nativeElement;
      expect(el.textContent).toContain('testman');
      expect(el.textContent).toContain('Test Man');
    });
  });

  it('should call the delete user service when the deletion button is clicked', () => {
    let profileReq = httpMock.expectOne({method: 'GET', url: '/users/list'});
    profileReq.flush([
      {_id: '12345', username: 'testman', first_name: 'Test', last_name: 'Man', gender: 'male', age: 35},
    ]);

    let userService = TestBed.get(UserService);

    spyOn(userService, 'deleteUser');

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let button: any = fixture.debugElement.query(By.css('.btn-danger'));
      button.click();
      const req = httpMock.expectOne({ method: 'POST'}, 'post call to api');
      expect(userService.deleteUser).toHaveBeenCalled();
      expect(req.request.url).toBe('/users/update/12345');
    });
  });
});
