import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

import { Credentials } from '../user/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public errorMessage: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [<any>Validators.required]),
    })
  }

  login(credentials: Credentials, isValid: Boolean): void {
    if(isValid) {
      this.authService.login(credentials, (err: HttpErrorResponse) => {
        if(err.status == 401) {
          this.errorMessage = true;
        }
      });
    }
  }
}
