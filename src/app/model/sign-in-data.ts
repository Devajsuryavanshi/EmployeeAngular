export class SignInData {

    username: String;
    password: String;

    constructor(username:String, password:String){
        this.username = username;
        this.password = password;
    }

    getUserName(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }
}
