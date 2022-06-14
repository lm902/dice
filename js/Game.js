import ScoreBoard from './ScoreBoard.js'
import Dice from './Dice.js'

export default class Game {
  constructor () {
    this.round = 0
    this.playerScoreBoard = new ScoreBoard('player')
    this.computerScoreBoard = new ScoreBoard('computer')
    this.dice = new Dice()
  }

  async play () {
    for (this.round = 0; this.round < 3; this.round++) {
      await this.playerRound()
      await this.computerRound()
    }
    this.showGameResult()
  }

  async playerRound () {
    this.playerScoreBoard.scoreElements[this.round].classList.add('current')
    const rollElement = document.getElementById('roll')
    const rollPromise = new Promise(resolve => {
      rollElement.addEventListener('click', async () => {
        rollElement.classList.remove('show')
        const result = await this.dice.roll()
        this.playerScoreBoard.setScore(this.round, result)
        this.playerScoreBoard.scoreElements[this.round].classList.remove('current')
        resolve()
      }, { once: true })
    })
    const yourTurnElement = document.getElementById('your-turn')
    yourTurnElement.classList.add('show')
    await new Promise(resolve => setTimeout(resolve, 1000))
    rollElement.classList.add('show')
    this.dice.reset()
    await new Promise(resolve => yourTurnElement.addEventListener('animationend', resolve, { once: true }))
    yourTurnElement.classList.remove('show')
    return rollPromise
  }

  async computerRound () {
    this.computerScoreBoard.scoreElements[this.round].classList.add('current')
    const computerTurnElement = document.getElementById('computer-turn')
    computerTurnElement.classList.add('show')
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.dice.reset()
    const rollPromise = new Promise(async resolve => {
      const result = await this.dice.roll()
      this.computerScoreBoard.setScore(this.round, result)
      this.computerScoreBoard.scoreElements[this.round].classList.remove('current')
      resolve()
    })
    await new Promise(resolve => computerTurnElement.addEventListener('animationend', resolve, { once: true }))
    computerTurnElement.classList.remove('show')
    return rollPromise
  }
  
  async showGameResult () {
    const diff = this.playerScoreBoard.total - this.computerScoreBoard.total
    let id
    if (diff > 0) {
      id = 'victory'
    } else if (diff < 0) {
      id = 'defeat'
    } else {
      id = 'tie'
    }
    document.getElementById(id).classList.add('show')
    document.getElementById(id).addEventListener('click', () => location.reload())
  }
}
