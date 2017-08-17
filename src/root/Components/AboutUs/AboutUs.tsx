import * as React from 'react';

import './AboutUs.css';

export interface IAppProps {

}

export class AboutUs extends React.PureComponent<IAppProps, {}> {
 
  render() {

    return (
      <div className="Technologie">
        <h1>About Us</h1>
        <h3>We have a great working environment with a rich culture of fun and professionalism that attracts the best talents.</h3>
      </div>
    );
  }
}

export default AboutUs;


