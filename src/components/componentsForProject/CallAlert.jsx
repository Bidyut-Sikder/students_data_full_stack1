import React from 'react';

const CallAlert = () => {
    const shoot = () => {
        alert("Great Shot!");
      }
    
      return (
        <button onClick={shoot}>Take the shot!</button>
      );
};

export default CallAlert;