import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from './incident';


@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    getApplicantsList() {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getApplicantsList");
    }

    getIncidentsList() {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getIncidentsList");
    }

    saveIncident(data: Incident){
        // http call
        return this.http.post("https://drrs.herokuapp.com/saveIncident", data);
    }
}

