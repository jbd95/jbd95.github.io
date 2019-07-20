import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Typography, Row, Icon, Col } from 'antd';
import { Banner } from './Banner';
import { RoundButton } from './ExpandableButton';
import utaIcon from '../images/uta-icon.png';
import heracleiaIcon from '../images/uta-heracleia.png';
import Links from '../data/Links';
import { Link } from './Link';

import { EducationData } from '../data/Education';

const { Title, Text } = Typography;

export const Space = (props) => (
    <div style={{paddingLeft: props.leftPadding, paddingRight: props.rightPadding}}/>
);

export class Home extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { windowWidth: 0, windowHeight: 0 };
    }

    componentDidMount() {
        this.getWindowDimensions();
        window.addEventListener('resize', this.getWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowDimensions);
    }

    getWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    render () {
    return (
        <div>
            <Banner></Banner>
            {(this.state.windowWidth > 800) ?
            (<Row type='flex' justify='center' style={{width: '100%'}}>
                <Col className='top-title' style={{ width: '95%', maxWidth: '800px', paddingBottom: '100px'}}>
                    <div className='flex flex-wrap'>
                        <Text strong style={{lineHeight: '2em'}}>
                            I am studying Computer Science at the
                        </Text>
                        <Space leftPadding='2px' rightPadding='2px'/>
                        <RoundButton href={Links.uta} text='University of Texas at Arlington' image={utaIcon} minWidth='800'/>
                        <Space leftPadding='2px' rightPadding='2px'/>
                        <Text strong style={{lineHeight: '2em'}}>
                            where I work as an Undergraduate Research Assistant at the 
                        </Text>
                        <Space leftPadding='2px' rightPadding='2px'/>
                        <RoundButton href={Links.heracleia} text='Heracleia Lab.' image={heracleiaIcon} minWidth='800'/>
                        <Space leftPadding='2px' rightPadding='2px'/>
                        <Text strong style={{lineHeight: '2em'}}>
                            I enjoy attending Hackathons and working on projects in my free time. 
                        </Text>
                        <Space leftPadding='2px' rightPadding='2px'/>
                        <Text strong style={{lineHeight: '2em'}}>
                            Feel free to 
                        </Text>
                        <RoundButton href={Links.uta} text='look around' icon={'menu'} minWidth='800'/>
                    </div>
                </Col>
            </Row>)
            :
            (
                <Row type='flex' justify='center' style={{width: '100%'}}>
                    <Col className='top-title' style={{ width: '95%', maxWidth: '800px', paddingBottom: '100px'}}>
                        <Text strong>
                            {`I am studying Computer Science at the `} <Link href={Links.uta} content={'University of Texas at Arlington'}/>
                            {` where I work as an Undergraduate Research Assistant at the `}
                            <Link href={Links.heracleia} content={'Heracleia Lab.'}/> 
                            {` I enjoy attending Hackathons and working on projects in my free time.`}
                            {` Feel free to look around my site.`}
                        </Text>
                    </Col>
                </Row>
            )}
        </div>
        );
    }
}

