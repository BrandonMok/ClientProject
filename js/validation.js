/*
* Brandon Mok
* Form Validation
*/

function validation(){

    // Check for empty fields
    if(document.getElementById('fName') == ''){
        document.getElementById('fName').style.backgroundColor = "red";
        return false;
    }

    
    return true;
}