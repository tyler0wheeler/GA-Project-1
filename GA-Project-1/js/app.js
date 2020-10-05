/*Ketchup, Mustard, Relish race game
- A race between three characters(ketchup, mustard, and relish)
- 1-4 players
- Each player starts out with a certain amount of money can can wager up to the amount of money currently in
their wallet
- the characters will ove across the screen and race to a finish line
- if your player wins, you win your wager, if not, you lose it
- if a player loses all of their money they are out
- if a player gets to a certain amount of money they win
- alerts to pop up while the race is going as commentary on the race
- a prompt screen in the beginning to explain the rules
- players fill in text square with wager and then click begin to begin the race
- welcome screen should say you are in the whatever inning of the ballgame and its time for the race
*/

/*
Strech goals
make odds on the players, alter speed
character bios
alerts in the race.
two players that press four keys in a certain order to be able to move
*/

// Money will depend on outcome.  the endgame square will trigger an increase in money, if not, decrease
// keystoke combo function for players
// timer for computer moves
// alerts tagged for game commentary, append when a square is changed
//


let playerOne = { // something that tracks where the player is on the course
  character:'',
  color:'',
  hotdogs: 2,
  turnCounter: 0,
  // playerOnePath: [$('#272'), $('#273'), $('#274'), $('#275'), $('#276'), $('#277'), $('#278'), $('#279'), $('#280'), $('#281'), $('#282'), $('#283'), $('#284'), $('#285'), $('#268'), $('#250'), $('#232'), $('#214'), $('#196'), $('#178'), $('#160'), $('#142'), $('#124'), $('#106'), $('#88'), $('#70'), $('#51'), $('#32'), $('#31'), $('#30'), $('#29'), $('#28'), $('#27'), $('#26'), $('#25'), $('#24'), $('#23'), $('#22'), $('#21'), $('#38'), $('#56'), $('#74'), $('#92'), $('#110'), $('#128'), $('#146'), $('#164'), $('#182'), $('#200'), $('#218'), $('#236'), $('#254'), $('#271')],
  pattern: ['a', 's', 'd', 'w'],
  current: 0,
  keyHandler: (event) =>{
    let path = [$('#272'), $('#273'), $('#274'), $('#275'), $('#276'), $('#277'), $('#278'), $('#279'), $('#280'), $('#281'), $('#282'), $('#283'), $('#284'), $('#285'), $('#268'), $('#250'), $('#232'), $('#214'), $('#196'), $('#178'), $('#160'), $('#142'), $('#124'), $('#106'), $('#88'), $('#70'), $('#51'), $('#32'), $('#31'), $('#30'), $('#29'), $('#28'), $('#27'), $('#26'), $('#25'), $('#24'), $('#23'), $('#22'), $('#21'), $('#38'), $('#56'), $('#74'), $('#92'), $('#110'), $('#128'), $('#146'), $('#164'), $('#182'), $('#200'), $('#218'), $('#236'), $('#254'), $('#271')]
    // do{
      if (playerOne.pattern.indexOf(event.key) < 0 || event.key !== playerOne.pattern[playerOne.current]) {
        playerOne.current = 0;
        return;  //replace with else
      }
      playerOne.current++

      if (playerOne.pattern.length === playerOne.current) {
        playerOne.current = 0;
        playerOne.turnCounter += 1
        path[playerOne.turnCounter].css('background-color', playerOne.color)
      }
      if (playerOne.turnCounter >= 52){
        alert(`${playerOne.character} wins!`)
      }

    // }
      // while (i < playerOne.playerOnePath.length)
        console.log(event.key);
        // console.log(playerOne.playerOnePath[0])
  }
}
let playerTwo = {
  character:'',
  color:'',
  hotdogs: 2,
  turnCounter: 0,
  pattern: ['j', 'k', 'l', 'i'],
  current: 0,
  keyHandler: (event) =>{
    let path = [$('#290'), $('#291'), $('#292'), $('#293'), $('#294'), $('#295'), $('#296'), $('#297'), $('#298'), $('#299'), $('#300'), $('#301'), $('#302'), $('#285'), $('#267'), $('#249'), $('#231'), $('#213'), $('#195'), $('#177'), $('#159'), $('#141'), $('#123'), $('#105'), $('#87'), $('#69'), $('#51'), $('#50'), $('#49'), $('#48'), $('#47'), $('#46'), $('#45'), $('#44'), $('#43'), $('#42'), $('#41'), $('#40'), $('#39'), $('#38'), $('#55'), $('#73'), $('#91'), $('#109'), $('#127'), $('#145'), $('#163'), $('#181'), $('#199'), $('#217'), $('#235'), $('#253'), $('#271')]
    if (playerTwo.pattern.indexOf(event.key) < 0 || event.key !== playerTwo.pattern[playerTwo.current]) {
      playerTwo.current = 0;
      return;  //replace with else
    }
    playerTwo.current++
    if (playerTwo.pattern.length === playerTwo.current) {
      playerTwo.current = 0;
      playerTwo.turnCounter += 1
      path[playerTwo.turnCounter].css("background-color", playerTwo.color)

      if (playerOne.turnCounter >= 52){
        alert(`${playerTwo.character} wins!`)
      }
    }
    console.log(event.key);
  }
}
// console.log(playerOne.playerOnePath[2])
console.log(playerOne.turnCounter)
// $(document).on('keydown', playerOne.keyHandler)
// $(document).on('keydown', playerTwo.keyHandler)
// Correct player movement code!!!!!!!=======================================//
// const playerOneControls = (target) =>{
// let pattern = ['a', 's', 'd', 'w']
// let current = 0
// // let charListOne =  'jkli'
// // const key = event.key.toLowerCase()
//
// const keyHandler = (event) => {
//
// 	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
// 		current = 0;
// 		return;
// 	}
//   current++
//   if (pattern.length === current) {
// 		current = 0;
//   target.css('background-color', playerOne.color)
//
// 	}
// 	console.log(event.key);
// };
// // document.addEventListener('keydown', keyHandler, false);
// $().on('keydown', keyHandler, false);
// }
//
// //
// const playerTwoControls = () =>{
// let pattern = ['j', 'k', 'l', 'i']
// let current = 0
// // let charListTwo =  'asdw'
//
// const keyHandler = (event) => {
// 	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
// 		current = 0;
// 		return;
// 	}
//   current++
//   if (pattern.length === current) {
// 		current = 0;
// 		console.log('Nioce!');
// 	}
// 	console.log(event.key);
// };
// document.addEventListener('keydown', keyHandler, false);
// }
//
// const playGame = () =>{
// playerOneControls()
// playerTwoControls()
// }
// playGame()

