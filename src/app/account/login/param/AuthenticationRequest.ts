export class Authenticationrequest{
    username: String;
    password: String;
    
    constructor(username: String, password: String){
        this.username = username;
        this.password = password;
    }
}