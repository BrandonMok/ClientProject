/*
* Brandon Mok
* BuildIt 
* Function that builds the selection menu and options
*/

var choices = []; // global array to hold dom choices

function buildIt(dom){
    console.log(dom);
    console.log("TYPE: " + typeof dom);
    console.log("Value at the start: "  + dom.value);

    var hold;   // Hold used to hold dom
    var holdQ;  // Question hold that does same as hold, but for Questions data

    // If user chose the "-- Select --" option
    if(dom.value != "-- Select --"){
        choices.push(dom);  // only want the non "-- Select --" option
    }
    

    // First check for outdated browsers
    if(!document.getElementById){
        // Let user know that their browser is outdated
        alert("Outdated browser detected, please download an updated version.");
        window.location = "https://www.mozilla.org/en-US/firefox/new/"; // redirect to Mozilla's download page
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
                contentDiv.style.opacity = 0;   // apply the fade effect
                fadeInEffect(contentDiv);         // call the function to fade

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
                    case "2":
                    case "4":
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
                    case "Apple Car play":
                    case "bluetooth":
                        choicesSTR = "And " + choices[i].value + " for in-cabin features";
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
                selectMenuDIV.setAttribute('id','formDiv')  
                $('forms').appendChild(selectMenuDIV);  // append the div to the dom


            // Show Question first
            var question = document.createElement('h3');
                question.appendChild(document.createTextNode(holdQ[0]));    // give h3 the value of question
                $('formDiv').appendChild(question); // append question h3 to the dom


            // Menu creation
            var menu = document.createElement('select');
            menu.style.opacity = 0; // preseting the fade affect
            fadeInEffect(menu);     // call fade affect
            if(ieSeven){    // forking for IE7
                menu.attachEvent('onchange', function(){ buildIt(this); });   
            }else{
                menu.setAttribute('onchange','buildIt(this);'); 
            }
            $('formDiv').appendChild(menu); // append the menu to the dom


            // Loop that makes options, loads option data, and puts it in menu
            for(var i = 0, len = hold.length; i < len; i++){
                var options = document.createElement('option');     // create options
                options.setAttribute('name', hold[i]);              // Give values to options
                options.setAttribute('value', hold[i]);             // Give values to options
                options.appendChild(document.createTextNode(hold[i]));  // Show text value of option
                menu.appendChild(options);  // append options to the menu
            }
        }      
    }
}



/**
 * Shortcut for getting elements by id
 * Was shown in class - makes code cleaner
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


/**
 * DHTML effect to fade the menus into the dom 
 * Opacity is originally set to 0
 * Opacity can only go up to a value of 1 [0,1]
 */
function fadeInEffect(dom){
    // Store the number value of the dom's opacity
    // Needs to be a float to have extra decimal places (can't be an int because only either 0 or 1)
    var domOpacity = parseFloat(dom.style.opacity);

    // if less than 1
    if(domOpacity < 1.0){
        dom.style.opacity = domOpacity + 0.25;  // increment to the opacity
        setTimeout(function(){fadeInEffect(dom);} , 200); // keep calling the function
    }
}



