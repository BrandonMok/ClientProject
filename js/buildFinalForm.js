/**
* Brandon Mok
* Form build function for end of selections
*/

function buildFinalForm(){
    // Form
    var finalForm = document.createElement('form'); // create form
        finalForm.setAttribute('method','POST');         // give form method POST
        finalForm.setAttribute('action','/index.html');   // redirect user after form submission
        finalForm.setAttribute('id','myFinalForm');
        // Forking for ieSeven
        if(ieSeven){
            finalForm.setAttribute('onsubmit', function(){return validation();});  // call validation method
        }else{
            finalForm.setAttribute('onsubmit', 'return validation();');  // call validation method
        }


    // Form Header
    var formHeader = document.createElement('h2');
        formHeader.appendChild(document.createTextNode('Fill out the form to get your vehicle!'));
    

    // Text/labels next to the fields
    var fNameText = document.createTextNode('First Name ');
    var lNameText = document.createTextNode('Last Name ');
    var emailText = document.createTextNode('Email ');


    // Input
    var inputFName = document.createElement('input');
        inputFName.setAttribute('type','text');
        inputFName.setAttribute('id','fName');
        inputFName.setAttribute('name', 'fName');
        // Forking for ieSeven
        if(ieSeven){
            inputFName.setAttribute('onchange', function(){formUpdateCheck(this)});
        }else{
            inputFName.setAttribute('onchange','formUpdateCheck(this)');
        }


    // Last Name
    var inputLName = document.createElement('input');
        inputLName.setAttribute('type','text');
        inputLName.setAttribute('id','lName');
        inputLName.setAttribute('name', 'lName');
            // Forking for ieSeven
        if(ieSeven){
            inputLFName.setAttribute('onchange', function(){formUpdateCheck(this)});
        }else{
            inputLName.setAttribute('onchange','formUpdateCheck(this)');
        }

    // Email
    var inputEmail = document.createElement('input');
        inputEmail.setAttribute('type','email');
        inputEmail.setAttribute('id','email');
        inputEmail.setAttribute('name', 'email');
            // Forking for ieSeven
        if(ieSeven){
            inputEmail.setAttribute('onchange', function(){formUpdateCheck(this)});
        }else{
            inputEmail.setAttribute('onchange','formUpdateCheck(this)');
        }
        
        
    // Submit
    var submit = document.createElement('input');
        submit.setAttribute('type','submit');
        submit.setAttribute('value','submit');
        submit.setAttribute('id','submitBtn')


    // Showing forms & appending options
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
    retrieveLocalInfo()
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

