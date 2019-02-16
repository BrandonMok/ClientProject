/*
* Brandon Mok
* BuildIt 
* Function that builds the selection menu and options
*/

var choices = []; // global array to hold choices


function buildIt(dom){
    // value of chosen choice
    var userClicked = dom.value; 

    // Add user choices to array
    choices.push(userClicked);

    var menu;  // menu
    var options; // options
    var question;
    
    // -- Select -- preOption
    var preOption = document.createElement('option');
    preOption.appendChild(document.createTextNode("-- Select --"));


    // check that there's a value
    if(userClicked != undefined){

        // Check if user chose the '-- Select --' option
        if(userClicked === "-- Select --"){
            return;
        }
        if(data[userClicked] == undefined){ // No more items!
            
            // Display choices
            // NOTE: i is set to 1 initially to skip the 'init' from showing
            // for(var i = 1; i < choices.length; i++){
            //     console.log(choices[i]);
            // }

            // Make form
            // Show options
            var form = document.createElement('form'); // create form
                form.setAttribute('method','POST');         // give form method POST
                form.setAttribute('action','index.html');   // redirect user after form submission
                form.setAttribute('id','myForm');
                form.setAttribute('onsubmit', 'return validation();');  // call validation method

            var input = document.createElement('input');
                input.setAttribute("type","text");
                input.setAttribute("id","fName");
                input.setAttribute("name", "fName");
                
            // loop to make form?

            var submit = document.createElement('input');
            submit.setAttribute("type","submit");
            submit.setAttribute("value","submit");


        
            document.getElementById('forms').appendChild(form);

            document.getElementById('myForm').appendChild(input);

        }
        else{
            // Show Question first
            question = document.createTextNode(qData[userClicked][0]);
            document.getElementById('forms').appendChild(question);

            // Menu creation
            menu = document.createElement('select');
            menu.setAttribute('onchange','buildIt(this);');
            document.getElementById('forms').appendChild(menu); // show menu to screen

            // Menu adding the  -- Select -- option
            menu.appendChild(preOption);
            

            // Loop that makes options, loads option data, and puts it in menu
            for(var i = 0; i < data[userClicked].length; i++){
                options = document.createElement('option');
                options.setAttribute('name', data[userClicked][i]);
                options.setAttribute('value', data[userClicked][i]);
                options.appendChild(document.createTextNode(data[userClicked][i]));
                menu.appendChild(options);
            }
        }
    }
}