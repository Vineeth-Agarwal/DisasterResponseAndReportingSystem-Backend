import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { TeamsComponent } from './teams/teams.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';


import { Team1DetailsComponent } from './team1-details/team1-details.component';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArchivedIncidentsComponent } from './archived-incidents/archived-incidents.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReportComponent } from './report/report.component';
import { COPComponent } from './cop/cop.component';
import { AgmCoreModule } from '@agm/core';
import { MyDialogComponentComponent } from './my-dialog-component/my-dialog-component.component';
import { ApplicantacceptedComponent } from './applicantaccepted/applicantaccepted.component';
import { ApplicantdeniedComponent } from './applicantdenied/applicantdenied.component';


@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  

  declarations: [ReportComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    CreateIncidentComponent,
    ReviewApplicationComponent,
    TeamsComponent,
    CreateTeamsComponent,
    Team1DetailsComponent,
    ArchivedIncidentsComponent,
    COPComponent,
    MyDialogComponentComponent,
    ApplicantacceptedComponent,
    ApplicantdeniedComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    DemoMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB954EX24ldvc9K55mjhdei_wg8Ly5shKQ'
    }),
  ],
  entryComponents: [
    MyDialogComponentComponent,
    ApplicantacceptedComponent,
    ApplicantdeniedComponent

  ],

  
  providers: [],
  bootstrap: [AppComponent],

  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
