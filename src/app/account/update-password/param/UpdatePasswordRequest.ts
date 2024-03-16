export class UpdatePasswordRequest{
    password: String;
    confirmPassword: String;
    
    constructor(password: String, confirmPassword: String){
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}