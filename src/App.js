import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './fonts/montserrat.css';
import ReactGA from 'react-ga';
//import { GAID } from './secret';
import { CombinedWebsite } from './components/CombinedWebsite';

//ReactGA.initialize(GAID);

class App extends React.Component {
  
    render() {
      return (
        <div>
          <CombinedWebsite minWidth={500}/>
        </div>
      );
    }
}

export default App;