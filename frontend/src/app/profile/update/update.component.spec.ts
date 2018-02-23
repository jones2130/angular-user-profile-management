import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateComponent } from './update.component';

import { UserService } from '../../user/user.service';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let userService;
  let httpMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ UpdateComponent ],
      providers: [ UserService ]
    })
    .compileComponents();
    sessionStorage.setItem('_id', '12345');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    component.ngOnInit();
    userService = fixture.debugElement.injector.get(UserService);
  });

  afterEach(() => {
    sessionStorage.removeItem('_id');
  });

  it('should submit the user\'s updated information', () => {
    spyOn(userService, 'update');
    component.updateForm.controls['first_name'].setValue("Test");
    component.updateForm.controls['last_name'].setValue("Man");
    component.updateForm.controls['gender'].setValue("male");
    component.updateForm.controls['age'].setValue(35);
    component.updateForm.controls['_id'].setValue('123456');

    let form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(userService.update).toHaveBeenCalled();
  });
});