// const playGame = () =>{
//
// let playerOnePath = [$('#272'), $('#273'), $('#274'), $('#275'), $('#276'), $('#277'), $('#278'), $('#279'), $('#280'), $('#281'), $('#282'), $('#283'), $('#284'), $('#285'), $('#268'), $('#250'), $('#232'), $('#214'), $('#196'), $('#178'), $('#160'), $('#142'), $('#124'), $('#106'), $('#88'), $('#70'), $('#51'), $('#32'), $('#31'), $('#30'), $('#29'), $('#28'), $('#26'), $('#25'), $('#24'), $('#23'), $('#22'), $('#21'), $('#20'), $('#38'), $('#56'), $('#74'), $('#92'), $('#110'), $('#128'), $('#146'), $('#164'), $('#182'), $('#200'), $('#218'), $('#236'), $('#254'), $('#271')]
//
// let playerTwoPath = [$('#290'), $('#291'), $('#292'), $('#293'), $('#294'), $('#295'), $('#296'), $('#297'), $('#298'), $('#299'), $('#300'), $('#301'), $('#302'), $('#285'), $('#267'), $('#249'), $('#231'), $('#213'), $('#195'), $('#177'), $('#159'), $('#141'), $('#123'), $('#105'), $('#87'), $('#69'), $('#51'), $('#50'), $('#49'), $('#48'), $('#47'), $('#46'), $('#45'), $('#44'), $('#43'), $('#42'), $('#41'), $('#40'), $('#39'), $('#38'), $('#55'), $('#73'), $('#91'), $('#109'), $('#127'), $('#145'), $('#163'), $('#181'), $('#199'), $('#217'), $('#235'), $('#253'), $('#271')]

 const playGame = (event) =>{
   if (playerOne.turnCounter >= 52){
   alert(`${playerOne.character} wins!`)
 }
  $(document).on('keydown', playerOne.keyHandler)
  console.log()
  $(document).on('keydown', playerTwo.keyHandler)

}

