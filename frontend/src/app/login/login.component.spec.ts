import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

import { AuthService } from '../auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ LoginComponent ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    authService = fixture.debugElement.injector.get(AuthService);
  });

  it('login form should be invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form should be invalid if password field is empty', () => {
    component.loginForm.controls['username'].setValue("testman");
    component.loginForm.controls['password'].setValue("");
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form should be invalid if username field is empty', () => {
    component.loginForm.controls['username'].setValue("");
    component.loginForm.controls['password'].setValue("test1234");
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form should be valid if username and password fields are entered', () => {
    component.loginForm.controls['username'].setValue("testman");
    component.loginForm.controls['password'].setValue("test1234");
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('form should submit', () => {
    spyOn(authService, 'login');
    component.loginForm.controls['username'].setValue("testman");
    component.loginForm.controls['password'].setValue("test1234");

    let form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    expect(authService.login).toHaveBeenCalled();
  });
});
