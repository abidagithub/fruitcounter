// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}
  // eslint-disable-next-line lines-between-class-members

  onIncrementMango = () => {
    this.setState(prevState => {
      console.log(`Previous state value is ${prevState.countMango}`)
      return {countMango: prevState.countMango + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevState => {
      console.log(`Previous state value is ${prevState.countBanana}`)
      return {countBanana: prevState.countBanana + 1}
    })
  }

  render() {
    const {countMango} = this.state
    const {countBanana} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="spam">{countMango}</span> mangoes
            <span className="spam">{countBanana}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img"
              alt="banana"
            />
          </div>
          <div>
            <button className="button" onClick={this.onIncrementMango}>
              Eat Mango
            </button>
            <button className="button" onClick={this.onIncrementBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
