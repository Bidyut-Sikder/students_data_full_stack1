import React, { Component } from 'react';
import FormHeader from '../components/componentsForContact/FormHeader';
import FormBody from '../components/componentsForContact/FormBody';
import FormFooter from '../components/componentsForContact/FormFooter';
import FormDescription from '../components/componentsForContact/FormDescription';

class Contact extends Component {
    render() {
        return (
            <div>
                <FormHeader />
                <FormBody />
                <FormDescription />
                <FormFooter />
            </div>
        );
    }
}

export default Contact;