// Assigned to Kishan

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { TeamsComponent } from './teams/teams.component';
import { Team1DetailsComponent } from './team1-details/team1-details.component';
import { ArchivedIncidentsComponent } from './archived-incidents/archived-incidents.component';
import { ReportComponent } from './report/report.component';
import { COPComponent } from './cop/cop.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'createIncident', component: CreateIncidentComponent },
  { path: 'createTeams', component: CreateTeamsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'reviewApplication', component: ReviewApplicationComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'team1Details/:item._id', component: Team1DetailsComponent },
  { path: 'archivedIncidents', component: ArchivedIncidentsComponent },
  // { path: 'report', component: ReportComponent },
  { path: 'reportById/:item.incidentID', component: ReportComponent },
  { path: 'cop', component: COPComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
