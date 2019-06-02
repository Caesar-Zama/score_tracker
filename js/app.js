// It should be able to add a point to player card (x)
// It should be able to add a new player card ()
// It should be able to remove a player card ()
// It should be able to subtract a score from player card ()
// It should be able to display player name on card (x)
// It should be able to restart tracker ()
// IT should be able to set a game score (x)

const scoreTracker = _ => {
  const nav = document.querySelector('.nav');

  // Determines which player card is entirely visible inside viewport
  const inView = () => {
    const scorecards = document.querySelectorAll('.scorecard');
    let playerCard;

    // Finds which scorecard is in view
    const visibleCard = scorecard => {
      // Get scorecard bounding (position in viewport)
      const scorecardPos = scorecard.getBoundingClientRect();

      // Check if scorecard is inside viewport on each side
      if (scorecardPos.left > 0 && scorecardPos.right < window.innerWidth) {
        playerCard = scorecard; 
      }
    }
    scorecards.forEach(visibleCard);
    
    return playerCard;
  }

  // Detect when user stops scrolling
  const scrollStop = (customFunc) => {
    const cards = document.querySelector('.scrolling--wrapper');
    let isScrolling; // scrolling variable
    
    // Make sure custom function is actually a function
    if (!customFunc || typeof customFunc !== 'function') return;

    // Listen for scroll events
    cards.addEventListener('scroll', () => {      
      //  when a user scrolls, remove any timeouts on the variable isScrolling
      window.clearTimeout(isScrolling);

      // set a timeout to run after scroll event ends
      isScrolling = setTimeout(_ =>  {customFunc();}, 390);
    });
  };

  // IT should be able to set a game score
  const adjustScore = () => {
    const adjustScoreModal = document.querySelector('#adjust-score');
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
    // Currently visible player card
    const playerCard = inView();
    const playerScore = playerCard.querySelector('.scorecard__score');
    
    // Add point to current scorecard
    playerScore.textContent = Number(playerScore.textContent) + 1;
  }

  // Identify and Apply proper animation for clicked nav button
  const checkNavBtn = (event) => {
    const navBtn = event.target.classList[0];
    // Determine which nav button was clicked
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
   
  const setCardName = _ => { 
    const card = inView();
    const playerName = card.querySelector('.scorecard__player-field');
    
    playerName.addEventListener('change', _ => {
      const h5 = document.createElement('h5');
      const name = document.createTextNode(playerName.value);
      h5.classList.add('scorecard__player');
      h5.appendChild(name);

      // Player name pops up on scorecard
      const parent = playerName.parentNode;
      parent.replaceChild(h5, playerName);
    });
  }

  setCardName();
  scrollStop(setCardName);
  nav.addEventListener('click', checkNavBtn);
}

scoreTracker();