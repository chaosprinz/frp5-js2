import p5 = require('p5')

const width = innerWidth - document.getElementById('app').clientWidth

export const sketch = (p5: p5): void => {
  p5.setup = () => {
    p5.createCanvas(width, innerHeight)
  }

  p5.draw = () => {
    p5.background(35)
  }
}
