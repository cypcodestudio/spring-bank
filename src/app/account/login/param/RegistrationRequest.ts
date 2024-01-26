export class RegistrationRequest{
    firstname: String;
    lastname: String;
    entityNo: String;
    email: String;
    mobile: String;
    username: String;
    password: String;

    constructor(firstname: String,
        lastname: String,
        entityNo: String,
        email: String,
        mobile: String,
        username: String,
        password: String){
            this.firstname = firstname;
            this.lastname = lastname;
            this.entityNo = entityNo;
            this.email = email;
            this.mobile = mobile;
            this.username = username;
            this.password = password;

    }
}