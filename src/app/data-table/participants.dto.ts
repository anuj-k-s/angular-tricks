export class Participants {
    public firstName: string;
    public lastName: string;
    public emailId: string;
    public booth1: number;
    public booth2: number;
    public booth3: number;
    public total: number;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.emailId = '';
        this.booth1 = null;
        this.booth2 = null;
        this.booth3 = null;
        this.total = null;
    }
    populateData(firstName: string, lastName: string, emailId: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}