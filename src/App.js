import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './fonts/montserrat.css';
import { Layout} from 'antd';
import { MainMenu } from './components/Menu';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
const { Header, Content, Footer } = Layout;


class App extends React.Component {
  
  state = {
      body: <Home/>,
      tab: 'home'
  };

  changeTab = (tab) => {
      switch(tab.key)
      {
          case 'home':
            this.setState({
              body: <Home/>,
              tab: tab
            })
          break;
          case 'education':
              this.setState({
                body: <Education/>,
                tab: tab
              })
          break;
          case 'work':
              this.setState({
                body: <Work/>,
                tab: tab
              })
          break;
          case 'projects':
              this.setState({
                body: <Projects/>,
                tab: tab
              })
          break;
          default:
              this.setState({
                body: <Home/>,
                tab: tab
              })
          break;
      }
  }

  goHome = () => {
      this.setState({
          body: <Home/>,
          tab: 'home'
      });
  };

  render() {
    return (
      <Layout className='layout'>
        {/*<Header className='white-background header'/>*/}
        <Content className='fill-screen background-color'>
            <div>
            {this.state.body}
            <MainMenu tab={this.state.tab} changedSelection={this.changeTab} homeClicked={this.goHome}></MainMenu>
            </div>
        </Content>
        {/*<Footer className='footer'/>*/}
      </Layout>
    );
  }
}

export default App;