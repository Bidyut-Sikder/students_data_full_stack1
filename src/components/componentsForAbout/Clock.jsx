import React, { Component } from 'react';


class Clock extends Component {

    state = {
        date: new Date(),
        locale: "bn-BD"
    }


    tick() {

        this.setState({
            date: new Date()
        })

    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }






    render() {
        const { date, locale } = this.state;

        return (

            <div>
            
                <h2>Time: {date.toLocaleTimeString(locale)} </h2>

                
            </div>

        );
    }
}

export default Clock;