import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';

let authServiceStub: {
  isLoggedIn: boolean;
  isSuper: boolean;
};

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let componentUserService: AuthService; // the actually injected service
  let authService: AuthService; // the TestBed injected service
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message

  beforeEach(async(() => {
    authServiceStub = {
      isLoggedIn: false,
      isSuper: false,
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: AuthService, useValue: authServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    // UserService actually injected into the component
    authService = fixture.debugElement.injector.get(AuthService);
    componentUserService = authService;
    // UserService from the root injector
    authService = TestBed.get(AuthService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.navbar'));
    el = de.nativeElement;
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should display the login and register links when not logged in', async(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.navbar-nav'));
    el = de.nativeElement;
    const content = el.textContent;
    expect(content).toContain('Login', 'Login Link');
    expect(content).toContain('Register', 'Register Link');
  }));

  it('should not display the edit profile, manage users, or logout links when not logged in', async(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.navbar-nav'));
    el = de.nativeElement;
    const content = el.textContent;
    expect(content).not.toContain('Edit Profile', 'Edit Profile Link');
    expect(content).not.toContain('Manage Users', 'Manage Users Link');
    expect(content).not.toContain('Logout', 'Logout Link');
  }));

  it('should display the edit profile and logout links when logged in with regular user credentials', async(() => {
    authService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.navbar-nav'));
    el = de.nativeElement;
    const content = el.textContent;
    expect(content).toContain('Edit Profile', 'Edit Profile Link');
    expect(content).toContain('Logout', 'Logout Link');
  }));

  it('should not display the login, register, or manage user links when logged in with regular user credentials', async(() => {
    authService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.navbar-nav'));
    el = de.nativeElement;
    const content = el.textContent;
    expect(content).not.toContain('Login', 'Login Link');
    expect(content).not.toContain('Register', 'Register Link');
    expect(content).not.toContain('Manage User', 'Manage User Link');
  }));

  it('should display the edit profile, manage users, and logout links when logged in with admin user credentials', async(() => {
    authService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    spyOn(authService, 'isSuper').and.returnValue(true);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.navbar-nav'));
    el = de.nativeElement;
    const content = el.textContent;
    expect(content).toContain('Edit Profile', 'Edit Profile Link');
    expect(content).toContain('Manage Users', 'Manage Users Link');
    expect(content).toContain('Logout', 'Logout Link');
  }));

  it('should not display the login or register when logged in with regular user credentials', async(() => {
    authService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    spyOn(authService, 'isSuper').and.returnValue(true);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.navbar-nav'));
    el = de.nativeElement;
    const content = el.textContent;
    expect(content).not.toContain('Login', 'Login Link');
    expect(content).not.toContain('Register', 'Register Link');
  }));
});
