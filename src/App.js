import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './fonts/montserrat.css';
import { Layout } from 'antd';
import { MainMenu } from './components/Menu';
import Home from './components/Home';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


class App extends React.Component {
  
  constructor(props)
  {
      super(props);
      this.state = {
          menuVisible: false
      }
  }

  openMenu = () => {
      this.setState({
        menuVisible: true
      })
  }

  closeMenu = () => {
      this.setState({
        menuVisible: false
      })
  }

  render() {
    return (
      <Layout className='layout'>
        {/*<Header className='white-background header'/>*/}
        <Content className='fill-screen background-color'>
            <div>
              <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={() => <Home openMenu={this.openMenu} closeMenu={this.closeMenu}/>}/>
                  <Route exact path='/education' component={Education}/>
                  <Route exact path='/work' component={Work}/>
                  <Route exact path='/projects' component={Projects}/>
                </Switch>
                <MainMenu tab='home' callVisible={this.state.menuVisible} visibleCallback={this.closeMenu}></MainMenu>
              </BrowserRouter>
            </div>
        </Content>
        {/*<Footer className='footer'/>*/}
      </Layout>
    );
  }
}

export default App;