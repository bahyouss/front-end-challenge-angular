import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLayoutComponent } from './home-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
// @ts-ignore
import { FolderComponent } from '../../../../../../../connectiverx/Wrapper/src/app/core/components/folder/folder.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AppComponent } from 'src/app/app.component';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// @ts-ignore
import { UserMenuComponent } from '../../../../../../../connectiverx/Wrapper/src/app/core/components/user-menu/user-menu.component';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  @Component({ selector: 'app-app-progress-spinner', template: '' })
  class ProgressSpinnerStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatIconModule,
        HttpClientModule,
      ],
      declarations: [
        HomeLayoutComponent,
        FolderComponent,
        AppComponent,
        ProgressSpinnerStubComponent,
        UserMenuComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
