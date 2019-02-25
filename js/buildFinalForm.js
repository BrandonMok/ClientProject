/**
* Brandon Mok
* Form build function for end of selections
*/

function buildFinalForm(){
    // Form
    var finalForm = document.createElement('form'); // create form
        finalForm.setAttribute('method','POST');    // give form method POST
        finalForm.setAttribute('id','myFinalForm'); // Give an ID 


    // Form Header
    var formHeader = document.createElement('h2');
        formHeader.appendChild(document.createTextNode('Fill out the form to get your vehicle!'));


    // Text/labels next to the fields
    var fNameText = document.createTextNode('First Name ');
    var lNameText = document.createTextNode('Last Name ');
    var emailText = document.createTextNode('Email ');



    // First Name Input
    var inputFName = document.createElement('input');
        inputFName.setAttribute('type','text');
        inputFName.setAttribute('id','fName');
        inputFName.setAttribute('name', 'fName');

    // Last Name Input
    var inputLName = document.createElement('input');
        inputLName.setAttribute('type','text');
        inputLName.setAttribute('id','lName');
        inputLName.setAttribute('name', 'lName');

    // Email Input
    var inputEmail = document.createElement('input');
        inputEmail.setAttribute('type','email');
        inputEmail.setAttribute('id','email');
        inputEmail.setAttribute('name', 'email');
        
    // Submit Button Input
    var submit = document.createElement('input');
        submit.setAttribute('type','submit');
        submit.setAttribute('value','submit');
        submit.setAttribute('id','submitBtn');




    /**
     * IE7 forking for attachingEvents / setting Attributes
     */ 
    if(ieSeven){ // for IE7
        finalForm.attachEvent('onsubmit', function(){return validation();});   // Actual Form -select
        inputFName.attachEvent('onchange', function(){formUpdateCheck(this);}); // FirstName field
        inputLName.attachEvent('onchange', function(){formUpdateCheck(this);}); // LastName field
        inputEmail.attachEvent('onchange', function(){formUpdateCheck(this);}); // email field
    }
    else{   // > IE7
        finalForm.setAttribute('onsubmit','return validation();');      // Actual form - select
        inputFName.setAttribute('onchange', 'formUpdateCheck(this);');  // Firstname field
        inputLName.setAttribute('onchange', 'formUpdateCheck(this)');   // lastname field
        inputEmail.setAttribute('onchange', 'formUpdateCheck(this)');   // Email field
    }



    /**
     * Showing forms & appending options
     */
    $('forms').appendChild(finalForm);  
    $('myFinalForm').appendChild(formHeader);
    $('myFinalForm').appendChild(fNameText);  
    $('myFinalForm').appendChild(inputFName); 
    $('myFinalForm').appendChild(lNameText);   
    $('myFinalForm').appendChild(inputLName);
    $('myFinalForm').appendChild(emailText);  
    $('myFinalForm').appendChild(inputEmail);
    $('myFinalForm').appendChild(submit);      

    

    // Retrieve the pairs from LS and cookies
    // Use these values to preset/pre-fill the form
    retrieveLocalInfo();
}


/**
 * DHTML to change form input background to green onchange based on the input
 */
function formUpdateCheck(ele){
    // change to green
    ele.style.backgroundColor="#AEF78E";

    // change back to white if empty
    if(ele.value ==  ""){
        ele.style.backgroundColor="white";
    }
}

