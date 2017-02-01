const React = require('react')

class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: `${props.initialCount}`
    }
  }
  render() {
    return (
      <div className="time-left">{this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</div>
    );
  }
}

module.exports = Bomb
