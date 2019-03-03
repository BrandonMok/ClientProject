/**
 * localStorageCookie
 * All methods for localStorage and Cookies
 */


 /**
  * storeLocalInfo()
  * Stores input information into LocalStorage & cookies
  */
function storeLocalInfo(){
    // IE7 uses cookies
    // Check for IE7 first
    if(ieSeven){
        // Use cookies
        if(GetCookie('firstName') == null && GetCookie('lastName') == null && GetCookie('email') == null){
            // Setting cookies
            SetCookie('firstName', $("fName").value);
            SetCookie('lastName', $('lName').value);
            SetCookie('email', $('email').value);
        }
    }
    else if (window.localStorage){  // all other browsers
        // If form is filled out - store info
        if( $("fName").value != null && $("lName").value != null  && $("email").value != null ){
            localStorage.setItem("firstName", $("fName").value);
            localStorage.setItem("lastName", $("lName").value);
            localStorage.setItem("email", $("email").value);
        }
    }
}



/**
 * retrieveLocalInfo()
 * Retreives LocalStorage pairs and cookies and sets values into final form
 */
function retrieveLocalInfo(){
    // Check for IEseven
    if(ieSeven){
        // If there are cookies!
        if(GetCookie('firstName') !== null || GetCookie('lastName') !== null || GetCookie('email') !== null){
            // Setting cookies - Value pair
            $("fName").setAttribute("value", GetCookie('firstName'));
            $("lName").setAttribute("value", GetCookie('lastName'));
            $("email").setAttribute("value", GetCookie('email'));

            // Use DTHML to apply green filled in background
            formUpdateCheck($("fName"));
            formUpdateCheck($("lName"));
            formUpdateCheck($("email"));
        }
    }
    else{   // LocalStorage way
        if($("fName").value == "" || $("lName").value == ""  ||  $("email").value == ""){
            // Checks if Local Storage works in the browser
            if(window.localStorage){
                // Check if there's anything in the local storage first
                if(window.localStorage.length > 0){
                    // Case when there are pairs in the LocalStorage
                    // Sets preset recorded information
                    $("fName").setAttribute("value", localStorage.getItem("firstName"));
                    $("lName").setAttribute("value", localStorage.getItem("lastName"));
                    $("email").setAttribute("value", localStorage.getItem("email"));
    
                    // Use DTHML to apply green filled in background
                    formUpdateCheck($("fName"));
                    formUpdateCheck($("lName"));
                    formUpdateCheck($("email"));
                }
            }
        }
    }
}


