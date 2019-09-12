// PSUEDO CODE TRIVIA GAME

// Create Question Array
// Need 63 categories to not have any repeats in a 21 q game
var questions = [{
    category: "sports",
    question: "Who wore #33 for the Celtics?",
    answers: ["I did", "You did", "Bill Russell", "Larry Bird"],
    correctAnswer: "Larry Bird",
    value: 1000,
}, {
    category: "travel",
    question: "Where in the world is Carmen San Diego?",
    answers: ["San Diego", "Gibberish", "Tunisia", "Space"],
    correctAnswer: "San Diego",
    value: 2000,
}, {
    category: "Math",
    question: "What is the airspeed velocity of an unladen swallow?",
    answers: ["Threve", "Well I don't know that", "Coconuts", "African or European?"],
    correctAnswer: "African or European?",
    value: 3000,
}, {
    category: "Fiction",
    question: "What magical item is at the core of Harry Potter's wand?",
    answers: ["Unicorn Hair", "Dragon Heartstring", "Unicorn Hair", "Phoenix Feather"],
    correctAnswer: "Phoenix Feather",
    value: 4000,
}
]

// Create an object to hold all game logic
var triviaGameObj = {

    // Game Variables 
    currentQuesCounter: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
    counter: 0,
    numQuestions: 0,
    playerOneName: "",
    playerTwoName: "",
    cOne: "",
    cTwo: "",
    cThree: "",
    chosenCategory: "",

    curQuestionText: "",
    curAnswers: [],
    curCorrectAnswer: "",
    curQuestionValue: 0,


    playerOneNameColleted: false,
    multiplayerGame: false,
    gameHasStarted: false,
    currentPlayer: null,
    timer: null,
    copyOfQuesArray: [],


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

    capturePlayerNames: function () {
        // reveal this screen
        $("#input-player-name").removeClass('hide');
        // listen for ENTER btn
        $(document).on('keydown', function (e) {

            if (e.which == 13) {
                // check for empty input
                if ($("#name-input").val().trim().length < 1) {
                    alert('You must input a name!');
                    return false;
                }
                // if we haven't already stored player 1's name
                else if (!triviaGameObj.playerOneNameColleted) {
                    // set player One name var = value of input field
                    triviaGameObj.playerOneName = $("#name-input").val().trim();
                    // use flag variable for if/else logic to function correctly
                    triviaGameObj.playerOneNameColleted = true;
                    // if the game is multiplayer, repeat the process
                    if (triviaGameObj.multiplayerGame) {
                        // empty input field
                        $("#name-input").val("");
                        // update instructions to ask for player 2's name
                        $("#input-name-instructions").text("Player Two, enter your name already!");
                    }
                    // ELSE: progress to next screen 
                    else {
                        // disable the event listener
                        $(document).off('keydown');
                        triviaGameObj.selectGameLength();
                    }
                    // if we already have
                } else {
                    triviaGameObj.playerTwoName = $("#name-input").val().trim();
                    // disable the event listener
                    $(document).off('keydown');
                    triviaGameObj.selectGameLength();
                }
            }
        });
    },

    selectGameLength: function () {
        // hide previous screen, show this screen        
        $("#input-player-name").addClass('hide');
        $("#select-game-length").removeClass('hide');
        // devise a way (perhaps using current-choice html/css class and an event listener) to select 7 or 21 questions.

        $(document).on('keydown', function (e) {

            if (e.which >= 37 && e.which <= 40) {
                if ($("#seven").hasClass('current-choice')) {
                    $("#seven").removeClass('current-choice');
                    $("#twenty-one").addClass('current-choice');
                } else {
                    $("#twenty-one").removeClass('current-choice');
                    $("#seven").addClass('current-choice');
                }
            }
            else if (e.which == 13) {
                // turn off event listener
                $(document).off('keydown');
                // set game length to whichever number is selected
                if ($("#seven").hasClass('current-choice')) {
                    triviaGameObj.numQuestions = 7;
                } else {
                    triviaGameObj.numQuestions = 21;
                };
                // hide this screen
                $("#select-game-length").addClass('hide');
                // go to choose category screen
                triviaGameObj.showQuestionCounterScreen();
            }
        });

    },

    showQuestionCounterScreen: function () {
        // display this screen
        $("#current-question-screen").removeClass('hide');
        // set the text = the currentQuestion
        $(".question-counter").text(this.currentQuesCounter);
        // increment the current question variable
        this.currentQuesCounter++;
        // wait 4 seconds, then run genCategories function.
        setTimeout(this.genCategories, 1000);

    },

    shuffleArray: function (arr) {

        let numIterations = arr.length - 1;
        for (let i = numIterations; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    },

    genCategories: function () {
        // hide current ? screen
        $('#current-question-screen').addClass('hide');
        // show this screen
        $('#categories-screen').removeClass('hide');

        // duplicate the original array, save it as a new variable
        triviaGameObj.copyOfQuesArray = [...questions];
        // shuffle the new array
        triviaGameObj.copyOfQuesArray = triviaGameObj.shuffleArray(triviaGameObj.copyOfQuesArray);
        // use a loop to create 3 variables to hold the category data
        for (var i = 0; i < 3; i++) {

            // create a paragraph element, set the value = i, 
            var pEle = $('<p>').attr('value', i);
            // give it a css target 
            pEle.attr('class', 'cat-text');
            // set the text = the last element of the random array
            pEle.text(`${i + 1}. ${triviaGameObj.copyOfQuesArray[i].category}`);
            // append it to the page
            pEle.appendTo('#categories-display');

        };


        // select a category screen - could make it's own function
        // listen for the user to press 1, 2, or 3
        $(document).on('keydown', function (e) {
            if (e.key == 1 || e.key == 2 || e.key == 3) {

                // based on which question number is pressed, save the relevant data to current game variables
                triviaGameObj.curQuestionText = triviaGameObj.copyOfQuesArray[(e.key - 1)].question;
                triviaGameObj.curAnswers = triviaGameObj.copyOfQuesArray[(e.key - 1)].answers;
                triviaGameObj.curCorrectAnswer = triviaGameObj.copyOfQuesArray[(e.key - 1)].correctAnswer;
                triviaGameObj.curQuestionValue = triviaGameObj.copyOfQuesArray[(e.key - 1)].value;

                // remove the first 3 items of the array so they will not be reused
                triviaGameObj.copyOfQuesArray.splice(0, 3);

                // remove this event listener
                $(document).off('keydown');

                // hide this screen
                $('#categories-screen').addClass('hide');
                // run display Question screen
                triviaGameObj.displayQuestion();
            }
        })

    },

    displayQuestion: function () {
        // append the curQuestion to the question-display div
        var headEle = $("<h1>").text(triviaGameObj.curQuestionText);
        $("#question-display").append(headEle);

        // loop through the curAnswers array
        for (var i = 0; i < triviaGameObj.curAnswers.length; i++) {
            // create an element to hold the each answer
            var answerEle = $("<p>").text(`${(i + 1)}. ${triviaGameObj.curAnswers[i]}`);
            answerEle.attr("id", `a${(i + 1)}`);
            // append it to the screen 
            $("#question-display").append(answerEle);
        };

        // show this div once all pieces are appended
        $("#question-display").removeClass('hide');

        // listen for the user to press 1, 2, 3, or 4
        $(document).on('keydown', function (e) {
            if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4) {
                // target the answer that corresponds to the key pressed
                var userGuess = $(`#a${e.key}`).text();
                // turn it into an array
                var userArray = userGuess.split("");
               // remove the extra characters
                var formattedArray = userArray.slice(3, userArray.length);
                var answerString = formattedArray.toString();
                
                console.log(answerString);
                // add the current-choice class to whichever answer was chosen
                // 
            }
        })




    },

    // end of game obj
};

