/*
* Brandon Mok
* Form Validation
*/

function validation(){

    // Check for empty fields
    if($('fName').value == ''){
        $('fName').style.backgroundColor = "red";
        return false;
    }
    if($('lName').value == ''){
        $('lName').style.backgroundColor = "red";
        return false;
    }
    if($('email').value == ''){
        $('email').style.backgroundColor = "red";
        return false;
    }


    return true;
}