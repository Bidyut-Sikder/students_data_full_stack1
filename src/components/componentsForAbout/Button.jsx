import React, { Component } from 'react';

class Button extends Component {
    state={
        count: 0
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        const {count}=this.state;
        return (
            <div>
                <h2>Count :{count}</h2> <br />
                <button onClick={this.increment}>Increment</button><br/><br/>
            </div>
        );
    }
}

export default Button;