const React = require('react')

class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div className= "current-slide">I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

module.exports = ImageSlider
