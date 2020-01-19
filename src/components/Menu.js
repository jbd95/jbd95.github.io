import React from 'react';
import { Menu, Icon, Button, Drawer } from 'antd';
import '../App.css';
import { Link } from 'react-router-dom';

export class MainMenu extends React.Component {
  
  state = {
    current: this.props.tab,
    visible: this.props.visible,
    callVisible: false
  };

  handleClick = e => {
    this.setState({
      current: e.key,
      visible: this.state.visible,
      callVisible: false
    });
  };

  showDrawer = () => {
      this.setState({
          current: this.state.current,
          visible: true,
          callVisible: false
      });
  }

  onClose = () => {
      this.setState({
          current: this.state.current,
          visible: false,
          callVisible: false
      });
      this.props.visibleCallback();
  }

  render() {

    const visible = this.state.visible || this.props.callVisible;

    return (
      <div>
        <Button type='primary' onClick={this.showDrawer} className='menu-button'>
            <Icon type='menu'/>
        </Button>

        <Drawer
            title="Navigation"
            placement="left"
            closable={true}
            onClose={this.onClose}
            visible={visible}
          >
            <Menu onClick={this.handleClick} onSelect={this.props.changedSelection} selectedKeys={[this.state.current]} mode="vertical" className='right-align'>
                <Menu.Item key="home" className='default-font unweighted-font secondary-color'>
                  <Link to={'/'}>
                    <Icon type="home" theme='outlined' style={{color: '#76323F'}}/>
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key="education" className='default-font unweighted-font secondary-color'>
                  <Link to={'/education'}>
                      <Icon type="book" theme='outlined' style={{color: '#76323F'}}/>
                      Education
                    </Link>
                </Menu.Item>
                <Menu.Item key="work" className='default-font unweighted-font secondary-color'>
                  <Link to={'/work'}>
                    <Icon type="idcard" theme='outlined' style={{color: '#76323F'}}/>
                    Work Experience
                  </Link>
                </Menu.Item>
                <Menu.Item key="projects" className='default-font unweighted-font secondary-color'>
                  <Link to={'projects'}>
                    <Icon type="code" theme='outlined' style={{color: '#76323F'}}/>
                    Projects
                  </Link>
                </Menu.Item>
              </Menu>
          </Drawer> 
      </div>
    );
  }
}