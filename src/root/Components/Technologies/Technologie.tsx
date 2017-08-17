import * as React from 'react';

import './Technologie.css';

export interface IAppProps {

}

export class Technologie extends React.PureComponent<IAppProps, {}> {
 
  render() {

    return (
      <div className="Technologie">
        <h1>Technologie</h1>
        <h3>Let's have a look</h3>
      </div>
    );
  }
}

export default Technologie;


