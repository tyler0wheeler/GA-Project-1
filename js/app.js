
/*
Strech goals
make odds on the players, alter speed
character bios
alerts in the race.
two players that press four keys in a certain order to be able to move
*/

let run = true
let playerOneBetValue = 0
let playerTwoBetValue = 0
const playerOne = { // something that tracks where the player is on the course
  character:'',
  color:'',
  image:'',
  hotdogs: 2,
  turnCounter: 0,
  removeTurnCounter: -1,
  pattern: ['a', 's', 'd', 'w'],
  exclude: ['j', 'k', 'l', 'i'], //test in pattern but not the current one
  excludeTwo: ['k', 'l', 'i', 'j'],
  current: 0,
  keyHandler: (event) =>{
    let path = [$('#272'), $('#273'), $('#274'), $('#275'), $('#276'), $('#277'), $('#278'), $('#279'), $('#280'), $('#281'), $('#282'), $('#283'), $('#284'), $('#285'), $('#268'), $('#250'), $('#232'), $('#214'), $('#196'), $('#178'), $('#160'), $('#142'), $('#124'), $('#106'), $('#88'), $('#70'), $('#51'), $('#32'), $('#31'), $('#30'), $('#29'), $('#28'), $('#27'), $('#26'), $('#25'), $('#24'), $('#23'), $('#22'), $('#21'), $('#38'), $('#56'), $('#74'), $('#92'), $('#110'), $('#128'), $('#146'), $('#164'), $('#182'), $('#200'), $('#218'), $('#236'), $('#254'), $('#271')];
    if(run){
      if(playerOne.exclude.indexOf(event.key) > 0 || playerOne.excludeTwo.indexOf(event.key) > 0){
        return null
      }
      if (playerOne.pattern.indexOf(event.key) < 0 || event.key !== playerOne.pattern[playerOne.current]) {
        playerOne.current = 0;
      } else {
        playerOne.current++
        }
        if (playerOne.pattern.length === playerOne.current) {
          playerOne.current = 0;
          playerOne.turnCounter += 1
          playerOne.removeTurnCounter += 1
          path[playerOne.turnCounter].css('background-color', playerOne.color)
          path[playerOne.removeTurnCounter].css('background-color', '')
        }
          if (playerOne.turnCounter >= 52){
            playerOne.hotdogs += playerOneBetValue
            playerTwo.hotdogs -= playerTwoBetValue
            console.log(playerOne.hotdogs)
            console.log(playerTwo.hotdogs)
            $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
            $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
            $('#annoucement-box').text(`${playerOne.character} wins ${playerOneBetValue} hotdog(s)!`)
            run = false
            restartGame()
          }
                if (playerOne.turnCounter == 15 ){
                  $('#annoucement-box').text(`${playerOne.character} is rounding 1st!`)
                }
                  else if (playerOne.turnCounter == 27){
                    $('#annoucement-box').text(`${playerOne.character} is rounding 2nd!`)
                  }
                     else if (playerOne.turnCounter == 42){
                      $('#annoucement-box').text(`It's the home stretch! Who is going to be our winner?!?`)
                    }
                    console.log(event.key)
                    console.log(playerOne.turnCounter)
                    console.log(playerOneBetValue);
                  }
                }
              }

