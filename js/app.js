const scoreTracker = _ => {
  const nav = document.querySelector('.nav');
  
  // Identify and Apply proper animation for clicked nav button
  const checkNavBtn = (event) => {
    const navBtn = event.target.attributes.name.value;
    
    if (navBtn === 'person-add') {
      // newPlayer();
    } else if (navBtn === 'slider') {
      adjustScore();
    } else if (navBtn === 'add-circle') {
      // add()
    } else if (navBtn === 'remove') {
      // subtract()
    } else { // 'refresh'
      // reset();
    }
  }
  
  // adjustScore Modal
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
      });
    });
  }

  // Add Event Listener to each nav button
  nav.addEventListener('click', checkNavBtn);
}

scoreTracker();
