import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { GitterUser } from '../models/gitter-user';
import { map, tap, catchError } from 'rxjs/operators';
import { AccessTokenModel } from '../models/access-token-model';
// import { threadId } from 'worker_threads';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private redirectUrl: string = 'http://localhost:4200/index';
  private readonly clientId: string = '043930007f83dcbcd47242fb778f7bc00d2b5c52';
  private readonly clientSecret: string = '20c8ac4cd265f00aa88f5803d147b06107266981';
  
  constructor(private httpClient: HttpClient) { }

  GetAuthCode(): void{
    let url = `https://gitter.im/login/oauth/authorize?response_type=code&redirect_uri=${this.redirectUrl}&client_id=${this.clientId}`;
    window.location.href = url;
  }

  GetCurrentUser(code: string): Observable<GitterUser>{
    
    let authModel = {
      code: code,
      client_secret : this.clientSecret,
      client_id: this.clientId,
      redirect_uri : this.redirectUrl
    }

    let encryptedData = btoa(JSON.stringify(authModel));
    let url = 'https://localhost:44336/gitter-user?code=' + encryptedData;
    return this.httpClient.get<GitterUser>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('from cathError. ' + operation + ' ' + error);
      return of(result as T);
    }
  }
}
