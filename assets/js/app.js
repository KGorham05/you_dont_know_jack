// PSUEDO CODE TRIVIA GAME

// Create Question Array
// Need 63 categories to not have any repeats in a 21 q game
var sourceArray = [{
    category: "Sports",
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
},
]
console.log(sourceArray.length);
// Create an object to hold all game logic
var triviaGameObj = {

    // Game Variables 
    questionCounter: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
    counter: 15,
    numQuestions: 0,
    playerOneName: "",
    playerTwoName: "",

    curQuestionText: "",
    curAnswers: [],
    curCorrectAnswer: "",
    curValue: 0,

    playerOneNameColleted: false,
    multiplayerGame: false,
    curPlayer: 'player one',
    timer: null,
    questionArray: [...sourceArray],


    // Game Functions
    countdown: function () {
        triviaGameObj.counter--;
        console.log(triviaGameObj.counter);
        $("#count-down").text(triviaGameObj.counter);
        if (triviaGameObj.counter === 0) {
            console.log('Time up!');
            clearInterval(triviaGameObj.timer);
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
        
        // listen for 7 or 21 question game selection
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
        $(".question-counter").text(triviaGameObj.questionCounter);
        // increment the current question variable
        triviaGameObj.questionCounter++;
        // wait 4 seconds, then run genCategories function.
        setTimeout(triviaGameObj.genCategories, 1000);

    },

    // Function for shuffling the array
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

    displayPlayerScores: function () {
        // get rid of the previous scores
        $("#scoreboard").empty();
        
        // set the text of player 1's score
        var playerOneEle = $("<h1>");
        playerOneEle.text(`${triviaGameObj.playerOneName}'s Score: $ ${triviaGameObj.playerOneScore.toString()}`);
        $("#scoreboard").append(playerOneEle);
        
        // if its a 2 player game
        if (triviaGameObj.multiplayerGame) {

            var playerTwoEle = $("<h1>");
            // set the text of player 2's score 
            playerTwoEle.text(`${triviaGameObj.playerTwoName}'s Score: $ ${triviaGameObj.playerTwoScore.toString()}`);
            // append player 2 score to the scoreboard 
            $("#scoreboard").append(playerTwoEle);
        }
        // reveal the scoreboard
        $("#scoreboard").removeClass('hide');
    },

    // Randomly generate 3 categories for players to chose from
    // TO-DO Display which player's turn it is to pick, alternating
    genCategories: function () {
        
        // remove previous categories from the display 
        $("#categories-display").text("");

        // hide current ? screen
        $('#current-question-screen').addClass('hide');
        // show this screen
        $('#categories-screen').removeClass('hide');

        // shuffle the new array
        triviaGameObj.questionArray = triviaGameObj.shuffleArray(triviaGameObj.questionArray);
        // use a loop to create 3 variables to hold the category data
        for (var i = 0; i < 3; i++) {

            // create a paragraph element, set the value = i, 
            var pEle = $('<p>').attr('value', i);
            // give it a css target 
            pEle.attr('class', 'cat-text');
            // set the text = the first 3 element of the random array
            pEle.text(`${i + 1}. ${triviaGameObj.questionArray[i].category}`);
            // append it to the page
            pEle.appendTo('#categories-display');

        };

        

        // select a category screen - could make it's own function
        // listen for the user to press 1, 2, or 3
        $(document).on('keydown', function (e) {
            if (e.key == 1 || e.key == 2 || e.key == 3) {

                // based on which question number is pressed, save the relevant data to current game variables
                triviaGameObj.curQuestionText = triviaGameObj.questionArray[(e.key - 1)].question;
                triviaGameObj.curAnswers = triviaGameObj.questionArray[(e.key - 1)].answers;
                triviaGameObj.curCorrectAnswer = triviaGameObj.questionArray[(e.key - 1)].correctAnswer;
                triviaGameObj.curValue = triviaGameObj.questionArray[(e.key - 1)].value;

                // remove the first 3 items of the array so they will not be reused
                triviaGameObj.questionArray.splice(0, 3);

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

        this.displayPlayerScores();

        // remove the previous question elements if they exist
        $("#result-text").text("");


        // Display the question from the chosen category 
        // append the curQuestion to the question-display div
        var headEle = $("<h1>").text(triviaGameObj.curQuestionText);
        $("#question-display").append(headEle);
        
        // Display 4 answers
        // loop through the curAnswers array
        for (var i = 0; i < triviaGameObj.curAnswers.length; i++) {
            // create an element to hold the each answer
            var answerEle = $("<p>").text(`${i + 1}. ${triviaGameObj.curAnswers[i]}`);
            answerEle.attr("id", `a${i + 1}`);
            // append it to the screen 
            $("#question-display").append(answerEle);
        };
        
        // Display Cash value of correct guess 
        // create an element to display curValue
        var cashDiv = $("<div>").text(`This question is worth $ ${triviaGameObj.curValue}`);
        cashDiv.prependTo("#question-display");
        
        // Set question timer, display countdown
        this.counter    = 15;
        this.timer      = setInterval(this.countdown, 1000);
        

        // show this div once all pieces are appended
        $("#question-display").removeClass('hide');
        
        // listen for the user to press 1, 2, 3, or 4
        $(document).on('keydown', function (e) {

            if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4) {
                
                // add the current-choice class to whichever answer was chosen
                $(`#a${e.key}`).addClass('current-choice');

                // target the answer that corresponds to the key pressed
                var userGuess = $(`#a${e.key}`).text();
                
                // turn it into an array
                var userArray = userGuess.split("");
                // remove the extra characters
                var formattedArray = userArray.slice(3, userArray.length);
                // userArray.splice(0, 3); 
                // var formattedArray = userArray;
                
                var answerString = formattedArray.toString().replace(/,/g, "");

                // Stop the timer
                clearInterval(triviaGameObj.timer);
                
                // compare the picked answer to the correct answer
                // if the answer is correct
                if (answerString === triviaGameObj.curCorrectAnswer) {
                    // Turn off the event listener
                    $(document).off('keydown');
                    
                    // display 'Correct!' on the page
                    $("#result-text").text("Correct!");
                    $("#result-text").removeClass("hide");
                    // update the currentPlayer's score 
                    if (triviaGameObj.curPlayer === 'player one') {
                        triviaGameObj.playerOneScore = triviaGameObj.playerOneScore + triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    } else {
                        triviaGameObj.playerTwoScore = triviaGameObj.playerTwoScore + triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    }
                    
                    setTimeout(triviaGameObj.showQuestionCounterScreen, 4000);
                } else {
                    // display 'Incorrect!' on the page
                    $("#result-text").text("Incorrect!");
                    $("#result-text").removeClass("hide");
                    // subtract the question value from user's score
                    if (triviaGameObj.curPlayer === 'player one') {
                        triviaGameObj.playerOneScore = triviaGameObj.playerOneScore - triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    } else {
                        triviaGameObj.playerTwoScore = triviaGameObj.playerTwoScore - triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    }
                    setTimeout(triviaGameObj.showQuestionCounterScreen, 4000);
                }
                
                
            }
        });
    
        // If the timer hits 0: reveal the correct answer
        // run functions to progress the game -> q screen -> catGenScreen


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

// Listen for 1 or 2 players to trigger start of the game. 
$(document).on('keydown', function (e) {

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

});




// TODO
    // if 2 players - show pic of game controls for 10 seconds (with skip btn)
    // If there are 2 players - listen for "q" or "p" to be pressed
    // If "q" is pressed, set currentPlayer to playerOne : if p currentPlayer = 2



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
    // check for where I can replace triviaGameObj. with this or $(this) to better understand

    // is it better to turn on/off multiple event listeners throughout the game, or would it be better to use variables to track the state of the game we're in and trigger different key events - or order and use stopPropogation
    // if the user score is negative, change the text color to red. 