const playerTwo = {
  character:'',
  color:'',
  hotdogs: 2,
  turnCounter: 0,
  removeTurnCounter: -1,
  pattern: ['j', 'k', 'l', 'i'],
  exclude: ['a', 's', 'd', 'w'],
  excludeTwo: ['s', 'd', 'w', 'a'],
  current: 0,
  keyHandler: (event) =>{
    let path = [$('#290'), $('#291'), $('#292'), $('#293'), $('#294'), $('#295'), $('#296'), $('#297'), $('#298'), $('#299'), $('#300'), $('#301'), $('#302'), $('#285'), $('#267'), $('#249'), $('#231'), $('#213'), $('#195'), $('#177'), $('#159'), $('#141'), $('#123'), $('#105'), $('#87'), $('#69'), $('#51'), $('#50'), $('#49'), $('#48'), $('#47'), $('#46'), $('#45'), $('#44'), $('#43'), $('#42'), $('#41'), $('#40'), $('#39'), $('#38'), $('#55'), $('#73'), $('#91'), $('#109'), $('#127'), $('#145'), $('#163'), $('#181'), $('#199'), $('#217'), $('#235'), $('#253'), $('#271')];
    if(playerTwo.exclude.indexOf(event.key) > 0 || playerTwo.exclude.indexOf(event.key) > 0){
      return null
    }
      if (playerTwo.pattern.indexOf(event.key) < 0 || event.key !== playerTwo.pattern[playerTwo.current]) {
        playerTwo.current = 0;
      } else {
        playerTwo.current++
        }
        if (playerTwo.pattern.length === playerTwo.current) {
          playerTwo.current = 0;
          playerTwo.turnCounter += 1
          playerTwo.removeTurnCounter += 1
          path[playerTwo.turnCounter].css("background-color", playerTwo.color)
          path[playerTwo.removeTurnCounter].css('background-color', '')
        }
          if(playerTwo.turnCounter >= 52){
            playerOne.hotdogs -= playerOneBetValue
            playerTwo.hotdogs += playerTwoBetValue
            console.log(playerOne.hotdogs)
            console.log(playerTwo.hotdogs)
            $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
            $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
            $('#annoucement-box').text(`${playerTwo.character} wins ${playerTwoBetValue} hotdog(s)!`)
            run = false
            restartGame()
            
          }
          if (playerTwo.turnCounter == 14){
            $('#annoucement-box').text(`${playerTwo.character} is rounding 1st!`)
          }
            else if (playerTwo.turnCounter == 27){
              $('#annoucement-box').text(`${playerTwo.character} is rounding 2nd!`)
            }
              else if (playerTwo.turnCounter == 42){
                $('#annoucement-box').text(`It's the home stretch! Who is going to be our winner?!?`)
              }
        console.log(event.key);
        console.log(playerTwo.turnCounter)
      }
    }

const playerThree = {
  character:'',
  color:'',
  hotdogs: 2,
  turnCounter: 0,
  removeTurnCounter: -1,
  computerHandler: () =>{
    let path = [$('#308'), $('#309'), $('#310'), $('#311'), $('#312'), $('#313'), $('#314'), $('#315'), $('#316'), $('#317'), $('#318'), $('#319'), $('#320'), $('#321'), $('#304'), $('#287'), $('#269'), $('#251'), $('#233'), $('#215'), $('#197'), $('#179'), $('#161'), $('#143'), $('#125'), $('#107'), $('#89'), $('#71'), $('#52'), $('#33'), $('#14'), $('#13'), $('#12'), $('#11'), $('#10'), $('#9'), $('#8'), $('#7'), $('#6'), $('#5'), $('#4'), $('#3'), $('#20'), $('#37'), $('#54'), $('#72'), $('#90'), $('#108'), $('#126'), $('#144'), $('#162'), $('#180'), $('#198'), $('#216'), $('#234'), $('#252'), $('#271')]
      if(playerThree.turnCounter <= 55 && playerOne.turnCounter < 52 && playerTwo.turnCounter < 52){
        playerThree.turnCounter += 1
        playerThree.removeTurnCounter += 1
        path[playerThree.turnCounter].css("background-color", playerThree.color)
        path[playerThree.removeTurnCounter].css('background-color', '')
        console.log(playerThree.turnCounter)
        console.log(playerOne.turnCounter);
      }
        if(playerThree.turnCounter >= 55){
          playerOne.hotdogs -= playerOneBetValue
          playerTwo.hotdogs -= playerTwoBetValue
          console.log(playerOne.hotdogs)
          console.log(playerTwo.hotdogs)
          $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
          $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
          $('#annoucement-box').text(`You both lose!`)
          run = false
          restartGame()
        }
           if(playerThree.turnCounter == 4){
             $('#annoucement-box').text(`Hey! ${playerThree.character} is a cheater!`)
            }
              if(playerOne.turnCounter >= 52 && playerThree.turnCounter < 55){
                return null
              }
              if(playerTwo.turnCounter >= 52 && playerThree.turnCounter < 55){
                return null
              }
        }
      }

$(document).on('keydown', playerOne.keyHandler)
$(document).on('keydown', playerTwo.keyHandler)
const playGame = () =>{
  run = true
  playerOne.turnCounter = 0
  playerOne.removeTurnCounter = -1
  playerTwo.turnCounter = 0
  playerTwo.removeTurnCounter = -1
  playerThree.turnCounter = 0
  playerThree.removeTurnCounter = -1
}
const computerStart = () =>{
  if(run){
    setInterval(playerThree.computerHandler, 900)
  }
}

