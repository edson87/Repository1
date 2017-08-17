import * as React from 'react';

import './Services.css';

export interface IAppProps {

}

export class Services extends React.PureComponent<IAppProps, {}> {
 
  render() {

    return (
      <div className="Services">
        <h1>Our Services</h1>
      </div>
    );
  }
}

export default Services;
