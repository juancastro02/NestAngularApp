import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
    name: "",
    lastName: "",
    age: 0,
    email: ""
  }

  edit: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.userService.getUser(params.id)
        .subscribe(
          res => {
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

  }

  submitUser(){
    this.userService.createUser(this.user).subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err) 
    )
  }

  updateUser() {
    this.userService.updateUser(this.user._id, this.user)
      .subscribe(
        res => {
          this.router.navigate([''])
        },
        err => console.log(err)
      )
  }

}
