
var username_value = document.getElementById("username").value;
var email_value = document.getElementById("email").value;
var password_value = document.getElementById("password").value;
var password1_value = document.getElementById("password1").value;

class CheckInputs{
    constructor(username_value, email_value, password_value, password1_value){
        this.username = username_value;
        this.email = email_value;
        this.password = password_value;
        this.password1 = password1_value;
    }

    checkNotEmpty(){
        if (this.username!=="" && this.email!=="" && this.password!=="" && this.password1!==""){
            this.checkUsername();
            this.checkEmail();
            this.checkPassword();
        }
        else{
            alert("All Fields are necessary to be Filled");
        }
    }

    checkUsername(){
        let username_length = this.username.length();
        if (username_length < 4 ){
            document.querySelector("#username").addClassName("input-error");
            document.querySelector("small").addClassName("small-error"); //   NEEDS TO BE UPDATED LATER ON
        }
    }

    checkEmail() {
        let email_length = this.email.length();
        for (var i = 0; i < email_length; i++){
            if (this.email[i]==='@'){
                break;
            }else{
                document.querySelector("#email").addClassName("input-error");
                document.querySelector("small").addClassName("small-error"); //   NEEDS TO BE UPDATED LATER ON
            }

        }
    }

    checkPassword() {
        let password_length = this.password_length;
        if (password_length > 8 && password_length < 14){
            if (password_value===password1_value){
                break;
            }else{
                document.querySelector("#password1").addClassName("input-error");    
            }
            break;
            
        }else{
            document.querySelector("#password").addClassName("input-error");
            document.querySelector("small").addClassName("small-error"); //   NEEDS TO BE UPDATED LATER ON
        }
    }

}
