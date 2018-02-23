import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { passwordMatch } from '../validator/password.validator';

import { UserService } from '../user/user.service';

import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public errorMessages: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password_confirm: new FormControl('', []),
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      gender: new FormControl('', []),
      age: new FormControl('', []),
    });
    
    this.registerForm.controls['password_confirm'].setValidators([Validators.required, Validators.minLength(8), passwordMatch(this.registerForm.controls.password)]);
  }

  submit(user: any, isValid: Boolean): void {
    if(isValid) {
      if(user.password == user.password_confirm) {
        this.userService.register(user);
      }
    }

    this.registerForm.controls.username.markAsTouched();
    this.registerForm.controls.password.markAsTouched();
    this.registerForm.controls.password_confirm.markAsTouched();
  }
}
