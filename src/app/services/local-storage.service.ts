import { Injectable } from '@angular/core';
import { NEVER } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public UserNameKeyName: string = 'gitter-username';
  public UserDisplayNameKeyName: string = 'gitter-display-name';
  public UserAvatarUrlKeyName: string = 'gitter-avatar-url';
  public UserUrlKeyName: string = 'gitter-user-url';
  public AuthCodeKeyName: string = 'auth-code';

  constructor() { }

  public GetCurrectUser() : UserModel{
    var userName = localStorage.getItem(this.UserNameKeyName);
    var displayName = localStorage.getItem(this.UserDisplayNameKeyName);
    var avatarUrl = localStorage.getItem(this.UserAvatarUrlKeyName);
    var url = localStorage.getItem(this.UserUrlKeyName);

    if(userName != null && displayName != null && avatarUrl != null && url != null) {
      return new UserModel(userName, displayName, avatarUrl, url);
    }
    throw new Error("User cannot be found!");
    // ToDo: Add UnauthorizeException
  }

  public SaveUserInfo(user: UserModel) : void {
    localStorage.setItem(this.UserNameKeyName, user.Username);
    localStorage.setItem(this.UserDisplayNameKeyName, user.DisplayName);
    localStorage.setItem(this.UserAvatarUrlKeyName, user.AvatarUrl);
    localStorage.setItem(this.UserUrlKeyName, user.Url);
  }
  
  public SaveAuthCode(authCode: string) : void {
    localStorage.setItem(this.AuthCodeKeyName, authCode);
  }
}
