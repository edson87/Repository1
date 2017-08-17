import * as React from 'react';

import './Contact.css';

export interface IAppProps {

}

export class Contact extends React.PureComponent<IAppProps, {}> {
 
  render() {

    return (
      <div className="Contact">
        <h1>Get in Touch</h1>
        <h3>We’re currently accepting new client projects. We look forward to serving you.</h3>
      </div>
    );
  }
}

export default Contact;


