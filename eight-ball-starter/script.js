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

if(userQuestion === "") {
document.getElementById('questionOut').textContent = "you asked: " + userQuestion;
}else{
document.getElementById('questionOut').textContent = "The 8 Ball needs a question to work idiot!!!"
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
document.getElementById('amswerType').innerHTML = ''
return
}




//get a random number


//get magic 8balls answer

//show the 8ball answer type badge

}