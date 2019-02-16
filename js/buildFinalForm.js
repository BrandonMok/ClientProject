/**
* Brandon Mok
* Form build function for end of selections
*/

function buildFinalForm(){
        // Form
        var finalForm = document.createElement('form'); // create form
            finalForm.setAttribute('method','POST');         // give form method POST
            // finalForm.setAttribute('action','index.html');   // redirect user after form submission
            finalForm.setAttribute('id','myFinalForm');
            finalForm.setAttribute('onsubmit', 'return validation();');  // call validation method


        // Text/labels next to the fields
        var fNameText = document.createTextNode("First Name ");
        var lNameText = document.createTextNode("Last Name ");
        var emailText = document.createTextNode("Email ");


        // Input
        var inputFName = document.createElement('input');
            inputFName.setAttribute("type","text");
            inputFName.setAttribute("id","fName");
            inputFName.setAttribute("name", "fName");

        // Last Name
        var inputLName = document.createElement('input');
            inputLName.setAttribute("type","text");
            inputLName.setAttribute("id","lName");
            inputLName.setAttribute("name", "lName");

        // Email
        var inputEmail = document.createElement('input');
            inputEmail.setAttribute("type","email");
            inputEmail.setAttribute("id","email");
            inputEmail.setAttribute("name", "email");
            
        // Submit
        var submit = document.createElement('input');
            submit.setAttribute("type","submit");
            submit.setAttribute("value","submit");
            submit.setAttribute("id","submitBtn")


    
        // Showing forms & appending options
        $('forms').appendChild(finalForm); 
        $('myFinalForm').appendChild(fNameText);  
        $('myFinalForm').appendChild(inputFName); 
        $('myFinalForm').appendChild(lNameText);   
        $('myFinalForm').appendChild(inputLName);
        $('myFinalForm').appendChild(emailText);  
        $('myFinalForm').appendChild(inputEmail);
        $('myFinalForm').appendChild(submit);
}
