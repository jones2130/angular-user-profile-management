import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { LogoutGuard } from './logout.guard';
import { AuthService } from './auth.service';

let authServiceStub: {
  isLoggedIn: boolean;
  isSuper: boolean;
};

describe('LogoutGuard', () => {
  let authService;

  beforeEach(() => {
    authServiceStub = {
      isLoggedIn: false,
      isSuper: false,
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        LogoutGuard,
        {provide: AuthService, useValue: authServiceStub},
      ]
    });
  });

  it('should activate is the user is not logged in', inject([LogoutGuard, Router], (guard: LogoutGuard) => {
    expect(guard.canActivate(null, null)).toBe(true);
  }));

  it('should not activate is the user is logged in', inject([LogoutGuard, Router], (guard: LogoutGuard) => {
    authService = TestBed.get(AuthService);
    authService.isLoggedIn = true;
    expect(guard.canActivate(null, null)).toBe(false);
  }));
});