//============================================================================//

//=============================================================//
const $raceCourse = $('#race-course')
const makeRaceCourse = () =>{
  for (let i = 0; i < 324; i++){
    const $square = $('<div>')
      $square.addClass('square')
      $square.attr('id', i)
      $raceCourse.append($square)
      $('#272').css('background-color', playerOne.color)
      $('#290').css('background-color', playerTwo.color)
      $('#308').css('background-color', playerThree.color)
    }
}
const placeYourBets = () => {
  $('#annoucement-box').text('Players Place Your Bets!')
}
const restartGame = () => {
  if(playerOne.hotdogs < 10 && playerTwo.hotdogs < 10 && playerOne.hotdogs > 0 && playerTwo.hotdogs > 0){
    $('.hotdog-bet').empty()
    $('.square').remove()
    playerOneBetValue = 0
    playerTwoBetValue = 0
    $('#player-one-textbox').attr('max', playerOne.hotdogs)
    $('#player-two-textbox').attr('max', playerTwo.hotdogs)
    setTimeout(placeYourBets, 3000)
  } else if(playerOne.hotdogs >= 10) {
    $('.hotdog-bet').empty()
    $('.square').remove()
    $('#winner-modal').css('display', 'block')
    $('#winner-text').text(`${playerOne.character} is our champion!`)
    } else if(playerTwo.hotdogs >= 10){
      $('.hotdog-bet').empty()
      $('.square').remove()
      $('#winner-modal').css('display', 'block')
      $('#winner-text').text(`${playerTwo.character} is our champion!`)
      } else if(playerOne.hotdogs <= 0){
        $('.hotdog-bet').empty()
        $('.square').remove()
        $('#winner-modal').css('display', 'block')
        $('#winner-text').text(`${playerOne.character} is out of hotdogs! ${playerTwo.character} wins!`)
        } else if(playerTwo.hotdogs <= 0){
          $('.hotdog-bet').empty()
          $('.square').remove()
          $('#winner-modal').css('display', 'block')
          $('#winner-text').text(`${playerTwo.character} is out of hotdogs! ${playerOne.character} wins!`)
        } else if(playerTwo.hotdogs <= 0 && playerOne.hotdogs <= 0){
            $('.hotdog-bet').empty()
            $('.square').remove()
            $('#winner-modal').css('display', 'block')
            $('#winner-text').text(`You're both losers! ${playerThree.character} wins!`)
          }
}

const playerOneBetList = () =>{
  $('#player-one-textbox').val('')
  console.log(playerOneBetValue)
  $('#player-one-textbox max').text(playerOne.hotdogs)
}
$('#player-one-bet').on('click', ()=>{
  playerOneBetValue = 0
  playerOneBetValue = parseInt($('#player-one-textbox').val())
  console.log(playerOneBetValue);
  $(event.currentTarget).trigger('reset')
  playerOneBetList()
})
const playerTwoBetList = () =>{
  $('#player-two-textbox').val('')
  console.log(playerTwoBetValue)
}
$('#player-two-bet').on('click', ()=>{
  playerTwoBetValue = 0
  playerTwoBetValue = parseInt($('#player-two-textbox').val())
  event.preventDefault()
  $(event.currentTarget).trigger('reset')
  playerTwoBetList()
})

const playerThreeDefault = () =>{
  if (playerOne.color == 'red' && playerTwo.color == 'lime'){
    playerThree.character = 'Mustard'
    playerThree.color = 'yellow'
    $('#308').css('background-color', 'yellow')
  }
    else if (playerOne.color == 'red' && playerTwo.color == 'yellow'){
      playerThree.character = 'Relish'
      playerThree.color = 'lime'
      $('#308').css('background-color', 'lime')
    }
      else if (playerOne.color == 'yellow' && playerTwo.color == 'lime'){
        playerThree.character = 'Ketchup'
        playerThree.color = 'red'
        $('#308').css('background-color', 'red')
      }
        else if(playerOne.color == 'yellow' && playerTwo.color == 'red'){
          playerThree.character = 'Relish'
          playerThree.color = 'lime'
          $('#308').css('background-color', 'lime')
        }
          else if(playerOne.color == 'lime' && playerTwo.color == 'yellow'){
            playerThree.character = 'Ketchup'
            playerThree.color = 'red'
            $('#308').css('background-color', 'red')
          }
            else if(playerOne.color == 'lime' && playerTwo.color == 'red'){
              playerThree.character = 'Mustard'
              playerThree.color = 'yellow'
              $('#308').css('background-color', 'yellow')
            }
}


