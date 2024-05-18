var music = new Audio('MUSIC.mp3');
music.preload = 'auto';

var catmeow = new Audio('catmeow.mp3');
catmeow.preload = 'auto';

var catscream = new Audio('CATSCREAMSOUND.mp3');
catscream.preload = 'auto';

var squeak = new Audio('SQUEAKSOUND.mp3');
squeak.preload = 'auto';

var toilet = new Audio('toiletflushing.mp3');
toilet.preload = 'auto';

var watersound = new Audio('WATERSOUND.mp3');
watersound.preload = 'auto';

var beersound = new Audio('BEERSOUND.mp3');
beersound.preload = 'auto';

var catdeathsound = new Audio('CATPICKUP.mp3');
catdeathsound.preload = 'auto';

var knifesound = new Audio('KNIFEPICKUP.mp3');
knifesound.preload = 'auto';

var ovensound = new Audio('OVENSOUND.mp3');
ovensound.preload = 'auto';

var laughing = new Audio('ALITTLEGIRLLAUHGING.mp3');
laughing.preload = 'auto';

var splat = new Audio('SPLATSOUND.mp3');
splat.preload = 'auto';

var scream = new Audio('SCREAMSOUND.mp3');
scream.preload = 'auto';

function startAudio() {
    music.play();
}

function unmuteAllSounds() {
    music.muted = false;
    catmeow.muted = false;
}

var knife = false;
var bloodyknife = false;
var cat = false;
var poison = false;
var water = false;
var beer = false;
 
var mompretask = false;
var momtask = false;
var dadpretask = false;
var dadtask = false;
var sisterpretask = false;
var sistertask = false;

//for the rooms 
var cat2= false;
var mom1= false;
var mom2= false;
var dad2 = false;
var sister1= false;
var sister2= false;


var roomimage = document.getElementById("backgroundphoto");
var inventoryimage = document.getElementById("inventoryimg");
var musicimage = document.getElementById("musicbox");
var textboximage= document.getElementById("textboximg");
var displayText = document.getElementById("readingtext");
var nextbutton = document.getElementById("nextbutton");
var previousbutton = document.getElementById("previousbutton");
var textboxbutton = document.getElementById("textboxbutton");


