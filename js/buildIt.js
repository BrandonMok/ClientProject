/*
* Brandon Mok
* BuildIt 
* Function that builds the selection menu and options
*/

var choices = []; // global array to hold choices


function buildIt(dom){

    var hold; // hold used to hold dom
    var holdQ;  // Quetion hold that does same as hold, but for Questions data

    // Array used to hold entered choices
    choices.push(dom.value);

    // First check for outdated browsers
    if(!document.getElementById){
        window.location = "http://outdatedbrowser.com";
    }else{


        // Check for the initial 'init' - first part ran only once
        if(dom == "init"){
            hold = data["init"];    // get the data for using the key
            holdQ = qData["init"];  // get the question data using the key
        }else{
            hold = data[dom.value]; // Use the value, not the DOM obj for data
            holdQ = qData[dom.value];   // Use the value, not the DOM obj to get the question data
        }


        // Check if user chose the '-- Select --' option
        // ACTS as a precaution
        if(dom.value == "-- Select --"){
            return; // return nothing
        }


        // Check if there aren't any items/data
        if(hold == undefined){ 
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
            for(var i = 1; i < choices.length; i++){
                var selectedChoices = document.createElement('p');
                selectedChoices.appendChild(document.createTextNode(choices[i]));
                $('contentDiv').appendChild(selectedChoices);
            }

            buildFinalForm(); // builds the final form for gathering user information
        }
        else{
            // Case there ARE options available and then make the Select menu and options

            // console.log(dom);
            // if(dom.hasChildNodes){
            //  //   dom.removeChild(dom.childNodes);
            //     for(var i =0; i < dom.childNodes.length; i++){
            //         dom.removeChild(dom.childNodes[i]);
            //     }
            // }
            // console.log(dom.parentNode.children);

            // for later
            var allForms = $('forms'); // get the div w/all children
            allForms.childNodes = new Array();  // make an array out of them
            // console.log(allForms.indexOf(dom));
            console.log(allForms.childNodes);

            
            var questionAnswerCont = document.createElement('div');
            questionAnswerCont.setAttribute('id','formPackage');
            $('forms').appendChild(questionAnswerCont);


            // Show Question first
            var question = document.createElement('h3');
            question.appendChild(document.createTextNode((holdQ[0])));
           // $('forms').appendChild(question);
           $('formPackage').appendChild(question);

            // Menu creation
            var menu = document.createElement('select');
            if(ieSeven){
                menu.setAttribute('onchange', function(){'buildIt(this);'});
            }else{
                menu.setAttribute('onchange','buildIt(this);');
            }
          //  $('forms').appendChild(menu); // show menu to screen
            $('formPackage').appendChild(menu);



            // Loop that makes options, loads option data, and puts it in menu
            for(var i = 0; i < hold.length; i++){
                var options = document.createElement('option');
                options.setAttribute('name', hold[i]);
                options.setAttribute('value', hold[i]);
                options.appendChild(document.createTextNode(hold[i]));
                menu.appendChild(options);
            }
        }      
    }
}



function $(id){
    return document.getElementById(id);
}
