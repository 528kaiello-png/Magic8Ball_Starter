/*
  Magic 8 Ball
*/

function askEightBall() {
  // 1. Get DOM elements and input values
  const nameInput = document.getElementById('nameInput').value.trim();
  const userQuestion = document.getElementById('questionInput').value.trim();
  const greetingEl = document.getElementById('greeting');
  const questionOutEl = document.getElementById('questionOut');
  const eightCircleEl = document.getElementById('eightCircle');
  const windowEl = document.getElementById('window');
  const answerEl = document.getElementById('answer');
  const answerTypeEl = document.getElementById('answerType');
  const ballEl = document.getElementById('ball');

  // 2. Set User Greeting
  if (nameInput === "") {
    greetingEl.textContent = "Hello Mystery Person!";
  } else {
    greetingEl.textContent = `Hello, ${nameInput}!`;
  }

  // 3. Trigger Shake Animation on the Ball
  ballEl.classList.remove('shake');
  // Trigger a DOM reflow so the animation restarts on consecutive clicks
  void ballEl.offsetWidth;
  ballEl.classList.add('shake');

  // 4. Handle Empty Question Case
  if (userQuestion === "") {
    questionOutEl.textContent = "";
    // Show window with error message
    eightCircleEl.classList.add('d-none');
    windowEl.classList.remove('d-none');
    
    answerEl.textContent = "The 8 Ball needs a question, idiot!";
    answerTypeEl.innerHTML = `<span class="no">Error</span>`;
    return;
  }

  // 5. Display the valid question
  questionOutEl.textContent = `You asked: "${userQuestion}"`;

  // 6. Switch visibility from '8' circle to the triangle window
  eightCircleEl.classList.add('d-none');
  windowEl.classList.remove('d-none');

  // 7. Pick a Random Response
  const randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  let type = "";
  let typeClass = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain.";
      type = "Positive";
      typeClass = "yes";
      break;
    case 1:
      eightBall = "It is decidedly so.";
      type = "Positive";
      typeClass = "yes";
      break;
    case 2:
      eightBall = "Without a doubt.";
      type = "Positive";
      typeClass = "yes";
      break;
    case 3:
      eightBall = "Reply hazy, try again.";
      type = "Neutral";
      typeClass = "maybe";
      break;
    case 4:
      eightBall = "Ask again later.";
      type = "Neutral";
      typeClass = "maybe";
      break;
    case 5:
      eightBall = "Don't count on it.";
      type = "Negative";
      typeClass = "no";
      break;
    case 6:
      eightBall = "My reply is no.";
      type = "Negative";
      typeClass = "no";
      break;
    case 7:
      eightBall = "Very doubtful.";
      type = "Negative";
      typeClass = "no";
      break;
  }

  // 8. Output results to screen
  answerEl.textContent = eightBall;
  answerTypeEl.innerHTML = `<span class="${typeClass}">${type}</span>`;
}