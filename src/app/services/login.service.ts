import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "https://reqres.in/api/";
  token: string;

  constructor(
    private http:HttpClient,
    private auth: AuthService
  ) {
  }

  login(data: any){
    this.http.post(this.url + "login", data).subscribe(res => {
      // console.log(res);
      this.token = res['token'];
      this.auth.sendToken(this.token);
      // console.log(this.token);
    })
  }

}
