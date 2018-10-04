import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from './incident';
import { Team } from './team';


@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    getApplicantsList() {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getApplicantsList');
        // return this.http.get('http://localhost:3000/getApplicantsList');

    }

    getIncidentsList() {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getIncidentsList');
        // return this.http.get('http://localhost:3000/getIncidentsList');

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

}

