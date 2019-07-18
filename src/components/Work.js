import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Row, Col, Typography } from 'antd';

import { WorkData } from '../data/Work'
import { Display } from './Display'

const { Title } = Typography;

export class Work extends React.Component {

    render () {
    return (
            <div>
                <Row className='background-color' type='flex' justify='center' style={{flexShrink: '0', paddingTop: '5%'}}>
                <Col className='background-color' style={{maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px'}} >
                    <Title style={{color: 'var(--secondary-color)', textAlign: 'center', marginTop: '8px'}}>Work Experience</Title>
                    {WorkData.map((work, i) => (
                        <Display {...work} key={`work-${i}`}/>
                    ))}
                </Col>
            </Row>
            </div>
        );
    }
}

/*const WorkEntry = (props) => (
    <Collapse defaultActiveKey={['1']} expandIconPosition={'right'} accordion style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
    <Panel header={props.position} key='1' className='default-font' style={{maxWidth: '600px'}}>
        <div>
            <div className='flex-left default-font extra-small-font'> {props.description} </div>
            <div className='flex-left default-font extra-small-font'>
                <Icon type='environment' className='padding-right primary-color'/>
                <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={props.link} rel='noopener noreferrer' target='_blank'>
                    {props.location}
                </a>
            </div>
            <div className='flex-left default-font extra-small-font'>
                <Icon type='calendar' className='padding-right primary-color'/>
                {props.time}
            </div>
            {(props.extras) ? props.extras.map((category, i) => (
                <Collapse expandIconPosition={'right'} key={`work-extra-${i}`} bordered={false} style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
                <Panel header={category.title} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                        
                        {(category.type) ? (category.children.map(({icon, text, link}, i) => (
                            <div className='flex-left default-font extra-small-font;' key={`categoy-list-child-${i}`}>
                                <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'>
                                    <Icon type={icon} className='padding-right primary-color'/>
                                    {text}
                                </a>
                            </div>
                        )))
                        : 
                            (category.children.map((current, i) => (
                                <Card title={current.title} key={`category-child-${i}`}>
                                    <div className='flex-left default-font extra-small-font'> {current.description} </div>
                                    <div className='flex-left default-font extra-small-font'>
                                        <Icon type='calendar' className='padding-right primary-color'/>
                                        {current.time}
                                    </div>
                                </Card>)
                        ))}
                </Panel>
                </Collapse>
            ))
                : <div/>}
        </div>
    </Panel>
    </Collapse>
)*/