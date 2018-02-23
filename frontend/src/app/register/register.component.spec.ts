import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

import { UserService } from '../user/user.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService;
  let httpMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ RegisterComponent ],
      providers: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    component.ngOnInit();
    userService = fixture.debugElement.injector.get(UserService);
  });

  it('should not be a valid form if username is missing', () => {
    component.registerForm.controls['username'].setValue("");
    component.registerForm.controls['password'].setValue("test1234");
    component.registerForm.controls['password_confirm'].setValue("test1234");
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should not be a valid form if password is missing', () => {
    component.registerForm.controls['username'].setValue("testman");
    component.registerForm.controls['password'].setValue("");
    component.registerForm.controls['password_confirm'].setValue("test1234");
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should not be a valid form if password confirmation is missing', () => {
    component.registerForm.controls['username'].setValue("testman");
    component.registerForm.controls['password'].setValue("test1234");
    component.registerForm.controls['password_confirm'].setValue("");
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should not be a valid form is username is too short', () => {
    component.registerForm.controls['username'].setValue("tes");
    component.registerForm.controls['password'].setValue("test1234");
    component.registerForm.controls['password_confirm'].setValue("test1234");
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should not be a valid form is password do not match is too short', () => {
    component.registerForm.controls['username'].setValue("testman");
    component.registerForm.controls['password'].setValue("test1234");
    component.registerForm.controls['password_confirm'].setValue("test5678");
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should register the user', () => {
    spyOn(userService, 'register');

    component.registerForm.controls['username'].setValue("testman");
    component.registerForm.controls['password'].setValue("test1234");
    component.registerForm.controls['password_confirm'].setValue("test1234");
    component.registerForm.controls['first_name'].setValue("Test");
    component.registerForm.controls['last_name'].setValue("Last");
    component.registerForm.controls['gender'].setValue("male");
    component.registerForm.controls['age'].setValue(25);

    expect(component.registerForm.valid).toBeTruthy();

    let form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(userService.register).toHaveBeenCalled();
  });
});
