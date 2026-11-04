/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightBall(){
//get input values
let userName =  document.getElementById('nameInput').value
let userQuestion = document.getElementById('questionInput').value

console.log(userName,userQuestion);

// Show the Question on the site
if (userQuestion !== "") {
  document.getElementById('questionOut').textContent = "you asked: " + userQuestion;
} else {
  document.getElementById('questionOut').textContent = "The 8 Ball needs a question to work idiot!!!";
}
//Greet User
let greeting

if (userName === ""){
greeting = "Hello Mystery Person!"
} else {
greeting = `Hello, ${userName}!`
}

document.getElementById('greeting').textContent = greeting

//checkquestion
if (userQuestion === ""){
document.getElementById('questionOut').textContent =''
document.getElementById('answer').textContent ='The 8 Ball needs a question you idiot!!!'
document.getElementById('answerType').innerHTML = ''
return
}




//get a random number
let randomNumber = Math.floor(Math.random() * 8);

//get magic 8balls answer
let eightBall = "";
  let type = "";

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain.";
      type = "Positive";
      break;
    case 1:
      eightBall = "It is decidedly so.";
      type = "Positive";
      break;
          case 2:
      eightBall = "Hell yeah!!!";
      type = "Positive";
      break;
    case 3:
      eightBall = "Without a doubt.";
      type = "Positive";
      break;
    case 4:
      eightBall = "Reply hazy, try again.";
      type = "Neutral";
      break;
    case 5:
      eightBall = "Ask again later.";
      type = "Neutral";
      break;
    case 6:
      eightBall = "Don't count on it.";
      type = "Negative";
      break;
    case 7:
      eightBall = "My reply is no.";
      type = "Negative";
      break;
    case 8:
      eightBall = "Very doubtful.";
      type = "Negative";
      break;
      case 9:
      eightBall = "nah.";
      type = "Negative";
      break;
  }
  // 6. Output the results to the page
  document.getElementById('answer').textContent = eightBall;
  document.getElementById('answerType').textContent = "Answer Type: " + type;
}