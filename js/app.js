// It should be able to add a point to player card (x)
// It should be able to add a new player card (x)
// It should be able to remove a player card ()
// It should be able to subtract a score from player card (x)
// It should be able to display player name on card (x)
// It should be able to restart tracker ()
// IT should be able to set a game score (x)


const scoreTracker = _ => {
  const nav = document.querySelector('.nav');

  
  const gameOver = () => {
    const scoreToWin = document.querySelector('.scorecard__header span').textContent;
    const playerScorecards = document.querySelectorAll('.scorecard');
    const scorecardsParent = playerScorecards[0].parentNode;

    // Insure scoreToWin is a valid number 
    scoreToWin[0] === '0' ? winningScore = Number(scoreToWin[1]) : winningScore = Number(scoreToWin);
  
    // Delete losing cards from game
    const removeLosingCard = playerScorecard => {
      const playersScore = Number(playerScorecard.querySelector('.scorecard__score').textContent);
      // Remove all losing cards
      if (playersScore !== winningScore) {
        playerScorecard.parentNode.removeChild(playerScorecard);
      }
    }

    const winningCard = _ => {
      

      for (let i = 0; i < playerScorecards.length; i++) {
        let playerCardScore = playerScorecards[i].querySelector('.scorecard__score').textContent;
       // When there is a winning card, remove all losing cards
        if (Number(playerCardScore) === winningScore) {
          playerScorecards.forEach(removeLosingCard);
          scorecardsParent.classList.add('winner');
          break;
        }
      }
    }    
    winningCard();
  }
  
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
  }

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
          scorecard.textContent =`0${playingTo.textContent}`;
        } else {
          scorecard.textContent = playingTo.textContent;
        }
      })
    });
  }

  const setCardName = _ => { 
    // debugger;
    const card = inView();
    const playerEntry = card.querySelector('.scorecard__player-field');

    // When playerEntry element no longer exists, exit function
    if (playerEntry === null) return;  
       
    // Displays name player enters into field
    const cardName = _ => {
      const playerName = document.createElement('h5');
      const name = document.createTextNode(playerEntry.value);
      playerName.classList.add('scorecard__player');
      playerName.appendChild(name);

      // Player name pops up on scorecard
      const parent = playerEntry.parentNode;
      parent.replaceChild(playerName, playerEntry); 
    }
    
    playerEntry.addEventListener('change', cardName);
    

  }

  // Add point to current scorecard
  const add = () => {
    const playerCard = inView();
    const playerScore = playerCard.querySelector('.scorecard__score');    
    playerScore.textContent = Number(playerScore.textContent) + 1;
  }

  // Subtract point to current scorecard
  const subtract = () => {
    const playerCard = inView();
    const playerScore = playerCard.querySelector('.scorecard__score');
    playerScore.textContent = Number(playerScore.textContent) - 1;
  }

  // Builds a new scorecard
  const newPlayer = () => {
    const parent = document.querySelector('.scrolling--wrapper');
    const scorecard = document.createElement('article');
    const scorecardData = 
    `<div class="scorecard__content">
      <header class="scorecard__header">
        <p class="scorecard__text">Winning Score</p>
        <span class="scorecard__text">00</span>
      </header>
      <div class="scorecard__score-container">
        <h4 class="scorecard__score">0</h4>
      </div>
      <footer>
        <hr class="scorecard__divider"> 
        <input class="scorecard__player-field" type="text" placeholder="Enter Player Name">
      </footer>
    </div>`;
    scorecard.classList.add('scorecard');
    scorecard.innerHTML = scorecardData;
    parent.appendChild(scorecard);
  }

  const resetTracker = () => {
    const scorecards = document.querySelectorAll('.scorecard');
    const playerNames = document.querySelectorAll('.scorecard__player');
    
    scorecards.forEach((scorecard, index) => {
      // remove additional scorecards
      if (index > 1) scorecard.parentNode.removeChild(scorecard);        
      
      // Set winning score & scorecard score back to 0
      scorecard.querySelector('.scorecard__header span').textContent = '00';
      scorecard.querySelector('.scorecard__score').textContent = 0;
    });
    
    // Erase player name and bring back input field
    playerNames.forEach(playerName => {
      // Build up input field
      const playerNameField = document.createElement('input');
      playerNameField.classList.add('scorecard__player-field');
      playerNameField.placeholder = 'Enter Player Name';
      
      // Reset back to input field
      const parent = playerName.parentNode;
      parent.replaceChild(playerNameField, playerName);
    });    
  }

  // Identify and Apply proper animation for clicked nav button
  const checkNavBtn = (event) => {
    const navBtn = event.target.classList[0];
    
    // Determine which nav button was clicked
    switch (navBtn) {
      case 'js-player-add':
        newPlayer();
        break;
      case 'js-slider':
        adjustScore();
        break;
      case 'js-add': 
        add();
        gameOver();
        break;
      case 'js-subtract': 
        subtract();
        break;
      case 'js-reset':
        resetTracker();
    }
  }
   
  
  setCardName();
  scrollStop(setCardName);
  nav.addEventListener('click', checkNavBtn);
}

scoreTracker();