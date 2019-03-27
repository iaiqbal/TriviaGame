$(document).ready(function() {


// Create event listener for starting the game and submitting the answers inputted

var triviaGame = {
    right: 0,
    wrong: 0,
    notAnswered: 0,
    timer: 30,
    timerOn: false,

    questions: {
        q1: 'How many holes are there on a golf course?',
        q2: 'What is the largest ocean in the world?',
        q3: 'What is the largest island in the world?',
        q4: 'Who invented the telephone?',
        q5: 'What is the diameter of Earth?'
    },

    answers: {
        q1: ['2', '10', '6', '18'],
        q2: ['Pacific', 'Indian', 'Atlantic', 'North'],
        q3: ['Hawaii', 'Venezuela', 'Greenland', 'Iceland'],
        q4: ["Thomas Jefferson", "Alexander Bell", "Tom Cruise", "George Washington"],
        q5: ["1000 miles", "2 square feet", "10,000 miles", '8,000 miles']
    },
    correctAnswers: {
        q1: '18',
        q2: 'Pacific',
        q3: 'Greenland',
        q4: 'Alexander Bell',
        q5: '8,000 miles'
    },

    restartGame: function() {
        right = 0;
        wrong = 0;
        notAnswered = 0;


    
    }
}

// Below is supposed to be the timer; could not get it to work

$("#timer").html(timer);

    function start() {

        if (!timerOn) {
            triviaGame = setInterval(count, 1000);
            timerOn = true;
        }
    }

    function stop() {

        clearInterval(triviaGame);
        timerOn = false;
    }


});

// Conditionals tied to the correct answer; if else statements using triple ===
// Conditionals that will be connected to "right", "wrong", and "notAnswered" objects.
