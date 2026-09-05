document.querySelector('#spin').addEventListener('click', playerSpinsSlot)
document.querySelector('#lowBet').addEventListener('click', playerBetsLow)
document.querySelector('#highBet').addEventListener('click', playerBetsHigh)

let playerScore = 1000;
let bet = 5;

let reelItems = [
	["🦩", "🦅", "🦉", "🦜", "🦤"]
]

//FIND the balance element from the HTML
document.querySelector('#balance')


//FIND the three reel containers
document.querySelector('.reelConainer')


//WHEN user clicks Bet $5 button then SET current bet to 5

//DISPLAY message: "Current bet: $5"


//WHEN user clicks Bet $50 button, SET current bet to 50

//DISPLAY message: "Current bet: $50"


//WHEN user clicks Spin button

//CHECK if balance is enough to make the current bet

//IF balance is less than current bet, DISPLAY "You don't have enough money!" then stop the spin

//OTHERWISE

//-SUBTRACT current bet from balance

//-RANDOMLY choose one bird for reel 1

//-RANDOMLY choose one bird for reel 2

//-RANDOMLY choose one bird for reel 3

//-DISPLAY the three randomly selected birds

//-CHECK the results//


//IF reel 1 equals reel 2
//AND reel 2 equals reel 3

//PLAYER gets jackpot

//CALCULATE winnings

//ADD winnings to balance

//DISPLAY:"JACKPOT!"

//ELSE IF any two reels match

//PLAYER gets smaller prize

//CALCULATE winnings

//ADD winnings to balance

//DISPLAY: "Two birds matched!"


//ELSE PLAYER loses current bet

//DISPLAY:"No match. Try again!"


//UPDATE balance displayed on screen


//CHECK if balance equals 0

//IF balance equals 0
    //DISPLAY:"Game Over!"

//DISABLE Spin button


