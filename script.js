/*
  Magic 8 Ball
*/
let emptyClickCount = 0;

function askEightBall() {
  
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
    emptyClickCount++; // Increment empty click count
    questionOutEl.textContent = "";
    
    // Show window with error message
    eightCircleEl.classList.add('d-none');
    windowEl.classList.remove('d-none');

    if (emptyClickCount === 1) {
      answerEl.textContent = "The 8 Ball needs a question, idiot!";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
  
    } else if (emptyClickCount === 2) {
      answerEl.textContent = "I said... type a question FIRST!";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
   
    } else if (emptyClickCount === 3) {
      answerEl.textContent = "Are you doing this on purpose?!";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
     
    } else if (emptyClickCount === 4) {
      answerEl.textContent = "This has to be some sort of sick joke";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
   
    } else if (emptyClickCount === 5) {
      answerEl.textContent = "This is not funny anymore";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
     
    } else if (emptyClickCount === 6) {
      answerEl.textContent = "Please";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
         
    } else if (emptyClickCount === 7) {
      answerEl.textContent = "just";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;

      answerEl.textContent = "STOP SPAMMING ME!";
      answerTypeEl.innerHTML = `<span class="no">Error</span>`;
    } else {
      answerEl.textContent = "YOU IDIOT LOOK WHAT YOU HAVE DONE!!!";
      answerTypeEl.innerHTML = `<span class="no">System Failure</span>`;

      document.body.classList.add('crash-out', 'crash-shake');
    }

    return;
  }

  // 5. Display the valid question
  questionOutEl.textContent = `You asked: "${userQuestion}"`;

  // 6. Switch visibility from '8' circle to the triangle window
  eightCircleEl.classList.add('d-none');
  windowEl.classList.remove('d-none');

  // 7. Pick a Random Response (11 total options from index 0 to 10)
  const randomNumber = Math.floor(Math.random() * 11);
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
      eightBall = "HELL YEAH!!!";
      type = "Positive";
      typeClass = "yes";
      break;
    case 4:
      eightBall = "Reply hazy, try again.";
      type = "Neutral";
      typeClass = "maybe";
      break;
    case 5:
      eightBall = "I don't really feel like answering it now ask later.";
      type = "Neutral";
      typeClass = "maybe";
      break;
    case 6:
      eightBall = "Ask again later.";
      type = "Neutral";
      typeClass = "maybe";
      break;
    case 7:
      eightBall = "Don't count on it.";
      type = "Negative";
      typeClass = "no";
      break;
    case 8:
      eightBall = "My reply is no.";
      type = "Negative";
      typeClass = "no";
      break;
    case 9:
      eightBall = "Very doubtful.";
      type = "Negative";
      typeClass = "no";
      break;
    case 10:
      eightBall = "Hell Naw man.";
      type = "Negative";
      typeClass = "no";
      break;
  }

  // 8. Output results to screen
  answerEl.textContent = eightBall;
  answerTypeEl.innerHTML = `<span class="${typeClass}">${type}</span>`;

  // If they asked a valid question, reset the anger level & remove screen shake
  emptyClickCount = 0;
  document.body.classList.remove('crash-out', 'crash-shake');
}
