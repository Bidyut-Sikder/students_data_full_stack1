import React, { Component } from 'react';
import FormData from '../components/componentsForProject/FromData';
import SetFormData from '../components/componentsForProject/SetFormData';
import CallAlert from '../components/componentsForProject/CallAlert';
import Todos from '../components/componentsForProject/Todo';

class Project extends Component {
    render() {
        return (
         <>
       <br />
       <SetFormData /> <br /> <br />
       <FormData />
         <CallAlert />
         <Todos />
         </>
  
         
        );
    }
}

export default Project;