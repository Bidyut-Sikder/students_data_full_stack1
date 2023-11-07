

import React, { Component } from 'react';

class DecrementButton extends Component {
    state={
        count: 0
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render() {
        const {count}=this.state;
        return (
            <div>
                <h2>Count :{count}</h2> <br />
                <button onClick={this.decrement}>Decrement</button><br/><br/>
            </div>
        );
    }
}

export default DecrementButton;

















