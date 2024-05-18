var music = new Audio('MUSIC.mp3');
music.preload = 'auto';

var biteSound = new Audio('BITESOUND.mp3');
biteSound.preload = 'auto';

var armSound = new Audio('ARMSOUND.mp3');
armSound.preload = 'auto';

var gameoverSound = new Audio('GAMEOVERSCREAM.mp3');
gameoverSound.preload = 'auto';

var keySound = new Audio('KEYSOUND.mp3');
keySound.preload = 'auto';

function startAudio() {
    music.play();
}

function unmuteAllSounds() {
    music.muted = false;
    biteSound.muted = false;
    armSound.muted = false;
    gameoverSound.muted = false;
    keySound.muted = false;
}

var button3 = null;
var secretkey = false;
var arm = false;
var livesLeft = 3; 
var gameoversound = new Audio('GAMEOVERSCREAM.mp3');

function showText(choice) {
    var displayText = document.getElementById("displayText");
    var choiceText = document.getElementById("choicetext");

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    if (choice === 'start') {

        if (button3) {
            button3.style.display = 'none'; 
        }

        document.body.style.backgroundImage = "url('faces.jpeg')";
        displayText.innerText = "The room is so dark you can barely see ";
        choiceText.innerText = " Would you like to look around?  ";
        button1.innerText = "yes";
        button2.innerText = "no";
        button1.setAttribute('onclick', "showText('yes')");
        button2.setAttribute('onclick', "showText('no')");

    } 

    else if (choice === 'exit') {
        window.location.href = "../index.html";

    } 
    else if (choice === 'tryagain') {
        window.location.href = "index.html";

    } 

    else if (choice === 'yes') {
        document.body.style.backgroundImage = "url('faces.jpeg')";
        displayText.innerText = "You begin to look around. As you reach out in the dark to feel for the walls you realize that the walls are covered in a warm wet furry substance. Eventually you find a small arm sized hole in the wall and a small door on the opposite wall.";
        choiceText.innerText = "Do you want to enter the door or put your arm in the hole? ";
        button1.innerText = "door";
        button2.innerText = "hole";
        button1.setAttribute('onclick', "showText('door')");
        button2.setAttribute('onclick', "showText('hole')");

    } 

    else if (choice === 'hole') {
        document.body.style.backgroundImage = "url('arm.webp')";

        var biteSound = new Audio('BITESOUND.mp3');
        biteSound.play();

        displayText.innerText = "The hole feels like a warm mouth as you push your hand inside. You feel scared but you already made your choice so you continue pushing your hand inside until its up to your shoulder. Suddenly you feel something hard. A hear a loud crunching sound rings out and there is a horrible sharp pain. The floor beneath you gives out, and you fall further and further until you hit the ground. You scream in pain as you realize your arm is gone. You clutch your bloody stump and cry but there is no time to be afraid in the horror house. As you look around you realize that you as laying on a pile of bones, next to you there is a bloody arm. As you try to get up you realize that there is a glint of silver in the pile of bones. ";
        choiceText.innerText = "Would you like to pick up your arm, return up the hole to the dark room, or investigate the silver glint?";

        button1.innerText = "Arm";
        button2.innerText = "Hole";
        button1.setAttribute('onclick', "showText('arm')");
        button2.setAttribute('onclick', "showText('start')");

        button3 = document.createElement("button");
        button3.setAttribute('id', 'button3');
        button3.innerText = "Investigate";
        button3.setAttribute('onclick', "showText('key')");
        var container = document.querySelector('.container');
        container.appendChild(button3);

    }
    else if (choice === 'arm') {
        document.body.style.backgroundImage = "url('arm2.webp')";

        if (arm){
            displayText.innerText = "You already have the arm in your pocket!";
            choiceText.innerText = "";
        }
        else{
            displayText.innerText = "You hold the arm in your hand.. hopefully it will come in handy ;) ";
            choiceText.innerText = "";
            arm = true;

            var armSound = new Audio('ARMSOUND.mp3');
            armSound.play();


            var armimg = document.createElement('img');
            armimg.src = 'arminvent.png'; 
            armimg.alt = 'Arm Image';

            armimg.style.width = '6.7em'; // Set the width of the smaller image
            armimg.style.position = 'absolute'; // Position the image
            armimg.style.top = '30%'; // Adjust the distance from the top
            armimg.style.left = '42%';
            armimg.style.transform = 'translateX(-50%)';

            // Get the inventory div and append the new image
            var inventoryDiv = document.querySelector('.inventory');
            inventoryDiv.appendChild(armimg);
        }
        

    }
    else if (choice === 'key') {

        document.body.style.backgroundImage = "url('key.jpeg')";

        if (secretkey){
            displayText.innerText = "You already have the key in your pocket!";
            choiceText.innerText = "";

        }
        else{
            document.body.style.backgroundImage = "url('key.jpeg')";
            displayText.innerText = "You dig around with your good hand and realize it is a key. You put the creepy key in your pocket, hoping maybe itll be useful later.";
            choiceText.innerText = "";
            secretkey = true;

            var keySound = new Audio('KEYSOUND.mp3');
            keySound.play();

            var keyimg = document.createElement('img');
            keyimg.src = 'keyinvent.png'; 
            keyimg.alt = 'Key Image';

            keyimg.style.width = '6.7em'; // Set the width of the key image
            keyimg.style.position = 'absolute'; // Position the image
            keyimg.style.top = '30%'; // Adjust the distance from the top
            keyimg.style.left = '50%';

            var inventoryDiv = document.querySelector('.inventory');
            inventoryDiv.appendChild(keyimg);
        }
    }

    else if (choice === 'door') {
        document.body.style.backgroundImage = "url('redroom.png')";
        displayText.innerText = "You crouch to enter the small door. This room is blindingly red. Its so bright that you hardly notice the pair of eyes stairing at you until its too late. A red figure lunges at you.. its eyes are huge and its body is long and thin. As it moves, you can hear its bones break and crack into place.";
        choiceText.innerText = "What would you like to do? ";

        button1.innerText = "attack";
        button2.innerText = "run";
        button1.setAttribute('onclick', "showText('attack')");
        button2.setAttribute('onclick', "showText('start')");
        

        button3 = document.createElement("button");
        button3.setAttribute('id', 'button3');
        button3.innerText = "feed";
        button3.setAttribute('onclick', "showText('feed')");
        var container = document.querySelector('.container');
        container.appendChild(button3);

    }
    else if (choice === 'feed') {
        if (button3  && choice !== 'hole') {
            button3.style.display = 'none'; 
        }

        if (arm) {
            document.body.style.backgroundImage = "url('devoured.png')";
            displayText.innerText = "You throw your bloody arm at the red figure. The creature snatches it out of the air and tears it apart. As its busy chewing on your discarded arm you realize that there is another door on the wall labeled exit";            button1.innerText = "Return to Menu";
            choiceText.innerText = "What would you like to do, open the door or leave the room?";
            button1.innerText = "Open The Door";
            button2.innerText = "Run";
            button1.setAttribute('onclick', "showText('opendoor')");
            button2.setAttribute('onclick', "showText('start')");

        } else {

            gameoversound.play(); 

            document.body.style.backgroundImage = "url('gameover.png')";
            displayText.innerText = "You have nothing to feed the monster with. It looks at you hungrily. You scream as it slowly eats you alive.";
            choiceText.innerText = "GAME OVER -- Horror house has claimed your soul, may you escape next time";
            button1.innerText = "Return to Menu";
            button2.innerText = "try again";
            button1.setAttribute('onclick', "showText('exit')");
            button2.setAttribute('onclick', "showText('tryagain')");
        }
        
    }
    else if (choice === 'opendoor') {

        if (secretkey) {
            document.body.style.backgroundImage = "url('endend.jpeg')";
            displayText.innerText = "You grab the key out of your pocket as quickly as you can and place it into the door shakily. You hear the monster turn to you, its bones click into place as it slowly walks over. As its about to reach you, the door unlocks and you push it open... With a daze you find yourself back at home staring at your computer. Your arm is back but you cant escape the memory of what you've gone through...";
            choiceText.innerText = "Congrats on escaping HORROR HOUSE! Next time you wont be as lucky...";
            button1.innerText = "Return to Menu";
            button2.innerText = "try again";
            button1.setAttribute('onclick', "showText('exit')");
            button2.setAttribute('onclick', "showText('Tryagain')");
        } else {

            gameoversound.play();

            document.body.style.backgroundImage = "url('end.jpeg')";
            displayText.innerText = "You try to shake the door open but you have nothing to open it with. The creature drops your arm with a thud and turns to you. You scream as it slowly eats you alive.";
            choiceText.innerText = "GAME OVER -- Horror house has claimed your soul, may you escape next time";
            button1.innerText = "Return to Menu";
            button2.innerText = "try again";
            button1.setAttribute('onclick', "showText('exit')");
            button2.setAttribute('onclick', "showText('tryagain')");
        }
    }

    else if (choice === 'attack') {
        if (button3  && choice !== 'hole') {
            button3.style.display = 'none'; 
        }

        gameoversound.play();


        document.body.style.backgroundImage = "url('gameover.png')";
        displayText.innerText = "You lunge at the creature but it moves out of your grasp swiftly. As it evades your grasp you think you see a smile cross its bloody face. With one move it reached down and bites your head open, sucking out your brain.";
        choiceText.innerText = "GAME OVER -- Horror house has claimed your soul, may you escape next time";
        button1.innerText = "Return to Menu";
        button2.innerText = "Try Again";
        button1.setAttribute('onclick', "showText('exit')");
        button2.setAttribute('onclick', "showText('tryagain')");
    }


    else if (choice === 'no') {
        document.body.style.backgroundImage = "url('scream.jpeg')";
        displayText.innerText = "You sit there and think about what your life has come to. Suddenly there's a loud scream...";
        choiceText.innerText = "Investigate the scream or look around the room?  ";
        button1.innerText = "scream";
        button2.innerText = "room";
        button1.setAttribute('onclick', "showText('scream')");
        button2.setAttribute('onclick', "showText('yes')");
    }


    else if (choice === 'scream') {

        gameoversound.play(); 


        document.body.style.backgroundImage = "url('gameover.png')";
        displayText.innerText = "you look around frantically trying to find where the scream came from. Another scream cries out, this time its more gutteral and deep. You feel the floor shake beheath you..... the walls begin to close around you and theyre wet to the touch. You realize that the room you were in wasnt a room at all, and you are about to be eaten alive";
        choiceText.innerText = "GAME OVER -- Horror house has claimed your soul, may you escape next time";
        button1.innerText = "Return to Menu";
        button2.innerText = "Try Again";
        button1.setAttribute('onclick', "showText('exit')");
        button2.setAttribute('onclick', "showText('tryagain')");
    }


    displayText.style.display = 'block';

}