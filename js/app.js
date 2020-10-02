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

const $generate = $('#generate');
const $raceCourse = $('#race-course')
const makeRaceCourse = () =>{
  for (let i = 0; i < 100; i++){
    const $square = $('<div>')
      $square.addClass('square')
      $square.attr('id', i)
      $raceCourse.append($square)
      console.log(6)
    }
    $generate.on('click', makeRaceCourse)
}
// Money will depend on outcome.  the endgame square will trigger an increase in money, if not, decrease
// keystoke combo function for players
// timer for computer moves
// alerts tagged for game commentary, append when a square is changed
//


//beginningof game jquery
$( () => {
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
  $closeBtn.on('click', makeRaceCourse)
  setTimeout(openModal, 50);
});
