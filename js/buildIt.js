/*
* Brandon Mok
* BuildIt 
* Function that builds the selection menu and options
*/

var choices = []; // global array to hold choices


function buildIt(dom){
    console.log("DOM AT START: " + dom);

    var hold; // hold used to hold dom
    var holdQ;  // Quetion hold that does same as hold, but for Questions data


    // Array used to hold entered choices
    //choices.push(dom.value);
    choices.push(dom);


    // First check for outdated browsers
    if(!document.getElementById){
        window.location = "http://outdatedbrowser.com";
    }else{

        // Check for the initial 'init' - first part ran only once
        if(dom == "init"){
            hold = data["init"];        // get the data for using the key
            holdQ = qData["init"];      // get the question data using the key
        }else{
            hold = data[dom.value];     // Use the value, not the DOM obj for data
            holdQ = qData[dom.value];   // Use the value, not the DOM obj to get the question data

            console.log("TEST IN OTHER: ");
        }


        // Check if user chose the '-- Select --' option
        if(dom.value == "-- Select --"){
            choices.pop(); // Remove option from being tracked
        }


        // Check if there aren't any items/data
        if(hold == undefined){ 
            // Check if form and selection display are present when there aren't any choices left
            selectionsFormCheck();    

            // Div to hold the final display items
            var contentDiv = document.createElement('div');
            contentDiv.setAttribute("id","contentDiv");
            $('finalDisplay').appendChild(contentDiv);

            // Header
            var finalDispHeader = document.createElement('h1');
            finalDispHeader.appendChild(document.createTextNode("Your selections:"));
            $('contentDiv').appendChild(finalDispHeader);


            // Display choices - Place in displayDiv
            // NOTE: i is set to 1 initially to skip the 'init' from showing
            for(var i = 1, len = choices.length; i < len; i++){
                var selectedChoices = document.createElement('p');
                selectedChoices.appendChild(document.createTextNode(choices[i].value));
                $('contentDiv').appendChild(selectedChoices);
            }


            buildFinalForm(); // builds the final form for gathering user information
        }
        else{// Case there are available choices
            
            /**
             * Removes choices depending on previous
             * Only works if an option menu - can't be the initial 'init' bc it's the first form
             */
            var index = 1; // var to hold onto index for array

            if(dom != "init"){
                // Case that user starts over 
                // Checks to see if that menu is the last, if not remove all others
                while(dom != dom.parentNode.lastChild){
                    dom.parentNode.removeChild(dom.parentNode.lastChild);  


                    
                    for(var i = 0, len = choices.length-1; i < len; i++){
                        if(choices[i] == dom){// found it 
                            console.log("found it");
                            while(i < len){
                                choices.pop();
                                i++
                            }
                        }                        
                    }
                    
                    
                
                    // Remove all choices after the choice reselected
                   // Didn't work with a for loop - Problem may remove the beginning ones before the right one
                    // if(choices[index] != dom.parentNode.lastChild){
                    //     choices.pop();// Remove elements from the array - from the end
                    // }
                    // index++; // increment the index track


                    // removes form and selections made display if changed a choice
                    selectionsFormCheck();
                }
                
                index = 1; // reset
            }


            // Container div to hold question and menu
            var selectMenuDIV = document.createElement('div');
            selectMenuDIV.setAttribute('id','menuDIV');
            $('forms').appendChild(selectMenuDIV);

            // Show Question first
            var question = document.createElement('h3');
            question.appendChild(document.createTextNode((holdQ[0])));
            $('menuDIV').appendChild(question);


            // Menu creation
            var menu = document.createElement('select');
            if(ieSeven){
                menu.attachEvent('onchange', function(){buildIt(this);});   
            }else{
                menu.setAttribute('onchange','buildIt(this);');
            }
            $('menuDIV').appendChild(menu);


            // Loop that makes options, loads option data, and puts it in menu
            for(var i = 0, len = hold.length; i < len; i++){
                var options = document.createElement('option');
                options.setAttribute('name', hold[i]);
                options.setAttribute('value', hold[i]);
                options.appendChild(document.createTextNode(hold[i]));
                menu.appendChild(options);  // append options to the menu
            }
        }      
    }
}



/**
 * Shortcut for getting elements by id
 */
function $(id){
    return document.getElementById(id);
}


/**
 * selectionsFormCheck
 * Used to check if form and selections are shown if user restarts
 * Gets the parentNode of the element and removes the lastChild (the form & selections)
 */
function selectionsFormCheck(){
    /* Check if the from is present already */
    /* If it is, remove it and rebuild */
    if($('myFinalForm')){
        $('myFinalForm').parentNode.removeChild($('myFinalForm').parentNode.lastChild);
    }
    if($('contentDiv')){
        $('contentDiv').parentNode.removeChild($('contentDiv').parentNode.lastChild);
    }
}