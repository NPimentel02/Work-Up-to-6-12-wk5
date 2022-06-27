function blastofftimerV1() {
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 50000)
}


function blastoffTimerV2() {
    //variables
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 5000;
    var countdownChange = 5;
    var numPoints = 10;

    //loop
    for (var i = 0; i <= numPoints; i++) {
        setTimeout(function () {
            console.log(countdownTimer);
            if (countdownTimer == 0) {
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            } else if (countdownTimer < halfCDT) {
                document.getElementById("countdownDisplay").innerHTML =
                    "Warning Less than % way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            countdownTimer = countdownTimer - countdownChange;
        }, countdownDelay * i)

    }
}

var wins = 0;
var losses = 0;
var ties = 0;

function playCraps(){ //this basiclly creats a function that we are able to write the code to tell what the die's identify as and what should happne when you click play craps
    console.log("playCraps() started");//this shows that when you go to play craps this is where it starts
    var die1; //identifies Die 1
    var die2; //identifies Die 2
    die1 = Math.ceil(Math.random() * 6); //shows how Die 1 should count
    die2 = Math.ceil(Math.random() * 6); //shows how Die 2 should count
    console.log("Die1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = " + die2);
    document.getElementById("die2Res").innerHTML = die2;
    var sum = die1 + die2; //create sum from die 1 and die 2
    if (sum == 7 || sum == 11) { //see if sum = 7 or 11
        document.getElementById("crapsRes").innerHTML = "<H1> Craps you lose!!! </H1>"; //Lines 63-66 says that if you get a loseing pair of numbers then it will show you "craps you lose"
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log("Craps, You lose!!!");
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = " <H1> Huzzh, You win!!! </H1>"; //Lines 68-71 will show that if you got a winning pair of numbers it will show you "huzza, you win"
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("Huzzah, You win!!");
    } else
        document.getElementById("crapsRes").innerHTML = "You Did not lose or win. Please try again."; //Lines 73-75 will show you if you got any tied numbers it will tell you to play again
    ties++;
    document.getElementById("tieRes").innerHTML = ties;
    console.log("You Did not lose or win. Please try again.");
} 