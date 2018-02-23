import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { UserService } from '../../user/user.service';

import { User } from '../../user/user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private profileData: User;

  public updateForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public errorMessage: string;
  public successMessage: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updateForm = new FormGroup({
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      gender: new FormControl('', []),
      age: new FormControl('', []),
      _id: new FormControl('', [<any>Validators.required]),
    });

    this.route.paramMap.switchMap((params: ParamMap) => this.userService.getProfile(params.get('id')))
      .subscribe((profileData: User) => this.populateForm(profileData));
  }

  populateForm(profileData: User): void {
    this.profileData = profileData;

    this.updateForm = new FormGroup({
      first_name: new FormControl(profileData.first_name, []),
      last_name: new FormControl(profileData.last_name, []),
      gender: new FormControl(profileData.gender, []),
      age: new FormControl(profileData.age, []),
      _id: new FormControl(profileData._id, [<any>Validators.required]),
    });
  }

  submit(user: any, isValid: Boolean): void {
    if(isValid) {
      this.userService.update(user, (res) => {
        if(res.status != 401) {
          this.successMessage = res.message;
        } else {
          this.errorMessage = "Unauthorized access";
        }
      });
    }
  }

}
