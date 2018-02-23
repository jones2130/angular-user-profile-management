import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';

let authServiceStub: {
  isLoggedIn: boolean;
  isSuper: boolean;
};

describe('AdminGuard', () => {
  let authService;

  beforeEach(() => {
    authServiceStub = {
      isLoggedIn: false,
      isSuper: false,
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AdminGuard,
        {provide: AuthService, useValue: authServiceStub},
      ]
    });
  });

  it('should not activate is the user is not logged in', inject([AdminGuard, Router], (guard: AdminGuard) => {
    expect(guard.canActivate(null, null)).toBe(false);
  }));

  it('should not activate is the user logged in but not admin', inject([AdminGuard, Router], (guard: AdminGuard) => {
    authService = TestBed.get(AuthService);
    authService.isLoggedIn = true;
    authService.isSuper = false;
    expect(guard.canActivate(null, null)).toBe(false);
  }));

  it('should activate is the user logged in and an admin', inject([AdminGuard, Router], (guard: AdminGuard) => {
    authService = TestBed.get(AuthService);
    authService.isLoggedIn = true;
    authService.isSuper = true;
    expect(guard.canActivate(null, null)).toBe(true);
  }));
});
