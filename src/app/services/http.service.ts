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
  private redirectUrl: string = 'http://localhost:4200/';
  private clientId: string = '4e27faeb1389fcf73f9eaf02e7ce41878ead65e8';
  
  constructor(private httpClient: HttpClient) { }

  GetAuthCode(): void{
    var url = `https://gitter.im/login/oauth/authorize?response_type=code&redirect_uri=${this.redirectUrl}&client_id=${this.clientId}`;
    var code: object;
    window.open(url, "_blank", 'height=700,width=700');
    // this.httpClient.get(url)
    //   .subscribe((data) => {
    //     code = data;
    //   });
  }
}
