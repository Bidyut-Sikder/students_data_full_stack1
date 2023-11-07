import React, { Component } from 'react';
import Clock from '../components/componentsForAbout/Clock';
import Button from '../components/componentsForAbout/Button';
import DecrementButton from '../components/componentsForAbout/DecrementButton';
import HoverCounter from '../components/componentsForAbout/HoverCounter';

class About extends Component {
    render() {
        return (
       <>
       <Button />
       <DecrementButton />
       <HoverCounter />
       <Clock />
       </>
        );
    }
}

export default About;