import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Typography, Row} from 'antd';
import { Banner } from './Banner';
import { ExpandableButton } from './ExpandableButton';
import Links from '../data/Links';

const { Title } = Typography;

export class Home extends React.Component {

    render () {
    return (
        <div>
            <Banner></Banner>
            <Row type='flex' justify='center' className='top-title'>
                <div>
                    <Title level={1} className='secondary-color' style={{color: 'var(--secondary-color)'}}>
                        About Me
                    </Title>

                    <div className='flex'>
                        <ExpandableButton icon='github' text='Github' href={Links.github}/>
                        <ExpandableButton icon='linkedin' text='LinkedIn' href={Links.linkedin}/>
                        <ExpandableButton text='evpost' extra='D' href={Links.devpost}/>
                    </div>
                </div>
            </Row>
        </div>
        );
    }
}

{/*<a style={{position: 'relative', left: '0%'}} className='horizontal-padding-small' href= {"https://www.linkedin.com/in/james-brady-aa67a2151/"} rel='noopener noreferrer' target="_blank">*/}