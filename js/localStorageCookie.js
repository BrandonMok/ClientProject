/**
 * localStorageCookie
 * All methods for localStorage and Cookies
 */


 /**
  * storeLocalInfo()
  * Stores input information into LocalStorage & cookies
  * Fields will be filled in as the function isn't called until after validation
  */
function storeLocalInfo(){
    // IE7 uses cookies
    // Check for IE7 first
    if(ieSeven){
        // Use cookies
        SetCookie('firstName', $("fName").value);
        SetCookie('lastName', $('lName').value);
        SetCookie('email', $('email').value);
    }
    else if (window.localStorage){  // all other browsers
        localStorage.setItem("firstName", $("fName").value);
        localStorage.setItem("lastName", $("lName").value);
        localStorage.setItem("email", $("email").value);
    }
}



/**
 * retrieveLocalInfo()
 * Retreives LocalStorage pairs and cookies and sets values into final form
 */
function retrieveLocalInfo(){
    // Check for IEseven
    if(ieSeven){
        // Store cookie values into variables
        var firstName = GetCookie('firstName');
        var lastName = GetCookie('lastName');
        var email = GetCookie('email');

        // First check if the values are not null - which implies they do exist
        // If they exist, then set the values to the respective input fields
        if(firstName !== null){
            $("fName").setAttribute("value", GetCookie('firstName'));
        }
        if(lastName !== null){
            $("lName").setAttribute("value", GetCookie('lastName'));
        }
        if(email !== null){
            $("email").setAttribute("value", GetCookie('email'));
        }

        // Use DTHML to apply green filled in background
        formUpdateCheck($("fName"));
        formUpdateCheck($("lName"));
        formUpdateCheck($("email"));
    }
    else{   // LocalStorage way

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


