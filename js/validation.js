/*
* Brandon Mok
* Form Validation
*/

function validation(){
    // Check for empty fields
    if($('fName').value == "" || $('lName').value == "" || $('email').value == ""){
        $('fName').style.backgroundColor = "#EF4648";
        $('lName').style.backgroundColor = "#EF4648";
        $('email').style.backgroundColor = "#EF4648";
        return false;   // return false to the form - denies the info from sending to the server
    }

    // function call to store info into localStorage & cookies
    // In validation, bc ONLY want valid data to be stored
    storeLocalInfo();


    return true;
}
