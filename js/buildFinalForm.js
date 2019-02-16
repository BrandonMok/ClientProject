/**
* Brandon Mok
* Form build function for end of selections
*/

function buildFinalForm(){
        var finalForm = document.createElement('form'); // create form
            finalForm.setAttribute('method','POST');         // give form method POST
            finalForm.setAttribute('action','index.html');   // redirect user after form submission
            finalForm.setAttribute('id','myForm');
            finalForm.setAttribute('onsubmit', 'return validation();');  // call validation method

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
        document.getElementById('myForm').appendChild(inputFName);  
        document.getElementById('myForm').appendChild(inputLName);
        document.getElementById('myForm').appendChild(inputEmail);
        document.getElementById('myForm').appendChild(submit);
}