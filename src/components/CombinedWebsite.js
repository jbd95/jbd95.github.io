import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../fonts/montserrat.css';
import { Row, Col, Menu, Card, Avatar, Icon } from 'antd'
import MacTechImage from '../images/mactech-icon.png'
import CSEImage from '../images/uta-heracleia.png'
import { MenuData } from '../data/Links'
import { Link } from './Link';

export const CombinedWebsite = (props) => {
    return (
      <div>
          <div className='primary-background screen-width'>
            <Row className='fill-width' type='flex' justify='end'>
              <Menu className='primary-background xlarge-font' mode='horizontal'>
                {MenuData.map((cur, i) => (
                    <Menu.Item className='primary-background large-font primary-color' key={i}>
                      <Link href={cur.link}
                        content={
                            <Icon className='white-color' type={cur.icon} theme='filled' style={{fontSize: '24px'}}/>
                        }>
                      </Link>
                    </Menu.Item>
                ))}
              </Menu>
            </Row>
          </div>
          <div className='page-with-menu primary-background'>
            <Col xs={1} sm={2} md={3} lg={2}/>
            <Col className='fill-height' xs={22} sm={20} md={18} lg={10}>
              <Row className='fill-height white-color' type='flex' align='middle'>
                <div>
                    <div className='title'> James Brady </div>
                    <div className='secondary-color sub-title'> Software Engineer </div>
                  </div>
              </Row>
            </Col>
            <Col xs={0} sm={0} md={2} lg={2}/>
            <Col className='fill-height' xs={22} sm={20} md={16} lg={8}>
              <Row className='fill-height' type='flex' align='middle'>
                <div>
                  <div className='white-color xlarge-font'>
                    I am a Computer Science student at the University of Texas at Arlington. I will be graduating in May 2021.
                  </div>
                  <br/>
                  <div className='white-color xlarge-font'>
                    I work as an Undergraduate Research Assistant in the Heracleia Lab.
                  </div>
                  <br/>
                  <div className='white-color xlarge-font'> 
                    My team and I are currently working on BlazeOJ, which is a Competitive Programming Judge for UTA. Check it out if you're interested in getting
                    started with competitive programming or need to practice for a technical interview.
                  </div>
                  <br/>
                  <div className='white-color xlarge-font'>
                    Past projects that I have worked on are Edunate, MemeRoyale, and Road Rage Unlimited.
                  </div>
                </div>
              </Row>
            </Col>
            <Col xs={1} sm={2} md={3} lg={4}/>
          </div>
        </div>
    );
}