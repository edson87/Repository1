import * as React from 'react';
//import PropTypes from 'prop-types';

import './Slider.css';

export interface ISlideImage {
  title?: string;
  path: string;
}

export interface ISliderProps {
  items: Array<ISlideImage>;
}

export class Slider extends React.PureComponent<ISliderProps, {}> {
 
  render() {
      const { items } = this.props;
 
      console.log(this.props)
    return (
      <div className="Slider">
        <h1>Sliders</h1>
        <div>
          {items && items.map((item, key) => <img key={key} src={item.path} />)}
          
        </div>
      </div>
    );
  }
}


export default Slider;
 