//beginning of game jquery
$(() => {
const $modal = $('#modal');
const $closeBtn = $('#close');
const $playerSelectionModal = $("#player-selection-modal")
const $playerTwoSelectionModal = $("#player-two-selection-modal")
const $playerSelect = $('#player-selection')
const $playerTwoSelect = $('#player-two-selection')
const $playerOneSelectButton = $('.player-buttons')
const $playerTwoSelectButton = $('.player-two-buttons')
const $selectKetchup = $('#ketchup-select')
const $selectMustard = $('#mustard-select')
const $selectRelish = $('#relish-select')
const $startGameModal = $('#start-game-modal')
const $startGameButton = $('#start')

const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
  $playerTwoSelectionModal.css('display', 'none')
  $('#annoucement-box').text('Time to Place Your Bets!')
}

const openPlayerOneSelect = () =>{
  $playerSelectionModal.css('display', 'block')
    $selectKetchup.on('click', (event)=>{
      playerOne.color = 'red'
      playerOne.character = 'Ketchup'
      console.log(playerOne)
      console.log(playerOneMaxBet())
      $('#272').css('background-color', 'red')
      $('#player-one-side h4').text('Ketchup')
      $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
      $('#ketchup-two-select').remove()
  })
      $selectMustard.on('click', (event)=>{
        playerOne.color = 'yellow'
        playerOne.character = 'Mustard'
        console.log(playerOne)
        $('#272').css('background-color', 'yellow')
        $('#player-one-side h4').text('Mustard')
        $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
        $('#mustard-two-select').remove()
    })
        $selectRelish.on('click', (event)=>{
          playerOne.color = 'lime'
          playerOne.character = 'Relish'
          console.log(playerOne)
          $('#272').css('background-color', 'lime')
          $('#player-one-side h4').text('Relish')
          $('#player-one-hotdogs').text(`Hotdog Counter: ${playerOne.hotdogs}`)
          $('#relish-two-select').remove()
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
    playerThreeDefault()
    console.log(playerThree)
  })
    $('#mustard-two-select').on('click', (event)=>{
      playerTwo.color = 'yellow'
      playerTwo.character = 'Mustard'
      console.log(playerTwo)
      $('#290').css('background-color', 'yellow')
      $('#player-two-side h4').text('Mustard')
      $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
      playerThreeDefault()
      console.log(playerThree)
    })
      $('#relish-two-select').on('click', (event)=>{
        playerTwo.color = 'lime'
        playerTwo.character = 'Relish'
        console.log(playerTwo)
        $('#290').css('background-color', 'lime')
        $('#player-two-side h4').text('Relish')
        $('#player-two-hotdogs').text(`Hotdog Counter: ${playerTwo.hotdogs}`)
        playerThreeDefault()
        console.log(playerThree)
      })
}

const placeYourBets = () =>{
  $('#annoucement-box').text('Players Place Your Bets!')
}
const onYourMark = () =>{
  $('#annoucement-box').text('On Your Mark...')
}
const getSet = () =>{
  $('#annoucement-box').text('Get Set...')
}
const go = () =>{
  $('#annoucement-box').text('GO!!!')
}
const playerOneMaxBet = () =>{
$('#player-one-textbox.max').text('playerOne.hotdogs')
}

const startGame = () => {
makeRaceCourse()
computerStart()
setTimeout(onYourMark, 1000)
setTimeout(getSet, 2000)
setTimeout(go, 3000)
setTimeout(playGame(), 3000)
}
$('#restart').on('click', (event)=>{
  location.reload(true)
})

  $closeBtn.on('click', closeModal);
  $closeBtn.on('click', openPlayerOneSelect)
  $playerOneSelectButton.on('click', openPlayerTwoSelect)
  $playerTwoSelectButton.on('click', closeModal)
  $startGameButton.on('click', startGame)
  setTimeout(openModal, 10);
});
//===========================================================================//
