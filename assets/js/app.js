// PSUEDO CODE TRIVIA GAME

// Create Question Array
// Need 63 categories to not have any repeats in a 21 q game
var testArray = [{
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
}

];

var sourceArray = [
    {
        // 1
        category: "Hey Where are you Sticking that Hand?",
        question: "Which of the following is a Sesame Street muppet inspired by a real person?",
        answers: ["Senator Walter Mongoose", "Red Spotted Newt Gingrich", "H. Ross Parrot", "Mayor Ed Conch"],
        correctAnswer: "H. Ross Parrot",
        value: 2000,
    },
    // 2
    {
        category: "So Bad, They're Not Even Good",
        question: 'If the band responsible for "White Rabbit" and "Somebody to Love" were combined with a disaster relief film, what might they be called?',
        answers: ["They Might be Ishtar", "The Beastie Boy in the Plastic Bubble", "Jefferson Airport '77", "The Beatles Have Eaten The Crops"],
        correctAnswer: "Jefferson Airport '77",
        value: 2000,
    },
    // 3
    {
        category: "I'm a Lucky Dog",
        question: 'Which of the following questions, if asked by you, would be "rhetorical?"',
        answers: ["How much is this costing you?", "Can I have your autograph?", "Who wouldn't want to be me right now?", "Do you have any diseases?"],
        correctAnswer: "Who wouldn't want to be me right now?",
        value: 1000,
    },
    // 4
    {
        category: "When Cooks Go Insane",
        question: "Which particular element of your meal contains the highest percentage of water?",
        answers: ["The thousand island dressing", "The cooked spaghetti", "The roasted raccoon", "The 100 proof whisky"],
        correctAnswer: "The cooked spaghetti",
        value: 1000,
    },
    // 5
    {
        category: "A Hero for the '90's",
        question: `Let's say D.C. comics introduced a new hero named "Inertia Man." Of the following, which superhero power would you expect him to be LACKING?`,
        answers: ["Ability to move in same direction for hours", "Ability to remain still even when pushed", "Ability to move so slowly you barely notice", "Ability to melt rocks with his x-ray vision"],
        correctAnswer: "Ability to remain still even when pushed",
        value: 4000,
    },
    // 6
    {
        category: "National Parks and Naughty Bits",
        question: "Which of the following national parks is named after a part of the female anatomy?",
        answers: ["Haleakala", "Mammoth Cave", "Grand Tetons", "Hot Springs"],
        correctAnswer: "Grand Tetons",
        value: 4000,
    },
    // 7
    {
        category: "Killing Time and Killing Your Friends",
        question: "Oh no! The miners are all dead, scouts keep getting blown up by bombs and the marshall was just killed by a spy while he was looking for a flag. What game is being played?",
        answers: ["Myst", "Capture the Flag", "Risk", "Stratego"],
        correctAnswer: "Stratego",
        value: 4000,
    },
    // 8
    {
        category: "Funky Trash",
        question: "A lava lamp from the 70s. A Meg doll from Family Guy. A bunch of black swan feathers.  Whose trash is this?",
        answers: ["Seth MacFarlane's", "Natalie Portman's", "Mila Kunis's", "Kim Kardashian's"],
        correctAnswer: "Mila Kunis's",
        value: 3000,
    },
    // 9
    {
        category: "Medieval Flying Rodents",
        question: "If Batman went through the proper medieval knighthood training, what would he be called in the LAST stage before becoming The Dark Knight?",
        answers: ["The Dark Viscount", "The Dark Cavalier", "The Dark Squire", "The Twilight Farrier"],
        correctAnswer: "The Dark Squire",
        value: 1000,
    },
    // 10 
    {
        category: "Appropriate Attire",
        question: "Who would be able to shop at a store with a “No Shirt, No Shoes, No Service” policy?",
        answers: ["Heffer Wolfe", "SpongeBob SquarePants", "Conan the Barbarian", "Donald Duck"],
        correctAnswer: "SpongeBob SquarePants",
        value: 2000,
    },
    // 11
    {
        category: "Fairy Tales & Fakin' It",
        question: `In a scandal that rocks the forest, the Three Bears allege that Goldilocks's hair is really made of "fool's gold." They say a better name for Goldilocks would be what?`,
        answers: ["Obsidianlocks", "Pyritelocks", "Quartzlocks", "Sulfurlocks"],
        correctAnswer: "Pyritelocks",
        value: 1000,
    },
    // 12

    // Why does putting a comma into the answer and question string break this strictly equal comparison??
    {
        category: "Ho, Ho, Who the Hell Are You?",
        question: "According to Pennsylvania Dutch tradition, if it's New Years Eve and you come downstairs to find a fat man leaving cookies on a plate, don't bludgeon him with an iron poker because he is:",
        answers: ["Santa's Brother Bells", "Santa Claus, giving back cookies he disliked", "Grindledorf the Pastry Elf", "Father Time"],
        correctAnswer: "Santa's Brother Bells",
        value: 2000,
    },
    // 13
    {
        category: `Sci-Fi "Gilligan's Island"`,
        question: `If Gilligan said that once the Minnow is repaired, he'd like to sail around the "islands of Langerhans," the Professor would tell him he'd like to be:`,
        answers: ["On Mars", `a character in "Guilliver's Travels"`, "microscopic", "on Earth around three million B.C."],
        correctAnswer: "microscopic",
        value: 2000,
    },
    // 14
    {
        category: "A Boy & His Tiger",
        question: "Calvin : Hobbes ::",
        answers: ["Garfield : Jon", "Charlie : Snoopy", "Timmy : Lassie", "Christopher : Pooh"],
        correctAnswer: "Christopher : Pooh",
        value: 2000,
    },
    // 15
    {
        category: "It's Alive!",
        question: `Which of these novelty "pets" are real living animals?`,
        answers: ["Pet Rock", "Chia Pet", "Shrinky Dinks", "Sea Monkeys"],
        correctAnswer: "Sea Monkeys",
        value: 1000,
    },
    // 16
    {
        category: "Inexperienced Land Masses",
        question: "Why are the Virgin Islands so named?",
        answers: ["They're ugly", "They were named for the state of Virginia", "They were named for Queen Virginia", "They were named for Queen Elizabeth"],
        correctAnswer: "They were named for Queen Elizabeth",
        value: 3000,
    },
    // 17
    {
        category: "Cable Networks & Irrational Numbers",
        question: `So viewers can find it more easily, your cable company has moved the entertainment network E! to channel "e." Based on its value in mathematics, where would you expect to find channel "e"?`,
        answers: ["between channels 1 and 2", "between channels 2 and 3", "between channels 6 and 7", "between channels 14 and 15"],
        correctAnswer: "between channels 2 and 3",
        value: 3000,
    },
    // 18
    {
        category: "Dairy Treats & Digestive Tracts",
        question: `If Dairy Queen added animal parts to its list of desserts, which of the following could NOT be in a "Gizzard Blizzard" because the animal in question does NOT possess a gizzard?`,
        answers: ["an ostrich", "a horned toad", "a crocodile", "an earthworm"],
        correctAnswer: "a horned toad",
        value: 3000,
    },
    // 19
    {
        category: "Myths, Infomercials & Other Outright Lies",
        question: "If the mythological Greek princess Atalanta were alive, well and doing infomercials today, what product would she most likely be pitching?",
        answers: ["amazing electric hair clippers", "incredible fitness products", "astonishing real estate sales tips", "miraculous beauty creams"],
        correctAnswer: "incredible fitness products",
        value: 2000,
    },
    // 20
    {
        category: "Amateur Sleuths in TV & Literature",
        question: `They were brothers that solved mysteries, the main characters in a bunch of books, and there was a TV show starring the brother of that guy on "The Partridge Family." Who were they?`,
        answers: ["Bobbsey Twins", "Drew Brothers", "Hardy Boys", "Holmes & Watson"],
        correctAnswer: "Hardy Boys",
        value: 1000,
    },
    // 21
    {
        category: "The Wizard of Oz as a Diplomat",
        question: "If the U.N. voted to accept the countries of Oz as new members which would NOT have an ambassador seated at a general assembly?",
        answers: ["Lollipop Country", "Munchkin Country", "Gillikin Country", "Winkie Country"],
        correctAnswer: "Lollipop Country",
        value: 3000,
    },
    // 22

    // 23
    // 24
    // 25

];

