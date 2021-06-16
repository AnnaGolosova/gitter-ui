import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserModel } from '../models/user-model';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      let providedAuthCode = route.queryParams['code'];
      
      if(providedAuthCode != null)
      { 
        this.httpService.GetCurrentUser(providedAuthCode)
        .pipe(
          tap(_ => console.log(`from guard pipe - ` + _))
        )
        .subscribe((user) => {
          this.localStorageService.SaveUserInfo(user.ConvertToUserModel());
          this.localStorageService.SaveAuthCode(providedAuthCode);

          return true;
        },
        (error) => {
          console.error('From guard error 2');
          console.error(error);

          return false;
        });
      }
      
      return of(false);
  }
}