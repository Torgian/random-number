var userNumber = parseInt(prompt('Please choose a random number'));
var userNumberTwo = parseInt(prompt('Now choose a second number'));
var ranNumber = Math.floor(Math.random() * (userNumber - userNumberTwo + 1)) + userNumberTwo;
document.write('I rolled a number between ' + userNumber + ' and ' + userNumberTwo + ' and got a ' + ranNumber + '!');
