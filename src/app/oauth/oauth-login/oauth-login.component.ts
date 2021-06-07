import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-oauth-login',
  templateUrl: './oauth-login.component.html',
  styleUrls: ['./oauth-login.component.css']
})
export class OauthLoginComponent implements OnInit {

  constructor(private httpServie: HttpService) { }

  ngOnInit(): void {
  }
  
  sendAuthRequest(): void{
    this.httpServie.GetAuthCode();
  }
}
