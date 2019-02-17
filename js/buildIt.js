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
    var question; // questions 
    
    // -- Select -- preOption
    // var preOption = document.createElement('option');
    // preOption.appendChild(document.createTextNode("-- Select --"));


    // check that there's a value
    if(userClicked != undefined){

        // Check if user chose the '-- Select --' option
        if(userClicked === "-- Select --"){
            return; // return nothing
        }
        if(data[userClicked] == undefined){ // No more items!

            // Header
            var finalDispHeader = document.createElement('h1');
            finalDispHeader.appendChild(document.createTextNode("Your selections:"));
            $('finalDisplay').appendChild(finalDispHeader);


            // var used to create 'p' tags to hold choices
            var selectedChoices; 


            // Display choices - Place in displayDiv
            // NOTE: i is set to 1 initially to skip the 'init' from showing
            for(var i = 1; i < choices.length; i++){
                selectedChoices = document.createElement('p');
                selectedChoices.appendChild(document.createTextNode(choices[i]));
                $('finalDisplay').appendChild(selectedChoices);
            }

            buildFinalForm(); // builds the final form for gathering user information
        }
        else{ 
            // Show Question first
            question = document.createTextNode(qData[userClicked][0]);
            $('forms').appendChild(question);

            // Menu creation
            menu = document.createElement('select');
            menu.setAttribute('onchange','buildIt(this);');
            $('forms').appendChild(menu); // show menu to screen


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
