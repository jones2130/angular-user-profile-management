import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../user/user.service';

import { User } from '../../user/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private profiles: User[];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userService.getProfiles().subscribe((profiles: User[]) => {
      this.profiles = profiles;
    });
  }

  public deleteUser(user: User):void {
    this.userService.deleteUser(user).subscribe(() => {
      this.userService.getProfiles().subscribe((profiles: User[]) => {
        this.profiles = profiles;
      });
    });
  }
}
