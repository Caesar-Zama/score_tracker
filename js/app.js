const scoreTracker = () => {
  const scoreSetting = () => {
    const modal_setScore = document.querySelector('#set-score');
    const modalExit = document.querySelector('.modal__exit');
    const scoreToWin = document.querySelector('.score');
    const setScoreBtn = document.querySelector('#winning-score');


    setScoreBtn.addEventListener('click', function() {
      modal_setScore.style.opacity = 1;
      modal_setScore.style.pointerEvents = 'auto';

    });
  }
  
  scoreSetting();
}

scoreTracker();
 