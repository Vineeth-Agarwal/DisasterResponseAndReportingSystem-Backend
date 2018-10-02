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
    }

    getIncidentsList() {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getIncidentsList');
    }

    getReportsList() {
        //   http call
        return this.http.get('https://drrs.herokuapp.com/getReportsList');
    }

    saveIncident(data: Incident) {
        // http call
        return this.http.post('https://drrs.herokuapp.com/saveIncident', data);
    }

    saveTeam(data: Team) {
        // http call
        return this.http.post('http://localhost:3000/saveTeam', data);
    }

}

