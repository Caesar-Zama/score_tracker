const scoreTracker = () => {
  const scoreSetting = () => {
    const scoreAdjusterModal = document.querySelector('#set-score');
    const modalExit = document.querySelector('.modal__exit');
    const setScoreBtn = document.querySelector('#winning-score');
    const scoreToWin = document.querySelector('.score');
    const rangeSlider = document.querySelector('.slider');


    scoreAdjusterModal.addEventListener('click', (e) => {
      if (e.target.id === "set-score") {
        scoreAdjusterModal.style.display = 'none';
      }
    });

    setScoreBtn.addEventListener('click', () => {
      scoreAdjusterModal.style.display = 'flex';
    });

    modalExit.addEventListener('click', () => {
      scoreAdjusterModal.style.display = 'none';
    });

    rangeSlider.addEventListener('change', () => {
      scoreToWin.textContent = rangeSlider.value;
    });
  }
  
  scoreSetting();
}

scoreTracker();
 