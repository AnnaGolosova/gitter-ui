import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { threadId } from 'worker_threads';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private redirectUrl: string = 'http://localhost:4200/index';
  private clientId: string = '043930007f83dcbcd47242fb778f7bc00d2b5c52';
  
  constructor(private httpClient: HttpClient) { }

  GetAuthCode(): void{
    var url = `https://gitter.im/login/oauth/authorize?response_type=code&redirect_uri=${this.redirectUrl}&client_id=${this.clientId}`;
    var code: object;
    window.location.href = url;
    // this.httpClient.get(url)
    //   .subscribe((data) => {
    //     code = data;
    //   });
  }

  GetCurrentUser(string code): 
}
