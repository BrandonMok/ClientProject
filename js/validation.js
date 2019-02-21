/*
* Brandon Mok
* Form Validation
*/

function validation(){

    // Check for empty fields
    if($('fName').value == '' || $('lName').value == '' || $('email').value == ''){
        $('fName').style.backgroundColor = "#EF4648";
        $('lName').style.backgroundColor = "#EF4648";
        $('email').style.backgroundColor = "#EF4648";
        return false;
    }


    // LocalStorage
    // Going to store the form values (i.e First & last name, and email)
    // When user starts over, will fill in the info
    if(window.localStorage){
        // If form is filled out - store info
        if( $("fName").value != undefined && $("lName").value != undefined  && $("email").value != undefined ){
            localStorage.setItem("firstName",$("fName").value);
            localStorage.setItem("lastName",$("lName").value);
            localStorage.setItem("email",$("email").value);
        }
    }else{ // The IE 7 way
        // Use cookies
        if(GetCookie('firstName') != undefined && GetCookie('lastName') != undefined && GetCookie('email') != undefined){
            // Setting cookies
            SetCookie('firstName', $("fName"));
            SetCookie('lastName', $('lName'));
            SetCookie('email', $('email'));
        }
    }

    return true;
}