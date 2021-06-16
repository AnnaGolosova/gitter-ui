import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public readonly CurrectUser: UserModel;

  constructor(
    private localStorageService: LocalStorageService) 
  { 
    this.CurrectUser = this.localStorageService.GetCurrectUser();
  }

  ngOnInit(): void {

  }
}
