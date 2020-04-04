function validateSignUpForm(){
    var address;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    var email = document.getElementById('email').value;
    var phn = document.getElementById('phn').value;
    var address_1 = document.getElementById('address-1').value;
    var address_2 = document.getElementById('address-2').value;
    var address_3 = document.getElementById('address-3').value;
    
    var pass = document.getElementById('pwd-signup').value;
    var conf_pass = document.getElementById('cnf-pwd-signup').value;

    //here goes user signup form custom validation.
    if(fname!="" && lname!="" && email!="" && address_1!=""&& address_2!="" && address_3!=""&& pass!=null && conf_pass!=null  && phn!=""){
        if(phn.length == 10){

            /* Given below is custom meail validation. This is very simple email field validation
            that looks only for the presence of '@' literal and '.' literal in the field value.*/
            var found_1=false;
            var found_2=false;
            for(var i=0; i<email.length;i++){
                var ch = email.charAt(i);
                if(ch=='@'){
                    found_1=true;
                }
                if(ch=='.'){
                    found_2=true;
                }
            }
            if(found_2 && found_1){
                if(pass == conf_pass){
                    address = address_1+"/"+address_2+"/"+address_3;

                    
                    var customer = { //creates customer object with the given attributes
                        fname: fname,
                        lname: lname,
                        email: email,
                        phn: phn,
                        address: address,
                        password: pass
                    };
                    var customer_json = JSON.stringify(customer);

                    //sending POST request with JSON using AJAX to the backend part that handles user profile.
                    var request = new XMLHttpRequest();
                    request.onreadystatechange = function() {
                        if (this.readyState < 4) {
                            $('#signup-button-active').hide();
                            $("#signup-button-disabled").show();
                        }
                        if (this.readyState == 4 && this.status == 200) {
                          $("#new-customer").hide(100);
                          $("#g-id-text").text("Your G-ID is: "+this.responseText);
                          $("#myModal").modal({show: true});
                        }else if(this.readyState == 4 && this.status == 403){
                            alert("Sorry! Account with this email-id already exists! \nTry logging in.");
                            $('#signup-button-active').show();
                            $("#signup-button-disabled").hide();
                        }else if(this.readyState == 4 && this.status != 200){
                            alert("Sorry! Something went wrong.");
                            $('#signup-button-active').show();
                            $("#signup-button-disabled").hide();
                        }
                    };
                    request.open('POST', '/user/createprofile/', true);
                    request.send(customer_json);
                }
                else{
                    alert("Your passwords don't match!");
                }
            }else{
                alert("Your email doesn't look right!");
            }
        }else{
            alert("Your mobile no. doesn't seem right!");
        }
    }else{
        alert("Please don't any field empty!");
    }
}

function loginFormValidation(){
    var g_id = document.getElementById("g-id").value;
    var pwd = document.getElementById("pwd-login").value;

    if(g_id.length == 9){
        var login_customer = {
            g_id: g_id,
            password: pwd
        }

        var login_json = JSON.stringify(login_customer);
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState < 4) {
                $('#login-button-active').hide();
                $("#login-button-disabled").show();
            }
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
                $('#login-button-active').show();
                $("#login-button-disabled").hide();
            }else if(this.readyState == 4 && this.status == 404){
                alert(this.responseText);
                $('#login-button-active').show();
                $("#login-button-disabled").hide();
            }else if(this.readyState == 4 && this.status == 403){
                alert(this.responseText);
                $('#login-button-active').show();
                $("#login-button-disabled").hide();
            }else if(this.readyState == 4 && this.status != 200){
                alert("Sorry! Something went wrong.");
                $('#login-button-active').show();
                $("#login-button-disabled").hide();
            }
        };
        request.open('POST', '/user/login/', true);
        request.send(login_json);
    }
}