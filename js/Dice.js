export default class Dice {
  async roll () {
    const first = Math.floor(Math.random() * 6) + 1
    const second = Math.floor(Math.random() * 6) + 1
    document.getElementById('dices').classList.add('show')
    document.querySelector('#first-dice .dice' + first).classList.add('show')
    document.querySelector('#second-dice .dice' + second).classList.add('show')
    await new Promise(resolve => setTimeout(resolve, 1200))
    if (first === 1 || second === 1) {
      return 0
    } else if (first === second) {
      return (first + second) * 2
    } else {
      return first + second
    }
  }
  
  reset () {
    for (let e of document.getElementsByClassName('dice')) {
      e.classList.remove('show')
    }
    document.getElementById('dices').classList.remove('show')
  }
}
