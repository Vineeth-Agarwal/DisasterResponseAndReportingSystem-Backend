import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from './incident';
import { Team } from './team';
import { User } from './user';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  login(loginData){
    return this.http.post("https://drrs.herokuapp.com/signin", loginData);
  }

  getApplicantsList() {
    //   http call
    return this.http.get('https://drrs.herokuapp.com/getApplicantsList');
    // return this.http.get('http://localhost:3000/getApplicantsList');

  }

  saveApplicantDecision(data: User) {
    // http call  
    return this.http.put('https://drrs.herokuapp.com/saveApplicationDecision', data);
    // return this.http.put('http://localhost:3000/saveApplicationDecision', data);
  }


  getIncidentsList() {
    //   http call
    return this.http.get('https://drrs.herokuapp.com/getIncidentsList');
    // return this.http.get('http://localhost:3000/getIncidentsList');
  }

  getArciveIncident() {
    //   http call
    return this.http.get('https://drrs.herokuapp.com/getArchiveIncidents');
    // return this.http.get('http://localhost:3000/getArchiveIncidents');
  }

  archiveIncident(data) {
    //   http call
    return this.http.put('https://drrs.herokuapp.com/archiveIncident', data);
    // return this.http.put('http://localhost:3000/archiveIncident', data);
  }

  getReportsList() {
    //   http call
    return this.http.get('https://drrs.herokuapp.com/getReportsList');
    // return this.http.get('http://localhost:3000/getReportsList');

  }

  getTeamList() {
    //   http call
    return this.http.get('http://drrs.herokuapp.com/getTeamList');
    // return this.http.get('http://localhost:3000/getTeamList');

  }

  saveIncident(data: Incident) {
    // http call
    return this.http.post('https://drrs.herokuapp.com/saveIncident', data);
    // return this.http.post('http://localhost:3000/saveIncident', data);

  }


  saveTeam(data: Team) {
    // http call
    return this.http.post('http://drrs.herokuapp.com/saveTeam', data);
    // return this.http.post('http://localhost:3000/saveTeam', data);
  }

  getTeamById(data: string) {
    return this.http.get('http://drrs.herokuapp.com/getTeam/' + data);
  }

}

