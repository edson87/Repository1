import * as React from 'react';

import './Footer.css';

export interface IAppProps {

}

export class Footer extends React.PureComponent<IAppProps, {}> {
 
  render() {

    return (
      <div className="Footer">
        <h5>COPYRIGHT © 2016 NEARSHORE CODE SRL., ALL RIGHTS RESERVED</h5>
      </div>
    );
  }
}

export default Footer;
