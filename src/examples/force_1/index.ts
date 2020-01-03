import p5 = require('p5')

export const sketch = (p5: p5): void => {
  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight)
  }

  p5.draw = () => {
    p5.background(35)
  }
}