playGame()

// playerOneControls()
// 272 - 285, 268, 250, 232, 214, 196, 178, 160, 142, 124, 106, 88, 70, 51-38, 56, 74, 92, 110, 128, 146, 164, 182, 200, 218, 236, 254, 271(57)
// playerTwoControls()
// 290-302, 285, 267, 249, 231, 213, 195, 177, 159, 141, 123, 105, 87, 69, 51, 50-38, 55, 73, 91, 109, 127, 145, 163, 181, 199, 217, 235, 253, 271(57)
// conditional that if the event key is not in the array it should not do anything
//============================================================================//

//=============================================================//
const $raceCourse = $('#race-course')
const makeRaceCourse = () =>{
  for (let i = 0; i < 324; i++){
    const $square = $('<div>')
      $square.addClass('square')
      $square.attr('id', i)
      $raceCourse.append($square)
      // console.log(6)
    }
}




//beginning of game jquery
$(() => {
const $modal = $('#modal');
const $closeBtn = $('#close');
const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
  // $playerSelectionModal.css('display', 'none')
  $playerTwoSelectionModal.css('display', 'none')
}

const $playerSelectionModal = $("#player-selection-modal")
const $playerTwoSelectionModal = $("#player-two-selection-modal")
const $playerSelect = $('#player-selection')
const $playerTwoSelect = $('#player-two-selection')
const $playerOneSelectButton = $('#player-buttons')
// const $playerTwoSelectButton = $('#player-two-buttons')
const $selectKetchup = $('#ketchup-select')
const $selectMustard = $('#mustard-select')
const $selectRelish = $('#relish-select')
const $startGameModal = $('#start-game-modal')
const $startGameButton = $('#start')


const openPlayerOneSelect = () =>{
  $playerSelectionModal.css('display', 'block')
  $selectKetchup.on('click', (event)=>{
    playerOne.color = 'red'
    playerOne.character = 'Ketchup'
    console.log(playerOne)
    $('#272').css('background-color', 'red')
      $('#player-one-side h4').text('Ketchup')
      $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
  })
  $selectMustard.on('click', (event)=>{
    playerOne.color = 'yellow'
    playerOne.character = 'Mustard'
    console.log(playerOne)
    $('#272').css('background-color', 'yellow')
      $('#player-one-side h4').text('Mustard')
      $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
  })
  $selectRelish.on('click', (event)=>{
    playerOne.color = 'green'
    playerOne.character = 'Relish'
    console.log(playerOne)
    $('#272').css('background-color', 'green')
      $('#player-one-side h4').text('Relish')
      $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
  })

}
const openPlayerTwoSelect = () =>{
  $playerSelectionModal.css('display', 'none')
  $playerTwoSelectionModal.css('display', 'block')
  $('#ketchup-two-select').on('click', (event)=>{
    playerTwo.color = 'red'
    playerTwo.character = 'Ketchup'
    console.log(playerTwo)
    $('#290').css('background-color', 'red')
      $('#player-two-side h4').text('Ketchup')
      $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
  })
  $('#mustard-two-select').on('click', (event)=>{
    playerTwo.color = 'yellow'
    playerTwo.character = 'Mustard'
    console.log(playerTwo)
    $('#290').css('background-color', 'yellow')
      $('#player-two-side h4').text('Mustard')
        $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
  })
  $('#relish-two-select').on('click', (event)=>{
    playerTwo.color = 'green'
    playerTwo.character = 'Relish'
    console.log(playerTwo)
    $('#290').css('background-color', 'green')
      $('#player-two-side h4').text('Relish')
        $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
  })

}
const startGame = () => {
  $startGameModal.css('display', 'block')
}
  $closeBtn.on('click', closeModal);
  $closeBtn.on('click', openPlayerOneSelect)
  $playerSelect.on('click', openPlayerTwoSelect)
  $playerTwoSelect.on('click', closeModal)
  setTimeout(openModal, 10);
  setTimeout(makeRaceCourse, 10)
});
//===========================================================================//
