import * as React from 'react';

import { Services } from './Components/Services';
import { Slider } from './Components/Sliders';
import { Technologie } from './Components/Technologies';
import { AboutUs } from './Components/AboutUs';
import { Footer } from './Components/Footer';

import ImgSlider from './ImgSlider/ImgSlider'

import './index.css';

export interface IAppProps {

}

class App extends React.Component<IAppProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {  

    return (
      <div id="body">
        
        <Slider  items={ImgSlider} />
        <Services />
        <Technologie />
        <AboutUs />
        <Footer />
        
      </div>
    
    );
  }
}

export default App;
