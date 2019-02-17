/*
* Brandon Mok
* Form Validation
*/

function validation(){

    // Check for empty fields
    if($('fName').value == ''){
        $('fName').style.backgroundColor = "#EF4648";
        return false;
    }
    if($('lName').value == ''){
        $('lName').style.backgroundColor = "#EF4648";
        return false;
    }
    if($('email').value == ''){
        $('email').style.backgroundColor = "#EF4648";
        return false;
    }

    return true;
}