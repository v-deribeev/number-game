//'use strict';
let guessNumber = document.querySelector('.guess').value;
let secretNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1; //Returns random number btw 1-20
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let userNumber = document.querySelector('.guess').value;

  // if (userNumber < 1 || userNumber > 20) {
  //   document.querySelector('.message').textContent = 'Input a Number btw 1-20';
  //   console.log('Over 20 and under 1');
  // }

  // if (!userNumber)  {
  //   document.querySelector('.message').textContent = 'Input a Number';
  // }
  // Win the game
  if (userNumber >= 1 && userNumber <= 20) {
    if (userNumber == secretNumber) {
      document.querySelector('.message').textContent = 'Success !';
      document.querySelector('body').style.backgroundColor = '#60b347'; // color green for WIN
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      //Number is too low
      if (userNumber < secretNumber && score >= 1) {
        document.querySelector('.message').textContent = 'Go higher !'; //Helps finding the number
        document.querySelector('.score').textContent = `${--score}`;
        console.log('Higher');
      } else if (userNumber < 1 || userNumber > 20) {
        document.querySelector('.message').textContent =
          'Input a Number btw 1-20';
      }
      // Lost game, score is 0
      else if (score < 1) {
        document.querySelector('.score').textContent = `${score}`;
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
    // Number is too high
    if (userNumber > secretNumber && score >= 1) {
      document.querySelector('.message').textContent = 'Go lower !'; //Helps finding the number
      document.querySelector('.score').textContent = `${--score}`;
      console.log('Lower');
    }
    // Lost game
    else if (score < 1) {
      document.querySelector('.score').textContent = `${score}`;
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else {
    document.querySelector('.message').textContent = 'Input a Number btw 1-20';
  }
});
// to refresh github pages
// to refresh github pages
// Reset Function
document.querySelector('.again').addEventListener('click', function () {
  //document.location.href = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//document.location.href = ""
//buttonCheck.addEventListener('click', checkNumber());
//checkNumber = function () {
//   return secretNumber
// }
//buttonCheck = document.querySelector('.check');

// let createChild = document.createElement('span')
// createChild.className = 'highScore'
// document.querySelector('.label-highscore').appendChild(createChild)
// document.querySelector('.highScore').textContent = `${score}`

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
//
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage('⛔️ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage('🎉 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //   // When guess is too high
//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📈 Too high!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }

//   //   // When guess is too low
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📉 Too low!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
