export class UserProfileResponse{
    id: Number;
    entityNo: String;
    firstname: String;
    lastname: String;
    email: String;
    mobile: String

    constructor(id: Number,
        entityNo: String,
        firstname: String,
        lastname: String,
        email: String,
        mobile: String){

            this.id = id;
            this.entityNo = entityNo;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.mobile = mobile

    }
}