// Create an object to hold all game logic
var triviaGameObj = {

    // Game Variables 
    questionCounter: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
    counter: 20,
    numQuestions: 0,
    playerOneName: "",
    playerTwoName: "",
    curQuestionText: "",
    curAnswers: [],
    curCorrectAnswer: "",
    curValue: 0,
    playerOneNameColleted: false,
    multiplayerGame: false,
    playerOneTurn: true,
    curPlayer: "",
    timer: null,
    questionArray: [...sourceArray],

    countdown: function () {

        // update the timer text on the page
        $("#count-down").text(triviaGameObj.counter - 1);

        // decrement the counter
        triviaGameObj.counter--;

        if (triviaGameObj.counter === 0) {

            clearInterval(triviaGameObj.timer);
            // stop any key listener events
            $(document).off("keydown");

            // update result text element

            setTimeout(function () {
                $("#result-text").text("Out of Time!");
                $("#result-text").removeClass("hide");
                // reveal the correct answer 
                $(".correct-answer").addClass("correct-answer-border");
            }, 1000);

            // check for gameOver
            // working gameOver function 
            if (triviaGameObj.questionCounter === triviaGameObj.numQuestions + 1) {
                setTimeout(function () { $("#question-screen").addClass("hide") }, 4000);
                setTimeout(triviaGameObj.gameOver, 4000);
            } else {
                // hide this screen
                setTimeout(function () { $("#question-screen").addClass("hide") }, 8 * 1000);
                setTimeout(triviaGameObj.showQuestionCounterScreen, 8 * 1000);
            };
        };

    },

    changeNumPlayers: function () {
        if ($("#select-one-player").hasClass('current-choice')) {
            $("#select-one-player").removeClass('current-choice');
            $("#select-two-player").addClass('current-choice');
        } else {
            $("#select-two-player").removeClass('current-choice');
            $("#select-one-player").addClass('current-choice');
        }
    },

    setupGame: function () {
        // reveal the setup-game-screen
        $("#setup-game-screen").removeClass("hide");

        // Listen for 1 or 2 players to trigger start of the game. 
        $(document).on('keydown', function (e) {

            // listen for DOWN arrow
            if (e.which == 38) {
                // if one-player has class current-choice, remove class current choice and add it to the select-two-player element
                triviaGameObj.changeNumPlayers();
            }
            // listen for UP arrow
            else if (e.which == 40) {
                triviaGameObj.changeNumPlayers();
            }

            // listen for ENTER 
            else if (e.which == 13) {
                triviaGameObj.gameHasStarted = true;
                // if one player game is selected
                if ($("#select-one-player").hasClass('current-choice')) {
                    $(document).off('keydown');
                    $("#setup-game-screen").addClass('hide');
                    triviaGameObj.capturePlayerNames();
                } else {
                    // if multiplayer game is selected
                    triviaGameObj.multiplayerGame = true;
                    $(document).off('keydown');
                    $("#setup-game-screen").addClass('hide');
                    triviaGameObj.capturePlayerNames();
                }
            }

        });
    },

    capturePlayerNames: function () {
        // empty input field in case we've already played the game once
        $("#name-input").val("");
        // reveal this screen
        $("#input-player-name").removeClass('hide');
        // listen for ENTER btn
        $(document).on('keydown', function (e) {

            if (e.which == 13) {
                e.preventDefault();
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
                        $("#input-name-instructions").text("Player Two!");
                    }
                    // ELSE: progress to next screen 
                    else {
                        // disable the event listener
                        $(document).off('keydown');
                        triviaGameObj.selectGameLength();
                    }
                    // if we already have player 1's name
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
                triviaGameObj.displayMultiplayerInstructions();
            }
        });

    },

    displayMultiplayerInstructions: function () {
        // check if multiplayer game
        if (triviaGameObj.multiplayerGame) {
            // display the multiplayer instructions
            $("#multiplayer-instructions").removeClass("hide");

            // after 7 seconds, display the questionCounterScreen
            setTimeout(triviaGameObj.showQuestionCounterScreen, 7 * 1000);

        }
        // if it's single player progress game to showQuestionCounterScreen
        else {
            triviaGameObj.showQuestionCounterScreen();
        }


    },

    showQuestionCounterScreen: function () {
        // hide the multiplayer instructions if they exist
        $("#multiplayer-instructions").addClass("hide");
        // display this screen
        $("#current-question-screen").removeClass("hide");
        // set the text = the currentQuestion
        $(".question-counter").text(triviaGameObj.questionCounter);
        // increment the current question variable
        triviaGameObj.questionCounter++;
        // wait 4 seconds, then run genCategories function.
        setTimeout(triviaGameObj.genCategories, 1000);
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
            var p = $('<p>').attr('value', i);
            // give it a css target 
            p.attr('class', 'cat-text');
            // set the text = the first 3 element of the random array
            p.text(`${i + 1}. ${triviaGameObj.questionArray[i].category}`);
            // append it to the page
            p.appendTo('#categories-display');
        };

        // if the game is multiplayer
        if (triviaGameObj.multiplayerGame) {
            // build an element to display who's turn it is to pick
            var turn = $("<p>");
            // if it is player one's turn to pick
            if (triviaGameObj.playerOneTurn) {
                // flip flag
                triviaGameObj.playerOneTurn = false;
                // display Player One's turn to pick
                turn.text(`${triviaGameObj.playerOneName}'s turn to pick!`);
                $("#categories-display").append(turn);
            } else {
                // flip flag
                triviaGameObj.playerOneTurn = true;
                // display Player Two's turn to pick
                turn.text(`${triviaGameObj.playerTwoName}'s turn to pick!`)
                $("#categories-display").append(turn);
            };
        }

        // select a category screen 
        $(document).on('keydown', function (e) {
            // listen for the user to press 1, 2, or 3
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

    displayPlayerScores: function () {
        // get rid of the previous scores
        $(".scoreboard").html("");

        // set the text of player 1's score
        var pOneScore = $("<h1>");
        pOneScore.text(`${triviaGameObj.playerOneName}'s Score: $ ${triviaGameObj.playerOneScore.toString()}`);
        $(".scoreboard").append(pOneScore);

        // if its a 2 player game
        if (triviaGameObj.multiplayerGame) {

            var pTwoScore = $("<h1>");
            // set the text of player 2's score 
            pTwoScore.text(`${triviaGameObj.playerTwoName}'s Score: $ ${triviaGameObj.playerTwoScore.toString()}`);
            // append player 2 score to the scoreboard 
            $(".scoreboard").append(pTwoScore);
        }

    },

    displayQuestion: function () {

        // remove the previous question elements if they exist
        $("#question-screen").empty();
        // build the question number
        var questionNumEle = $("<div>Question " + (triviaGameObj.questionCounter - 1) + "</div>");
        $("#question-screen").append(questionNumEle);
        // build the countdown timer
        var gameClock = $("<div id='count-down'>20</div>");
        $("#question-screen").append(gameClock);
        // Set question timer, display countdown
        triviaGameObj.counter = 20;
        triviaGameObj.timer = setInterval(triviaGameObj.countdown, 1000);
        // build the question text
        var headEle = $("<h1>").text(triviaGameObj.curQuestionText);
        $("#question-screen").append(headEle);
        // build the .scoreboard
        var scoreboard = $("<div class='scoreboard'></div>");
        $("#question-screen").append(scoreboard);
        triviaGameObj.displayPlayerScores();
        // build answer text elements
        var resultText = $("<p id='result-text'>");
        $("#question-screen").append(resultText);
        // loop through and display the curAnswers array
        for (var i = 0; i < triviaGameObj.curAnswers.length; i++) {
            // create an element to hold the each answer
            var answerEle = $("<p>").text(`${i + 1}. ${triviaGameObj.curAnswers[i]}`);
            answerEle.attr("id", `a${i + 1}`);
            // if the answer is the correct answer, attach a class to it
            if (triviaGameObj.curAnswers[i] === triviaGameObj.curCorrectAnswer) {
                answerEle.attr("class", "correct-answer")
            };
            // append it to the screen 
            $("#question-screen").append(answerEle);
        };


        // build the question value
        // create an element to display curValue
        var cashDiv = $("<div>").text(`This question is worth $ ${triviaGameObj.curValue}`);
        $("#question-screen").append(cashDiv);

        // show this div once all pieces are appended
        $("#question-screen").removeClass("hide");

        // if it's a multiplayer game:
        if (triviaGameObj.multiplayerGame) {
            $(document).on("keydown", function (e) {
                // if q set curPlayer to player one and listen for choice
                // ** TO DO ** Highlight the user that buzzed in some how visually  
                if (e.key === "q") {
                    // turn off event listener
                    $(document).off("keydown");
                    triviaGameObj.curPlayer = "player one";
                    triviaGameObj.listenCheckAnswer();
                };
                // if p set curPlayer to player two and listen for choice
                if (e.key === "p") {
                    // turn off event listener
                    $(document).off("keydown");
                    triviaGameObj.curPlayer = "player two";
                    triviaGameObj.listenCheckAnswer();
                };

            });
        } else {
            triviaGameObj.curPlayer = "player one"
            triviaGameObj.listenCheckAnswer();
        }
        // listen for the user to press q or p
    },

    listenCheckAnswer: function () {
        // listen and check answer function
        $(document).on("keydown", function (e) {

            if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4) {

                // turn off the event listener
                $(document).off("keydown");
                // add the current-choice class to whichever answer was chosen
                $(`#a${e.key}`).addClass("current-choice");

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

                    // display 'Correct!' on the page
                    $("#result-text").text("Correct!");
                    $("#result-text").removeClass("hide");
                    // update the currentPlayer's score 

                    // turn this block into a function   
                    if (triviaGameObj.curPlayer === "player one") {
                        triviaGameObj.playerOneScore = triviaGameObj.playerOneScore + triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    } else {
                        triviaGameObj.playerTwoScore = triviaGameObj.playerTwoScore + triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    };


                    // check for game over condition
                    if (triviaGameObj.questionCounter === triviaGameObj.numQuestions + 1) {

                        setTimeout(function () { $("#question-screen").addClass("hide") }, 4000);
                        setTimeout(triviaGameObj.gameOver, 4000);
                    } else {
                        // hide this screen
                        setTimeout(function () { $("#question-screen").addClass("hide") }, 4000);
                        setTimeout(triviaGameObj.showQuestionCounterScreen, 4000);
                    };
                }
                // if the answer is incorrect
                else {

                    // display 'Incorrect!' on the page
                    $("#result-text").text("Incorrect! The correct answer was:");
                    $("#result-text").removeClass("hide");

                    // reveal the correct answer 
                    setTimeout(function () {
                        $(`#a${e.key}`).removeClass('current-choice');
                        $(".correct-answer").addClass("correct-answer-border");
                    }, 1000);


                    // subtract the question value from user's score
                    if (triviaGameObj.curPlayer === 'player one') {
                        triviaGameObj.playerOneScore = triviaGameObj.playerOneScore - triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    } else {
                        triviaGameObj.playerTwoScore = triviaGameObj.playerTwoScore - triviaGameObj.curValue;
                        triviaGameObj.displayPlayerScores();
                    };

                    // if this was the last question 
                    if (triviaGameObj.questionCounter === triviaGameObj.numQuestions + 1) {

                        setTimeout(function () { $("#question-screen").addClass("hide") }, 7 * 1000);
                        setTimeout(triviaGameObj.gameOver, 7 * 1000);
                    } else {
                        // hide this screen
                        setTimeout(function () { $("#question-screen").addClass("hide") }, 6 * 1000);
                        setTimeout(triviaGameObj.showQuestionCounterScreen, 6 * 1000);
                    };
                }
            }
        });
    },

    gameOver: function () {
        // clear the previous gameover screen 
        $("#game-over-screen").empty();
        // display text that says "GAME OVER"
        var gameOverText = $("<p id='game-over-text'>Game Over!</p>");
        // TO DO - if the game is multiplayer, declare a winner

        // Display the final player scores
        var scoreboard = $("<div class='scoreboard'>");
        // create a button to restart the game
        var restartBtn = $("<button id='restart-btn'>Restart</button>");

        // if it is multiplayer game, declare a winner
        if (triviaGameObj.multiplayerGame) {
            var winningPlayer;
            triviaGameObj.playerOneScore > triviaGameObj.playerTwoScore ? winningPlayer = triviaGameObj.playerOneName: winningPlayer = triviaGameObj.playerTwoName;
            var winner = $("<div id='winner'>").text(`${winningPlayer} is the winner!`);
            $("#game-over-screen").append(gameOverText, winner, scoreboard, restartBtn);
        } else {
            $("#game-over-screen").append(gameOverText, scoreboard, restartBtn);
        };
        
        triviaGameObj.displayPlayerScores();
        // reveal the game-over-screen
        $("#game-over-screen").removeClass("hide");
        // listen for click of the button...
        $(document).on('click', '#restart-btn', triviaGameObj.restartGame);
    },

    restartGame: function () {
        // hide the game over screen
        $("#game-over-screen").addClass("hide");
        // reset global variables to original state
        triviaGameObj.questionCounter = 1;
        triviaGameObj.playerOneScore = 0;
        triviaGameObj.playerTwoScore = 0;
        triviaGameObj.counter = 20;
        triviaGameObj.numQuestions = 0;
        triviaGameObj.playerOneName = "";
        triviaGameObj.playerTwoName = "";
        triviaGameObj.curQuestionText = "";
        triviaGameObj.curAnswers = [];
        triviaGameObj.curCorrectAnswer = "";
        triviaGameObj.curValue = 0;
        triviaGameObj.playerOneNameColleted = false;
        triviaGameObj.multiplayerGame = false;
        triviaGameObj.curPlayer = 'player one';
        triviaGameObj.timer = null;
        triviaGameObj.questionArray = [...sourceArray];
        triviaGameObj.playerOneTurn = true;
        // run start game function 
        triviaGameObj.setupGame();
    }

};

triviaGameObj.setupGame();


// WORKING ON
    // styling/position     

// TODO

// In a multiplayer game, if a user buzzes in, change styling to indicate who buzzed and can select an answer 

// If the answer is incorrect 
    // and the game is multiplayer
        // and both players haven't guessed incorrectly already 
            // Remove incorrect choice from the DOM
            // Continue timer 
            // Listen for select button




// Adjust the timing for all automatic screen progressions

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

// JACK _ BOX

// Real Time Multiplayer Version 
    // Use your phone to answer questions 
    // Host view + participant view 
    // Make the questions / logo / components customizable 

