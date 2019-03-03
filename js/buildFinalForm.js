/**
* Brandon Mok
* Form build function for end of selections
* Form that gathers user info (First & last name, email)
*/

function buildFinalForm(){
    // Form
    var finalForm = document.createElement('form'); // create form
        finalForm.setAttribute('method','POST');    // give form method POST
        finalForm.setAttribute('id','myFinalForm'); // Give an ID  - to append items
        finalForm.style.opacity = 0;    // apply the fading effect
        fadeInEffect(finalForm);          //apply the fading effect
        

    // Text/labels next to the fields
    var fNameText = document.createTextNode('First Name ');
    var lNameText = document.createTextNode('Last Name ');
    var emailText = document.createTextNode('Email ');


    // Form Header Text 
    var formHeader = document.createElement('h2');
        formHeader.appendChild(document.createTextNode('Fill out the form to get your vehicle!'));

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
     * Utilizes the id function like shown in class
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
 * Validation
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

    
    alert("Your vehicle order is sent to the factory!"); // alert for feedback
    return true;    // default 
}




/**
 * formUpdateCheck
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

