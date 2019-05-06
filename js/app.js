const scoreTracker = () {
  const playerOne = document.querySelector('.js-p1-score');
  const playerTwo = document.querySelector('.js-p2-score');
  const scoreToWin = document.querySelectorAll('span.scorecard__text');

  const setScore = document.querySelector('.fa-sliders-h');


  // Set Score to win

  // - user presses set score icon
  // - a slider appears allowing them to set score needed to win
  // "Winning Score" changes to score needed to win

  setScore.addEventListener('click', function() {
    // - a slider appears allowing them to set score needed to win
    // "Winning Score" changes to score needed to win
  });
}

scoreTracker();
