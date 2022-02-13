import {Component, OnInit} from '@angular/core';
import {user} from "../../model/user";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: user[] | undefined;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getUsers().subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
      error: err => console.error("tu a echouer : ", err)
      }
    )
  }
}
