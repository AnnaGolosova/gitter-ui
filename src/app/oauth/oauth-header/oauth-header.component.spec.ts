import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthHeaderComponent } from './oauth-header.component';

describe('HeaderComponent', () => {
  let component: OauthHeaderComponent;
  let fixture: ComponentFixture<OauthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OauthHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
