import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

let authServiceStub: {
  isLoggedIn: boolean;
  isSuper: boolean;
};

describe('AuthGuard', () => {
  let authService;

  beforeEach(() => {
    authServiceStub = {
      isLoggedIn: false,
      isSuper: false,
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        {provide: AuthService, useValue: authServiceStub},
      ]
    });
  });

  it('should not activate is the user is not logged in', inject([AuthGuard, Router], (guard: AuthGuard) => {
    expect(guard.canActivate(null, null)).toBe(false);
  }));

  it('should activate is the user is logged in', inject([AuthGuard, Router], (guard: AuthGuard) => {
    authService = TestBed.get(AuthService);
    authService.isLoggedIn = true;
    expect(guard.canActivate(null, null)).toBe(true);
  }));
});