function nextroom(choice) {

    if (choice === 'aliceroom') {
        displayText.textContent = 'My bedroom!';
        if (cat2){
            roomimage.src = 'alicebedroom4.png';
        }
        else{

            roomimage.src = 'alicebedroom2.png';

            var newButton = document.createElement('button');
            newButton.id = 'catbutton';
            newButton.setAttribute('onclick', "clickable('cat')");
            newButton.style.position = 'absolute';
            newButton.style.top = '76%';
            newButton.style.left = '26%';
            newButton.style.width = '13%';
            newButton.style.height = '7%';
            newButton.style.borderRadius = '5%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);
        }

        var buttonIDsToRemove = ['rattrap', 'sarahroom', 'johnroom'];
        buttonIDsToRemove.forEach(function(buttonID) {
            var buttonToRemove = document.getElementById(buttonID);
            if (buttonToRemove) {
                buttonToRemove.parentNode.removeChild(buttonToRemove);
            }
        });

        

        var newButton = document.createElement('button');
            newButton.id = 'teddybutton';
            newButton.setAttribute('onclick', "clickable('teddybear')");
            newButton.style.position = 'absolute';
            newButton.style.top = '60%';
            newButton.style.left = '80%';
            newButton.style.width = '7%';
            newButton.style.height = '8%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);


        var newButton = document.createElement('button');
            newButton.id = 'dollhousebutton';
            newButton.setAttribute('onclick', "clickable('dollhouse')");
            newButton.style.position = 'absolute';
            newButton.style.top = '90%';
            newButton.style.left = '48%';
            newButton.style.width = '7%';
            newButton.style.height = '6%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //NEXTBUTTON!
            nextbutton.style.top = '38%';
            nextbutton.style.left = '95%';
            nextbutton.setAttribute('onclick', "nextroom('hallway')");

        //PREVIOUSBUTTON!
            previousbutton.style.width = '0%';
            previousbutton.style.height = '0%';
            previousbutton.style.opacity = '0.2';
            previousbutton.setAttribute('onclick', "nextroom('aliceroom')");

    } 

    else if (choice === 'hallway') {
        displayText.textContent = 'Theres John and Sarahs rooms!';

        if (poison){
            roomimage.src = 'hallway2.png';
        }
        else{
            roomimage.src = 'hallway1.png';
            //RATTRAP!!
            var newButton = document.createElement('button');
            newButton.id = 'rattrap';
            newButton.setAttribute('onclick', "clickable('rattrap')");
            newButton.style.position = 'absolute';
            newButton.style.top = '88%';
            newButton.style.left = '49%';
            newButton.style.width = '7%';
            newButton.style.height = '10%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        }
        
        
        var buttonIDsToRemove = ['catbutton', 'teddybutton', 'dollhousebutton', 'dad', 'bathroom', 'portrait', 'desk', 'sarah', 'poster'];
        buttonIDsToRemove.forEach(function(buttonID) {
            var buttonToRemove = document.getElementById(buttonID);
            if (buttonToRemove) {
                buttonToRemove.parentNode.removeChild(buttonToRemove);
            }
        });

        
        //SARAHROOM!!
            var newButton = document.createElement('button');
            newButton.id = 'sarahroom';
            newButton.setAttribute('onclick', "nextroom('sarahroom')");
            newButton.style.position = 'absolute';
            newButton.style.top = '48%';
            newButton.style.left = '62%';
            newButton.style.width = '20%';
            newButton.style.height = '24%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //JOHNROOM!!
            var newButton = document.createElement('button');
            newButton.id = 'johnroom';
            newButton.setAttribute('onclick', "nextroom('johnroom')");
            newButton.style.position = 'absolute';
            newButton.style.top = '47%';
            newButton.style.left = '15%';
            newButton.style.width = '23%';
            newButton.style.height = '14%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //NEXTBUTTON!
            nextbutton.style.top = '41%';
            nextbutton.style.left = '93%';
            nextbutton.setAttribute('onclick', "nextroom('livingroom')");

        //PREVIOUSBUTTON!
            previousbutton.style.top = '41%';
            previousbutton.style.left = '2%';
            previousbutton.style.width = '5%';
            previousbutton.style.height = '7%';
            previousbutton.style.opacity = '0.2';
            previousbutton.setAttribute('onclick', "nextroom('aliceroom')");
        
        
    } 
    

    else if (choice === 'livingroom') {
        displayText.textContent = 'Hi papa!';

        if (dad2){
            roomimage.src = 'livingroom3.png';
        }
        else{
            roomimage.src = 'livingroom1.png';
        }

        var buttonIDsToRemove = ['johnroom', 'sarahroom', 'rattrap', 'toilet', 'water', 'mom', 'cabinet', 'oven', 'fridge'];
        buttonIDsToRemove.forEach(function(buttonID) {
            var buttonToRemove = document.getElementById(buttonID);
            if (buttonToRemove) {
                buttonToRemove.parentNode.removeChild(buttonToRemove);
            }
        });

        //PAPA!!
            var newButton = document.createElement('button');
            newButton.id = 'portrait';
            newButton.setAttribute('onclick', "clickable('portrait')");
            newButton.style.position = 'absolute';
            newButton.style.top = '40%';
            newButton.style.left = '20%';
            newButton.style.width = '24%';
            newButton.style.height = '14%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);


        //PORTRAIT!!
            var newButton = document.createElement('button');
            newButton.id = 'dad';
            newButton.setAttribute('onclick', "clickable('dad')");
            newButton.style.position = 'absolute';
            newButton.style.top = '56%';
            newButton.style.left = '23%';
            newButton.style.width = '10%';
            newButton.style.height = '40%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //BATHROOM!!
            var newButton = document.createElement('button');
            newButton.id = 'bathroom';
            newButton.setAttribute('onclick', "nextroom('bathroom')");
            newButton.style.position = 'absolute';
            newButton.style.top = '46%';
            newButton.style.left = '75%';
            newButton.style.width = '18%';
            newButton.style.height = '20%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //NEXTBUTTON!
            nextbutton.style.top = '39%';
            nextbutton.style.left = '96%';
            nextbutton.setAttribute('onclick', "nextroom('kitchen')");

        //PREVIOUSBUTTON!
            previousbutton.style.top = '41%';
            previousbutton.style.left = '2%';
            previousbutton.style.width = '5%';
            previousbutton.style.height = '7%';
            previousbutton.style.opacity = '0.2';
            previousbutton.setAttribute('onclick', "nextroom('hallway')");
    } 

    else if (choice === 'bathroom') {
        displayText.textContent = 'The bathroom! Sometimes I come here to hide';
        displayText.textContent = '';
        roomimage.src = 'bathroom1.png';

        var buttonIDsToRemove = ['dad', 'bathroom', 'portrait'];
        buttonIDsToRemove.forEach(function(buttonID) {
            var buttonToRemove = document.getElementById(buttonID);
            if (buttonToRemove) {
                buttonToRemove.parentNode.removeChild(buttonToRemove);
            }
        });

        //TOILET!!
        var newButton = document.createElement('button');
            newButton.id = 'toilet';
            newButton.setAttribute('onclick', "clickable('toilet')");
            newButton.style.position = 'absolute';
            newButton.style.top = '76%';
            newButton.style.left = '76%';
            newButton.style.width = '10%';
            newButton.style.height = '20%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //CUP OF WATER!!
        var newButton = document.createElement('button');
            newButton.id = 'water';
            newButton.setAttribute('onclick', "clickable('water')");
            newButton.style.position = 'absolute';
            newButton.style.top = '60%';
            newButton.style.left = '62%';
            newButton.style.width = '5%';
            newButton.style.height = '5%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);


        //NEXTBUTTON!
            nextbutton.style.top = '39%';
            nextbutton.style.left = '94%';
            nextbutton.setAttribute('onclick', "nextroom('livingroom')");

       //PREVIOUSBUTTON!
            previousbutton.style.top = '41%';
            previousbutton.style.left = '2%';
            previousbutton.style.width = '0%';
            previousbutton.style.height = '0%';
            previousbutton.style.opacity = '0.2';
            previousbutton.setAttribute('onclick', "nextroom('bathroom')");

    } 

    else if (choice === 'kitchen') {
        displayText.textContent = 'Mmm smells good!';
        if (mom1){
            roomimage.src = 'kitchen2.png';

            var newButton = document.createElement('button');
            newButton.id = 'mom';
            newButton.setAttribute('onclick', "clickable('mom')");
            newButton.style.position = 'absolute';
            newButton.style.top = '46%';
            newButton.style.left = '32%';
            newButton.style.width = '10%';
            newButton.style.height = '45%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);
        }
        else if (mom2){
            displayText.textContent = 'Hmm.. I wonder where Mommy went. Her suitcase is gone too! Must be a fun trip!';
            roomimage.src = 'kitchen3.png';
        }
        else{
            roomimage.src = 'kitchen1.png';

            var newButton = document.createElement('button');
            newButton.id = 'mom';
            newButton.setAttribute('onclick', "clickable('mom')");
            newButton.style.position = 'absolute';
            newButton.style.top = '46%';
            newButton.style.left = '32%';
            newButton.style.width = '10%';
            newButton.style.height = '45%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);
        }

        displayText.textContent = '';
        
        var buttonIDsToRemove = ['dad', 'bathroom', 'portrait'];
        buttonIDsToRemove.forEach(function(buttonID) {
            var buttonToRemove = document.getElementById(buttonID);
            if (buttonToRemove) {
                buttonToRemove.parentNode.removeChild(buttonToRemove);
            }
        });

        //CABINET!!
        var newButton = document.createElement('button');
            newButton.id = 'cabinet';
            newButton.setAttribute('onclick', "clickable('cabinet')");
            newButton.style.position = 'absolute';
            newButton.style.top = '29%';
            newButton.style.left = '38%';
            newButton.style.width = '35%';
            newButton.style.height = '18%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //OVEN!!
        var newButton = document.createElement('button');
            newButton.id = 'oven';
            newButton.setAttribute('onclick', "clickable('oven')");
            newButton.style.position = 'absolute';
            newButton.style.top = '70%';
            newButton.style.left = '65%';
            newButton.style.width = '18%';
            newButton.style.height = '13%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);

        //FRIDGE!!
        var newButton = document.createElement('button');
            newButton.id = 'fridge';
            newButton.setAttribute('onclick', "clickable('fridge')");
            newButton.style.position = 'absolute';
            newButton.style.top = '46%';
            newButton.style.left = '6%';
            newButton.style.width = '20%';
            newButton.style.height = '45%';
            newButton.style.borderRadius = '20%';
            newButton.style.backgroundColor = 'red';
            newButton.style.opacity = '.2';
            document.body.appendChild(newButton);


        //NEXTBUTTON!
            nextbutton.style.top = '39%';
            nextbutton.style.left = '94%';
            nextbutton.setAttribute('onclick', "nextroom('livingroom')");

       //PREVIOUSBUTTON!
            previousbutton.style.top = '41%';
            previousbutton.style.left = '2%';
            previousbutton.style.width = '0%';
            previousbutton.style.height = '0%';
            previousbutton.style.opacity = '0.2';
            previousbutton.setAttribute('onclick', "nextroom('kitchen')");
        
    } 

    else if (choice === 'sarahroom') {
        displayText.textContent = '';

        if (dadtask) {
            if (sister1){
            roomimage.src = 'sarahbedroom4.png';
            }
            else if (sister2){
                roomimage.src = 'sarahbedroom5.png';
                //CHANGE TO LAST
            }
            else{
                roomimage.src = 'sarahbedroom1.png';
            }

            displayText.textContent = '';

            var buttonIDsToRemove = ['johnroom', 'sarahroom', 'rattrap'];
            buttonIDsToRemove.forEach(function(buttonID) {
                var buttonToRemove = document.getElementById(buttonID);
                if (buttonToRemove) {
                    buttonToRemove.parentNode.removeChild(buttonToRemove);
                }
            });

            //TOILET!!
            var newButton = document.createElement('button');
                newButton.id = 'sarah';
                newButton.setAttribute('onclick', "clickable('sarah')");
                newButton.style.position = 'absolute';
                newButton.style.top = '54%';
                newButton.style.left = '31%';
                newButton.style.width = '12%';
                newButton.style.height = '20%';
                newButton.style.borderRadius = '20%';
                newButton.style.backgroundColor = 'red';
                newButton.style.opacity = '.2';
                document.body.appendChild(newButton);

            //CUP OF WATER!!
            var newButton = document.createElement('button');
                newButton.id = 'poster';
                newButton.setAttribute('onclick', "clickable('poster')");
                newButton.style.position = 'absolute';
                newButton.style.top = '40%';
                newButton.style.left = '60%';
                newButton.style.width = '20%';
                newButton.style.height = '10%';
                newButton.style.borderRadius = '20%';
                newButton.style.backgroundColor = 'red';
                newButton.style.opacity = '.2';
                document.body.appendChild(newButton);


            //NEXTBUTTON!
                nextbutton.style.top = '39%';
                nextbutton.style.left = '94%';
                nextbutton.setAttribute('onclick', "nextroom('hallway')");

           //PREVIOUSBUTTON!
                previousbutton.style.top = '41%';
                previousbutton.style.left = '2%';
                previousbutton.style.width = '0%';
                previousbutton.style.height = '0%';
                previousbutton.style.opacity = '0.2';
                previousbutton.setAttribute('onclick', "nextroom('sarahroom')");
        }
        else{
            displayText.textContent = 'Alice: I shouldnt go in there, last time Sarah got mad! ';
        }


    }

    else if (choice === 'johnroom') {
            if (sistertask) {
            roomimage.src = 'johnbedroom1.png';
            displayText.textContent = 'Alice: Hmm I guess John isnt here right now. I should look around to see if theres anything I can help him with. ';

            var buttonIDsToRemove = ['johnroom', 'sarahroom', 'rattrap'];
            buttonIDsToRemove.forEach(function(buttonID) {
                var buttonToRemove = document.getElementById(buttonID);
                if (buttonToRemove) {
                    buttonToRemove.parentNode.removeChild(buttonToRemove);
                }
            });

            //Desk!!
            var newButton = document.createElement('button');
                newButton.id = 'desk';
                newButton.setAttribute('onclick', "clickable('desk')");
                newButton.style.position = 'absolute';
                newButton.style.top = '79%';
                newButton.style.left = '63%';
                newButton.style.width = '27%';
                newButton.style.height = '5%';
                newButton.style.borderRadius = '20%';
                newButton.style.backgroundColor = 'red';
                newButton.style.opacity = '.2';
                document.body.appendChild(newButton);

            //NEXTBUTTON!
                nextbutton.style.top = '40%';
                nextbutton.style.left = '94%';
                nextbutton.setAttribute('onclick', "nextroom('hallway')");

           //PREVIOUSBUTTON!
                previousbutton.style.top = '41%';
                previousbutton.style.left = '2%';
                previousbutton.style.width = '0%';
                previousbutton.style.height = '0%';
                previousbutton.style.opacity = '0.2';
                previousbutton.setAttribute('onclick', "nextroom('johnroom')");
        }
        else{
             displayText.textContent = 'Alice: John said he doesnt want me to go in there anymore!';
        }
        
    } 
}

var momcounter = 0;
var dadcounter = 0;
var sistercounter = 0;
var brothercounter = 0;

function clickable(choice) {


    if (choice === 'mom') {
        if (momcounter === 0) {
            textboximage.src = 'textbox2.png';
            textboxbutton.style.width = '9%';
            textboxbutton.style.height = '7%';
            textboxbutton.style.opacity = '0.2';
            textboxbutton.setAttribute('onclick', "clickable('mom')");
                
            displayText.textContent = 'Alice: Hi Mommy!';
            momcounter++;
        }
        else if (momcounter === 1) {
            displayText.textContent = 'Mom: Hi sweetie! Do I look ok?';
            momcounter++;
        }
        else if (momcounter === 2) {
            displayText.textContent = 'Mom: Hi sweetie! Do I look ok?';
            momcounter++;
        }
        else if (momcounter === 3) {
            displayText.textContent = 'Alice: You look great Mommy! Is there anything you want help with?';
            momcounter++;
        }
        else if (momcounter === 4) {
            displayText.textContent = 'Mom: Yes there is! Can you run to the store and buy me some chicken for dinner? I have to go somewhere for a bit!';
            momcounter++;
        }
        else if (momcounter === 5) {
            displayText.textContent = 'Alice: Sure Mommy! ';
            momcounter++;
        }
        else if (momcounter === 6) {
            displayText.textContent = 'Mom: Just remember that I love you very much Alice. . . I love all the family';
            momcounter++;
        }
        else if (momcounter === 7) {
            displayText.textContent = 'Alice: I love you too Mommy!';
            momcounter++;
        }
        else if (momcounter === 8) {
            roomimage.src = 'kitchen2.png';
            displayText.textContent = 'Alice: Uh oh! If i go to the store then I wont have any time to play with my dollhouse! I should find something around the house to cook! ';
            momcounter++;
            mompretask = true;
            mom1= true;

            textboximage.src = 'textbox1.png';
            textboxbutton.style.width = '0%';
            textboxbutton.style.height = '0%';
            textboxbutton.style.opacity = '0.2';
            textboxbutton.setAttribute('onclick', "clickable('mom')");
        }
        else{
            displayText.textContent = 'I should find something around the house to cook! ';
        }
            
   }

   else if (choice === 'dad') {
        if (momtask){
             if (beer){
                if (dadcounter === 3) {
                    textboximage.src = 'textbox2.png';
                    textboxbutton.style.width = '9%';
                    textboxbutton.style.height = '7%';
                    textboxbutton.style.opacity = '0.2';
                    textboxbutton.setAttribute('onclick', "clickable('dad')");
                        
                    displayText.textContent = 'Alice: Here papa!';

                    inventoryimage.src = 'inventory4.png';
                    dadcounter++;
                }
                else if (dadcounter === 4) {
                    displayText.textContent = 'Papa: Thanks sweetie!' ;
                    dadcounter++;
                }
                else if (dadcounter === 5) {
                    displayText.textContent = 'Alice: Now that I helped papa I should go check on what Sarah wants! ';
                    roomimage.src = 'livingroom2.png';
                    dadcounter++;
                    dad2= true;
                    dadtask = true;
                    textboximage.src = 'textbox1.png';
                    textboxbutton.style.width = '0%';
                    textboxbutton.style.height = '0%';
                    textboxbutton.style.opacity = '0.2';
                    beer=false;
                }
            }
            else{
                if (dadcounter === 0) {
                textboximage.src = 'textbox2.png';
                textboxbutton.style.width = '9%';
                textboxbutton.style.height = '7%';
                textboxbutton.style.opacity = '0.2';
                textboxbutton.setAttribute('onclick', "clickable('dad')");
                    
                displayText.textContent = 'Alice: Hi papa!';
                dadcounter++;
                }
                else if (dadcounter === 1) {
                    displayText.textContent = 'Papa: Hi Alice! Can you be a doll and get me a cold drink from the fridge?' ;
                    dadcounter++;
                }
                else if (dadcounter === 2) {
                    displayText.textContent = 'Alice: Sure papa!';
                    dadcounter++;
                    dadpretask = true;
                    textboximage.src = 'textbox1.png';
                    textboxbutton.style.width = '0%';
                    textboxbutton.style.height = '0%';
                    textboxbutton.style.opacity = '0.2';
                }  
            }
        }

        else{
            displayText.textContent = 'Alice: I shouldnt talk to papa while hes watching his sports! ';
        }
        if (sisterpretask){
             displayText.textContent = 'Silly papa!';
        }

   }

   else if (choice === 'sarah') {
        if (dadtask) {
            if (water){
                if (sistercounter === 4) {
                        textboximage.src = 'textbox2.png';
                        textboxbutton.style.width = '9%';
                        textboxbutton.style.height = '7%';
                        textboxbutton.style.opacity = '0.2';
                        textboxbutton.setAttribute('onclick', "clickable('sarah')");
                        roomimage.src = 'sarahbedroom4.png';
                        displayText.textContent = 'Alice: Hi Sarah!';
                        sistercounter++;
                }
                else if (sistercounter === 5) {
                        displayText.textContent = 'Alice: After all that crying you must be thirsty! I have some water for you!' ;
                        sistercounter++;
                        inventoryimage.src = 'inventory4.png';
                }
                else if (sistercounter === 6) {
                        displayText.textContent = 'Sarah: Thank you Alice, you always make me feel better. ' ;
                        sistercounter++;
                }
                else if (sistercounter === 7) {
                        displayText.textContent = 'Sarah: Woah Im feeling really whoosy, Im going to lie down for a bit' ;
                        roomimage.src = 'sarahbedroom5.png';
                        sistercounter++;
                }
                else if (sistercounter === 8) {
                        displayText.textContent = 'Alice: Wonderful! Now that her problem is solved I should go check on my brother. Only one more task and then im done! ';
                        sistercounter++;
                        roomimage.src = 'sarahbedroom6.png';
                        sistertask = true; 
                        textboximage.src = 'textbox1.png';
                        textboxbutton.style.width = '0%';
                        textboxbutton.style.height = '0%';
                        textboxbutton.style.opacity = '0.2';
                        sister2=true;
                        sister1=false;
                        //change to sister passed out 
                }
            }
            else{
                if (sistercounter === 0) {
                        textboximage.src = 'textbox2.png';
                        textboxbutton.style.width = '9%';
                        textboxbutton.style.height = '7%';
                        textboxbutton.style.opacity = '0.2';
                        textboxbutton.setAttribute('onclick', "clickable('sarah')");
                        displayText.textContent = 'Alice: Looks like Sarah is on the phone. I should listen to her conversation!';
                        
                        sistercounter++;
                }
                else if (sistercounter === 1) {
                        displayText.textContent = 'Sarah: I just dont know what to do! We used protection! I cant have a baby right now and dad will kill me ' ;
                        sistercounter++;
                        roomimage.src = 'sarahbedroom1.png';
                }
                else if (sistercounter === 2) {
                        displayText.textContent = 'Sarah: I wish the baby was just gone ' ;
                        sistercounter++;
                }
                else if (sistercounter === 3) {
                        displayText.textContent = 'Alice: Uh oh! Looks like my sister is preganant! I should find some way to help her so I can play with my dolls.  ';
                        sistercounter++;
                        sisterpretask = true;
                        roomimage.src = 'sarahbedroom3.png';
                        sister1=true;

                        textboximage.src = 'textbox1.png';
                        textboxbutton.style.width = '0%';
                        textboxbutton.style.height = '0%';
                        textboxbutton.style.opacity = '0.2';
                }
            }
        }
        else{
            displayText.textContent = 'Alice: I shouldnt go in there, last time Sarah got mad! ';
        }

        

   }

   else if (choice === 'desk') {
        if (brothercounter === 0) {
                textboximage.src = 'textbox2.png';
                roomimage.src = 'johnplans.png';
                textboxbutton.style.width = '9%';
                textboxbutton.style.height = '7%';
                textboxbutton.style.opacity = '0.2';
                textboxbutton.setAttribute('onclick', "clickable('desk')");
                            
                displayText.textContent = '';
                brothercounter++;
            }
            else if (brothercounter === 1) {
                displayText.textContent = 'Alice: Whoopsies! It looks like John wants to murder all of us! ' ;
                roomimage.src = 'johnbedroom5.png';
                brothercounter++;
            }
            else if (brothercounter === 2) {
                displayText.textContent = 'John: What are you doing in here.' ;
                roomimage.src = 'johnbedroom2.png';
                brothercounter++;
            }
            else if (brothercounter === 3) {
                displayText.textContent = 'Alice: Hi John!' ;
                brothercounter++;
            }
            else if (brothercounter === 4) {
                displayText.textContent = 'John: What are you doing in here.' ;
                brothercounter++;
            }
            else if (brothercounter === 5) {
                displayText.textContent = 'John: Youre not supposed to be in here. ' ;
                brothercounter++;
            }
            else if (brothercounter === 6) {
                displayText.textContent = 'Alice: I saw the plans in your drawer John.' ;
                roomimage.src = 'johnbedroom3.png';
                brothercounter++;
            }
            else if (brothercounter === 7) {
                displayText.textContent = 'John: Im glad you saw them. Ive been watching you today and I realized that youre like me - killing the cat, poisioning our sister. You understand that this world is filth.' ;
                roomimage.src = 'johnbedroom4.png';
                brothercounter++;
            }
            else if (brothercounter === 8) {
                displayText.textContent = 'John: We must cleanse this place, starting with our family. Mom just left us for another man, dad is a drunk idiot, and Sarah is a slut! But you and me are righteous. ' ;
                brothercounter++;
            }
             else if (brothercounter === 9) {
                displayText.textContent = 'John: Join me Alice.. murder the family with me' ;
                
                brothercounter++;
            }

            else if (brothercounter === 10) {
                displayText.textContent = 'Alice: Uh oh, seems like Johns problem is that he is sick in the head! I should fix that so I can play with my dollhouse ';
                roomimage.src = 'johnbedroomfinal.png';
                brothercounter++;
            }

            else if (brothercounter === 11) {
                document.body.style.backgroundColor = '#63000d';
                displayText.textContent = 'BYE JOHN! ';
                roomimage.src = 'johnbloodsplatter.png';
                brothercounter++;
                splat.play();
                scream.play();
            
            }
            else if (brothercounter === 12) {
                document.body.style.backgroundColor = '#000000';
                displayText.textContent = ' . . . ';
                roomimage.src = 'blackscreen.png';
                brothercounter++;
            
            }

            else if (brothercounter === 13) {
                document.body.style.backgroundColor = '#63000d';
                roomimage.src = 'lastroom1.png';
                displayText.textContent = 'Wonderful! I helped all my family fix their problems and now i can finally play with my dollhouse ';
                brothercounter++;
            }
            else if (brothercounter === 14) {
                roomimage.src = 'lastroom2.png';
                displayText.textContent = '. . .  ';
               
                brothercounter++;
            }
            else if (brothercounter === 15) {
                roomimage.src = 'lastroom2.png';
                displayText.textContent = '. . .  ';
               
                brothercounter++;
            }
            else if (brothercounter === 16) {
                roomimage.src = 'lastroom2.png';
                displayText.textContent = '. . .  ';
               
                brothercounter++;
            }
            else if (brothercounter === 17) {
                laughing.play();
                roomimage.src = 'lastroom3.png';
                displayText.textContent = 'Maybe next time we can play together...';
                brothercounter++;
            }

            else if (brothercounter === 18) {
                document.body.style.backgroundColor = '#000000';
                roomimage.src = 'finalphoto.png';
                inventoryimage.src = 'inventoryblack';
                musicimage.src = 'musicblack';
                
                displayText.textContent = 'You would like that wouldnt you?';
                brothercounter++;
            }
   }



    else if (choice === 'cat') {
        if (mompretask){
            if (knife){
                roomimage.src = 'alicebedroom4.png';
                catscream.play();
                displayText.innerText = "Alice: Easy peasy now I just need to cook her up!";
                knife = false; 
                bloodyknife = true;
                cat = true;
                cat2= true;
                mom2= true;
                mom1=false;
                inventoryimage.src = 'inventory3.png';
                catdeathsound.play();  
            }
            else{
                displayText.innerText = "The cat would be perfect for dinner! But shes too squirmy... Maybe if I had something to stop her from moving I could get dinner ready";
            }
            
        }
        else{
            roomimage.src = 'alicebedroom3.png';
            displayText.innerText = "Alice: I hate that cat, she always scratches me. Sometimes I wish I could just eat her!";
            catmeow.play();
        }
    } 

    else if (choice === 'teddybear') {
        roomimage.src = 'alicebedroom3.png';
        displayText.textContent = 'Hi Mr. Snuggles!'; 
    } 

    else if (choice === 'dollhouse') {
        roomimage.src = 'alicebedroom3.png';
        displayText.textContent = 'That\'s my dollhouse! I can play for hours! I\'m so excited to play later.'; 
    } 

    else if (choice === 'rattrap') {
        if (sisterpretask){
            roomimage.src = 'hallway2.png';
            displayText.textContent = 'Alice: This is perfect for the baby, now I just have to find out how to give it to her without her noticing! '; 
            squeak.play();
            poison = true;
            inventoryimage.src = 'inventory6.png';
            //CHANGE INVENTORY
        }
        else{
            displayText.textContent = 'Alice: Mommy hates those rats!'; 
            squeak.play();
        }
    } 

    else if (choice === 'portrait'){
        displayText.textContent = 'Alice: A portrait of my family! Arent we cute!'; 
    }

    else if (choice === 'toilet') {
        displayText.innerText = "Alice:  I love the sound it makes! ";
        toilet.play();
        
    } 
    else if (choice === 'water') {
        if (poison){
            roomimage.src = 'bathroom2.png';
            displayText.innerText = "Alice: Mix mix mix! Now I can give this to sarah without her noticing! ";
            water = true;
            watersound.play();
            inventoryimage.src = 'inventory7.png';
        }
        else{
            displayText.innerText = "Alice: Thats a glass of water for when I get thirsty at night! ";    
        }
    } 

    else if (choice === 'cabinet') {
        if (knife){
            displayText.innerText = "Alice: Mr. Knifey is already in my pocket you nincompoop!";
        }
        else if (bloodyknife){
            displayText.innerText = "Alice: Mr. Knifey is already in my pocket you soggy biscuit! And he's bit dirty too";
        }
        else{
            displayText.innerText = "Alice: Oh boy! My favorite knife! Ill put that in my pocket where it belongs ";
            knife = true;
            inventoryimage.src = 'inventory2.png';
            knifesound.play();
        }
    } 

    else if (choice === 'oven') {
        if (cat){
            displayText.innerText = "Alice: 350 degrees for 20 minutes and then dinner is ready! I wonder where mommy went to with her suitcase? Oh well, I should go check in papa! ";
            cat = false;
            momtask = true; 
            inventoryimage.src = 'inventory4.png';
            ovensound.play();
        }
        else{
            displayText.innerText = "Alice: Our trusty oven!";
        }
    } 

    else if (choice === 'fridge') {
        if (dadpretask){
            if (beer){
                displayText.innerText = "Alice: Youre so silly! I already got the beer!";
            }
            else{
                displayText.innerText = "Alice: This beer is perfect for papa! ";
                beer = true;
                beersound.play();
                inventoryimage.src = 'inventory5.png';
            }
        }
        else{
            displayText.innerText = "Alice: Just some old drinks in there! ";
        }
    } 

    else if (choice === 'poster') {
        displayText.innerText = "Alice: Sarah loves the boys in that band! ";
    } 

}

