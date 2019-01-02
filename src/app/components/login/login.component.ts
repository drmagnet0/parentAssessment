import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: object = {
    email: "",
    password: ""
  };

  constructor(
    private loginServices: LoginService
  ) { }

  ngOnInit() {
  }

  login(user){
    this.loginServices.login(user);
  }

}