//This function moves the selector from 1 or 2 players and back. 
var changeNumPlayers = function () {
    if ($("#select-one-player").hasClass('current-choice')) {
        $("#select-one-player").removeClass('current-choice');
        $("#select-two-player").addClass('current-choice');
    } else {
        $("#select-two-player").removeClass('current-choice');
        $("#select-one-player").addClass('current-choice');
    }
};

// Event Listeners 
$(document).on('keydown', function (e) {
    // if the game hasn't started yet
    if (!triviaGameObj.gameHasStarted) {
        // listen for DOWN arrow
        if (e.which == 38) {
            // if one-player has class current-choice, remove class current choice and add it to the select-two-player element
            changeNumPlayers();
        }
        // listen for UP arrow
        else if (e.which == 40) {
            changeNumPlayers();
        }
        // listen for ENTER 
        else if (e.which == 13) {
            triviaGameObj.gameHasStarted = true;
            // if one player game is selected
            if ($("#select-one-player").hasClass('current-choice')) {
                $(document).off('keydown');
                triviaGameObj.startGame();
            } else {
                // if multiplayer game is selected
                triviaGameObj.multiplayerGame = true;
                $(document).off('keydown');
                triviaGameObj.startGame();
            }
        }
    }

});




// if 2 players - show pic of game controls for 10 seconds (with skip btn)

// Players (alternating) Chose 1 of 3 categories randomly selected from an array 
// Display the question from that category 
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
    // change any ALERTs to a modal

    // Use mouse click events for menu options as well as keyboard
    // Make sure all quotes are singles or doubles - be consistent!
    // Redo variable names to keep to a convention in HTML, CSS, and JS
    // pick a category BEFORE we show the Question X screen
    // LINT this
