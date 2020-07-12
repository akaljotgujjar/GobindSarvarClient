import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IUser {
  id?: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: IUser = { email: null, password: null };
  currentUser = {};
  loggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
