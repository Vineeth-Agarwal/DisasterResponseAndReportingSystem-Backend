// Assigned to Kishan

export class Team {

    teamID: string;
    // teamName: string;
    members: {
        firstName: string;
        lastName: string;
        email: string;
        county: string;
        role: string;// drop down { leader, asst. leader, member }
    }

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}