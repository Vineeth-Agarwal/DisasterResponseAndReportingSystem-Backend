// Assigned to Kishan
import { Applicant } from "./applicant"
export class Team {

    teamID: string;
    // teamName: string;
    incidentID: string;
    members:  Applicant[]

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}