export default class ScoreBoard {
  constructor (name) {
    this.scoreElements = document.getElementsByClassName(name + '-score')
    this.totalScoreElement = document.getElementById(name + '-total-score')
  }

  setScore (roundSeq, score) {
    this.scoreElements[roundSeq].textContent = score
    this.total = Array.from(this.scoreElements).reduce((p, c) => p + Number(c.textContent), 0)
  }

  get total () {
    return Number(this.totalScoreElement.textContent)
  }

  set total (value) {
    this.totalScoreElement.textContent = value
  }
}
