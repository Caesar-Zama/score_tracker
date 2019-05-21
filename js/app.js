// It should be able to add a point to player card ()
// It should be able to add a new player card ()
// It should be able to remove a player card ()
// It should be able to subtract a score from player card ()
// It should be able to display player name on card ()
// It should be able to restart tracker ()
// IT should be able to set a game score (x)

const scoreTracker = _ => {
  const nav = document.querySelector('.nav');
  
  // Identify and Apply proper animation for clicked nav button
  const checkNavBtn = (event) => {
    const navBtn = event.target.classList[0];
    console.log(navBtn);
    

    if (navBtn === 'js-player-add') {
      // newPlayer();
    } else if (navBtn === 'js-slider') {
      adjustScore();
    } else if (navBtn === 'js-add') {
      add();
    } else if (navBtn === 'js-reset') {
      // subtract()
    } else { // 'refresh'
      // reset();
    }
  }
  
  // IT should be able to set a game score
  const adjustScore = () => {
    const adjustScoreModal = document.querySelector('#adjust-score');
    const modalContent = document.querySelector('.modal__content');
    const modalExit = document.querySelector('.modal__exit');
    const rangeSlider = document.querySelector('.slider');
    const playingTo = document.querySelector('.score');
    const scorecardWinningScore = document.querySelectorAll('.scorecard__header span');
    
    // adjustScore appear when user clicks
    adjustScoreModal.style.display = 'flex';

    // adjustScore disappear when user clicks "x" 
    modalExit.addEventListener('click', _ => {
      adjustScoreModal.style.display = 'none';
    });

    // adjustScore disappear when user outside modal
    adjustScoreModal.addEventListener('click', (event) => {
      if (event.target.id === "adjust-score") {
        adjustScoreModal.style.display = 'none';
      }
    });

    // User selects score needed to win
    rangeSlider.addEventListener('input', _ => {
      playingTo.textContent = rangeSlider.value;

      // Update each player scorecard to new winning score
      scorecardWinningScore.forEach(scorecard => {
        if (Number(playingTo.textContent) < 10) {
          scorecard.textContent =`0 ${playingTo.textContent}`;
        } else {
          scorecard.textContent = playingTo.textContent;
        }
      })
    });
  }

  // Add Point To Scorecard
  const add = () => {
    // On the card that is currently visible
      // User clicks "add" button
        // a point is added to card 
    
  }








  // Add Event Listener to each nav button
  nav.addEventListener('click', checkNavBtn);
}

scoreTracker();
