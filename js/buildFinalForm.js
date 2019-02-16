/**
* Brandon Mok
* Form build function for end of selections
*/

function buildFinalForm(){
        var finalForm = document.createElement('form'); // create form
            finalForm.setAttribute('method','POST');         // give form method POST
            // finalForm.setAttribute('action','index.html');   // redirect user after form submission
            finalForm.setAttribute('id','myFinalForm');
            finalForm.setAttribute('onsubmit', 'return validation();');  // call validation method


        // Text/labels next to the fields
        var fNameText = document.createTextNode("First Name ");
        var lNameText = document.createTextNode("Last Name ");
        var emailText = document.createTextNode("Email ");


        var inputFName = document.createElement('input');
            inputFName.setAttribute("type","text");
            inputFName.setAttribute("id","fName");
            inputFName.setAttribute("name", "fName");

        var inputLName = document.createElement('input');
            inputLName.setAttribute("type","text");
            inputLName.setAttribute("id","lName");
            inputLName.setAttribute("name", "lName");

        var inputEmail = document.createElement('input');
            inputEmail.setAttribute("type","email");
            inputEmail.setAttribute("id","email");
            inputEmail.setAttribute("name", "email");
            
        var submit = document.createElement('input');
            submit.setAttribute("type","submit");
            submit.setAttribute("value","submit");


    
        // Showing forms & appending options
        document.getElementById('forms').appendChild(finalForm); 
        document.getElementById('myFinalForm').appendChild(fNameText);  
        document.getElementById('myFinalForm').appendChild(inputFName); 
        document.getElementById('myFinalForm').appendChild(lNameText);   
        document.getElementById('myFinalForm').appendChild(inputLName);
        document.getElementById('myFinalForm').appendChild(emailText);  
        document.getElementById('myFinalForm').appendChild(inputEmail);
        document.getElementById('myFinalForm').appendChild(submit);
}
