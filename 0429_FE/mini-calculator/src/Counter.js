import React from "react";

class Counter extends React.Component {
    state = {number: 0}
    plus = () => {this.setState({number: this.state.number+1})}
    minus = () => {this.setState({number: this.state.number+1})}
    render() {
        return (
            <div>
                <b>Count</b>
                <p>값 : {this.state.number}</p>
                <button onClick = {this.plus}>Plus</button>
                <button onClick = {this.minus}>Minus</button>
            </div>
        )
    }
}

export default Counter