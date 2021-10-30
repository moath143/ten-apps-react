import React from 'react'
import { Component } from 'react'
import './App_one.css'

class App_one extends Component {
    state = {
        count: 0
    }

    sum = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    subtr = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }
    render() {
            return (
              <div className="apps">
                <p>Simple Counter</p>
                <p className="count">{this.state.count}</p>
                <div className="btns">
                  <button onClick={this.sum}>+</button>
                  <button onClick={this.reset}>Reset</button>
                  <button onClick={this.subtr}>-</button>
                </div>
              </div>
            );
    }
}

export default App_one
