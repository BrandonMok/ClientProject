/*
* Brandon Mok
* BuildIt 
* Function that builds the selection menu and options
*/

var choices = []; // global array to hold dom choices

function buildIt(dom){
    console.log("At the start: "  + dom);
    console.log("Value at the start: "  + dom.value);
    console.log(dom);

    var hold;   // Hold used to hold dom
    var holdQ;  // Question hold that does same as hold, but for Questions data


    // If user chose the "-- Select --" option
    if(dom.value != "-- Select --"){
        choices.push(dom);
    }


    // First check for outdated browsers
    if(!document.getElementById){
       // window.location = "http://outdatedbrowser.com";
       window.location = "https://www.mozilla.org/en-US/firefox/new/";
    }else{

        // Check for the initial 'init' - first part ran only once
        if(dom == "init"){
            hold = data["init"];        // get the data for using the key
            holdQ = qData["init"];      // get the question data using the key
        }else{
            hold = data[dom.value];     // Use the value, not the DOM obj for data
            holdQ = qData[dom.value];   // Use the value, not the DOM obj to get the question data
        }



        // Check if there aren't any items/data
        if(hold == undefined){ 
            // Check if form and selection display are present when there aren't any choices left
            selectionsFormCheck();    

            // Div to hold the final display items
            var contentDiv = document.createElement('div');
            contentDiv.setAttribute("id","contentDiv");

            // Header
            var finalDispHeader = document.createElement('h1');
            finalDispHeader.setAttribute("id","underline");
            finalDispHeader.appendChild(document.createTextNode("Your selections:"));
            contentDiv.appendChild(finalDispHeader);



            // Display choices - Place in displayDiv
            // NOTE: i is set to 1 initially to skip the 'init' from showing
            for(var i = 1, len = choices.length; i < len; i++){
                var choicesSTR; // variable to hold the sentences
                var selectedChoices = document.createElement('p');

                // Switch to display more text along the selections
                switch(choices[i].value){
                    case "car":
                    case "truck":
                    case "suv":
                        choicesSTR = "You selected a " + choices[i].value;
                        break;
                    case "sedan":
                    case "hatchback":
                        choicesSTR = "With a " + choices[i].value + " model";
                        break;
                    case "automatic":
                    case "manual":
                        choicesSTR = "With a " + choices[i].value + " transmission";
                        break;
                    case "cloth":
                    case "leather":
                        choicesSTR = "With " + choices[i].value + " seats";
                        break; 
                    case "van":
                    case "pickup":
                        choicesSTR = "That is a " +  choices[i].value;
                        break;
                    case "mini":
                    case "camper":
                    case "transit":
                        choicesSTR = "With a make of " +  choices[i].value;
                        break;       
                    case "gas":
                    case "diesal":
                        choicesSTR = "Takes " + choices[i].value + " as fuel";
                        break;
                    case "2 seats":
                    case "4 seats":
                        choicesSTR = "Contains " + choices[i].value + " seats";
                        break;
                    case "large":
                    case "medium":
                    case "small":
                        choicesSTR = "With " + choices[i].value + " sized mirrors";
                        break;
                    case "affordable":
                    case "luxury":
                        choicesSTR = "Within the " + choices[i].value + " price area";
                        break; 
                    case "lane assist":
                    case "back-up camera":
                        choicesSTR = "Contains " + choices[i].value + " as an extra feature";
                        break; 
                    case "wood":
                    case "carbon fiber":
                        choicesSTR = "With " + choices[i].value + " as a trim";
                        break; 
                    case "head-up display":
                    case "touchpad":
                        choicesSTR = "And " + choices[i].value + " as extra features";
                        break; 
                }

                
                selectedChoices.appendChild(document.createTextNode(choicesSTR));   // append choicesSTR to the p tag
                contentDiv.appendChild(selectedChoices); // display user selected choices
            }


            // lastly APPEND the finalDisplay div to the dom
            $('finalDisplay').appendChild(contentDiv);

            buildFinalForm(); // builds the final form for gathering user information
        }
        else{// Case there are available choices
            
            /**
             * Removes choices depending on previous
             * Only works if an option menu - can't be the initial 'init' 
             */
            if(dom != "init"){
                // Case that user starts over 
                // Checks to see if that menu is the last, if not remove all others
                while(dom != dom.parentNode.lastChild){
                    dom.parentNode.removeChild(dom.parentNode.lastChild);  

                    // Cycle through choices array
                    // Find the index and value in the array that equals the selected dom
                    // if the value at the index equals the dom, then while loop to delete the remainder
                    for(var i = 0, len = choices.length-1; i < len; i++){
                        if(choices[i] == dom){// found it 
                            // Since it's found, want to delete the rest of values in the array
                            // take the i index (the one w/the same dom) and delete choices up to the length
                            while(i < len){ 
                                choices.pop();      // remove the remainders
                                i++
                            }
                        }                        
                    }
                         
                    // removes form and selections made display if changed a choice
                    selectionsFormCheck();
                }
            }


            // Container div to hold question and menu
            var selectMenuDIV = document.createElement('div');
            selectMenuDIV.setAttribute('id','menuDIV');
            $('forms').appendChild(selectMenuDIV);  // append the div to the dom

            // Show Question first
            var question = document.createElement('h3');
            question.appendChild(document.createTextNode(holdQ[0]));
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


