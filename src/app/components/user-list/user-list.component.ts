import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res.user
      },
      err => console.log(err)
    )
  }

  deleteUser(id: string | undefined): void {
    if(confirm('Are you sure to delete this user?')){
      this.userService.deleteUser(id)
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.log(err)
      )
    }
  }

}
