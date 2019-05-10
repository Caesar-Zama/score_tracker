const scoreTracker = () => {
  const scoreSetting = () => {
    const modal_setScore = document.querySelector('#set-score');
    const modalExit = document.querySelector('.modal__exit');
    const scoreToWin = document.querySelector('.score');
    const setScoreBtn = document.querySelector('#winning-score');


    setScoreBtn.addEventListener('click', () => {
      modal_setScore.style.display = 'flex';
    });

    modalExit.addEventListener('click', () => {
      modal_setScore.style.display = 'none';
    });
  }
  
  scoreSetting();
}

scoreTracker();
 