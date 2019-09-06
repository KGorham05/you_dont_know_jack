// PSUEDO CODE TRIVIA GAME

// Create Question Array 
var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story",
    image: "assets/images/toystory.gif"
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice",
    image: "assets/images/spicegirls.gif"
}];

// Create an object to hold all game logic
var triviaGameObj = {

    // Game Variables 
    currentQuestion: 0,
    playerOneScore: 0,
    playerTwoScore: 0,
    playerOneName: "starting string",
    playerTwoName: "",
    counter: 0,
    multiplayerGame: false,
    gameHasStarted: false,
    currentPlayer: null,
    timer: null,

    // Game Functions
    countdown: function () {
        this.counter--;
        $("#count-down-text").text(this.counter);
        if (this.counter === 0) {
            console.log('Time up!');
            clearInterval(timer);
        }
    },

    startGame: function () {
        console.log('Multiplayer = ' + this.multiplayerGame)
        // hide the setup-game-screen
        $("#setup-game-screen").addClass('hide');
        this.capturePlayerNames();
    },

    capturePlayerNames: function() {
        // reveal this screen
        $("#input-player-name").removeClass('hide');
        // listen for ENTER btn
        $(document).on('keydown', function(e) {

            // check if Player one's name has already been set
            // separate logic using a flag variable to determine which name to save WORKING HERE!!!!
            
            if (e.which == 13) {
                // set player One name var = value of input field
                triviaGameObj.playerOneName = $("#name-input").val().trim();   
                // if the game is multiplayer, repeat the process
                if (triviaGameObj.multiplayerGame) {
                    // empty input field
                    $("#name-input").val("");
                    // update instructions to ask for player 2's name
                    $("#input-name-instructions").text("Player Two, enter your name already!");
                    
                    

                }
                // ELSE: progress to next screen 
                else {
                    triviaGameObj.selectNumQuestion();
                }
            }
        });
        
    }
}

//This function moves the selector from 1 or 2 players and back. 
var changeNumPlayers = function () {
    if ($("#select-one-player").hasClass('current-choice')) {
        $("#select-one-player").removeClass('current-choice');
        $("#select-two-player").addClass('current-choice');
    } else {
        $("#select-two-player").removeClass('current-choice');
        $("#select-one-player").addClass('current-choice');
    }
}

// Event Listeners 
$(document).on('keydown', function (e) {

    // if the game hasn't started yet
    if (!triviaGameObj.gameHasStarted) {
        // listen for DOWN arrow
        if (e.which == 38) {
            console.log('You pressed the UP arrow!');
            // if one-player has class current-choice, remove class current choice and add it to the select-two-player element
            changeNumPlayers();
        }
        // listen for UP arrow
        else if (e.which == 40) {
            console.log('You pressed the DOWN arrow!');
            changeNumPlayers();
        }
        // listen for ENTER 
        else if (e.which == 13) {
            console.log('You pressed enter!');
            triviaGameObj.gameHasStarted = true;
            if ($("#select-one-player").hasClass('current-choice')) {
                triviaGameObj.startGame();
            } else {
                triviaGameObj.multiplayerGame = true;
                console.log(triviaGameObj.multiplayerGame);
                console.log("You started a multiplayer game!")
                triviaGameObj.startGame();
            }
        }
    }

});




// if 2 players - show pic of game controls for 10 seconds (with skip btn)

// Display Question One Screen
    // make this a function that runs and increments a variable to track each time
// Players (alternating) Chose 1 of 3 categories randomly selected from an array 
// Display a question from that category 
// Check to see that hasn't been guessed
// Display 4 answers
// Display Cash value of correct guess 
// Set question timer, display countdown

// If there are 2 players - listen for "q" or "p" to be pressed

// If "q" is pressed, set currentPlayer to playerOne
// Let player 1 move up with "w" and down with "s", confirm choice with "space-bar"

// If "p" is pressed, set currentPlayer to playerTwo
// Let player 2 move up with "up-arrow" and down with "down-arrow", confirm choice with "enter"

// If the time runs out - display the correct choice

// Pause timer 
// If the answer is correct
    // Update player score variable
    // Update score displayed on the screen
    // Move to next question screen
// If the answer is incorrect 
    // Check for a 2nd player
        // If there are 2 players playing
            // Remove incorrect choice from the DOM
            // Continue timer 
            // Listen for select button
            // If correct/incorrect - show it, update score variable, update score on the DOM
    // If 1 player game - show correct answer
        // Deduct score variable + update DOM  
        // Check for game over condition - use question counter to trigger end of game

// If the game continues... 
    // Display next question screen -> 

// If the game is over
    // if there are 2 players
        // display final scores 
        // display who won!
        // generate restart game button
    // if there is 1 player
        // show final score
        // generate restart game button


// ***Stretch Goals***

    // Play audio clip of Question being read aloud - have timer start at audio clip end
    // Play sound effects for correct/incorrect picks
    // Create High Score list
        // Check for high score (check if both players got a high score)
        // Capture player name if gotAHighScore === true; 
        // Update high score array
        // Remove Lowest Score on High Score Array
        // Loop through high score array and display each score on the DOM list
    // SCREW your opponents - buzz in and hit the S key to force your opponent to answer the question - 1 per round? 1 round = ? questions?
    // if you take TOO long to input your name, have the game give you an insulting name 
