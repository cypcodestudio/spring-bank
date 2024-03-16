export class UpdateProfileRequest{
    firstname: String;
        lastname: String;
        email: String;
        mobile: String

        constructor(firstname: String,
            lastname: String,
            email: String,
            mobile: String){
                this.firstname = firstname;
                this.lastname = lastname;
                this.email = email;
                this.mobile = mobile;
        }
}