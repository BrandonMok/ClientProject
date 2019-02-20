/**
* Brandon Mok
* Form build function for end of selections
*/

function buildFinalForm(){
        // Form
        var finalForm = document.createElement('form'); // create form
            finalForm.setAttribute('method','POST');         // give form method POST
            finalForm.setAttribute('action','index.html');   // redirect user after form submission
            finalForm.setAttribute('id','myFinalForm');
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

            

        
        // local Storage retrival
        if($("fName").value == "" || $("lName").value == ""  ||  $("email").value == ""){
            // Check first to see if there is anything in localstorage
            if(window.localStorage.length == 0){
                console.log("Local Storage is empty!");
                return;
            }else{
                // Case when there are pairs in the LocalStorage

                // Sets preset recorded information
                $("fName").setAttribute("value", localStorage.getItem("firstName"));
                $("lName").setAttribute("value", localStorage.getItem("lastName"));
                $("email").setAttribute("value", localStorage.getItem("email"));
            } 


            // if(GetCookie('firstName') == "" && GetCookie('lastName') == "" && GetCookie('email' == "")){
            //     // Might need to change
    
            //     // Setting cookies
            //     $("fName").setAttribute("value", GetCookie('firstName', $("fName")));
            //     $("lName").setAttribute("value", GetCookie('lastName', $('lName')));
            //     $("email").setAttribute("value", GetCookie('email',$('email')));
            // }
        }
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

