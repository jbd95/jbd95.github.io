import React from 'react';
import { Menu, Icon, Button, Drawer } from 'antd';

import '../App.css';

export class MainMenu extends React.Component {
  state = {
    current: this.props.tab,
    visible: false
  };

  handleClick = e => {
    this.setState({
      current: e.key,
      visible: this.state.visible
    });
  };

  handleNameClick = () => {
      console.log('name clicked');
      this.setState({
        current: this.props.tab,
        visible: this.state.visible
      });
  };

  goHome = () => {
      this.setState({
        current: 'home',
        visible: this.state.visible
      });
      this.props.homeClicked();
  }

  showDrawer = () => {
      this.setState({
          current: this.state.current,
          visible: true
      });
  }

  onClose = () => {
      this.setState({
          current: this.state.current,
          visible: false
      });
  }

  render() {
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
            visible={this.state.visible}
          >
            <Menu onClick={this.handleClick} onSelect={this.props.changedSelection} selectedKeys={[this.state.current]} mode="vertical" className='right-align unremovable'>
                <Menu.Item key="home" className='default-font unweighted-font secondary-color unremovable'>
                  <Icon type="home" theme='outlined' style={{color: '#76323F'}}/>
                  Home
                </Menu.Item>
                <Menu.Item key="education" className='default-font unweighted-font secondary-color unremovable'>
                  <Icon type="book" theme='outlined' style={{color: '#76323F'}}/>
                  Education
                </Menu.Item>
                <Menu.Item key="work" className='default-font unweighted-font secondary-color unremovable'>
                  <Icon type="idcard" theme='outlined' style={{color: '#76323F'}}/>
                  Work Experience
                </Menu.Item>
                <Menu.Item key="projects" className='default-font unweighted-font secondary-color unremovable'>
                  <Icon type="code" theme='outlined' style={{color: '#76323F'}}/>
                  Projects
                </Menu.Item>
              </Menu>
          </Drawer> 
      </div>
    );
  }
}