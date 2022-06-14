import Game from './Game.js'
alert(`DICE GAME
This is a dice game where a user plays against the computer. The user and the computer each roll a pair of dice 3 times. After the third roll of the dice the player with highest score wins.
The scoring for the game works as follows:
- If any of the players two dice comes up as a 1 then the score for that round for the player is 0. eg: if the player rolls a 6 and 1, they get a score of 0
- If the player rolls a pair of the same numbers then the players score is the total of the two dice times 2. eg: if he player rolls 5 and 5, they get a score of (5+5)*2=20
- If the player rolls any other combination of dice other than the ones mentioned above then the players score is the total value of the two dice, eg: player rolls a 3 and 2, player gets a score of 3+2=5
The game provides a text or graphical output showing the following:
- The current rolled dice values for the player and the computer.
- The score for this round for the player and the computer.
- The accumulated total score for the player and computer
The game provides a button that will do the following: roll a pair dice for the player and another pair of dice for the computer, calculate the score for each of the player’s then update the browser display to reflect the state of the game.
After three rolls of the dice the game totals up the scores and displays a message displaying who the winner was.
The game result screen will reset the game and start a new game when clicked.`)
new Game().play()
