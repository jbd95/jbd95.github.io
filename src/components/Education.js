import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Collapse, Row, Icon, Typography, Col, Card, Input, Empty, Tooltip } from 'antd';

import { EducationData } from '../data/Education'
import { FadeAnimation, QueueAnimation } from './Animations';

const { Panel } = Collapse;
const { Title } = Typography;

class Education extends React.Component {
    
    renderIcons = ({link, image, tooltip}) => (
        <Row type='flex'>
            <Tooltip title={tooltip} placement='top' className='hidden-small'>
                <Button size='small' shape='circle' href={link} target='_blank' 
                    rel='noopener noreferrer' onClick={event => event.stopPropagation()} className='horizontal-padding'>
                    {image}
                </Button>
            </Tooltip>
        </Row>
    );

    render() {
        return (
            <FadeAnimation children={
            <Row className='background-color' type='flex' justify='center' className='top-title' style={{flexShrink: '0'}}>
                <Col className='background-color' style={{maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px'}} >
                <Title style={{color: 'var(--secondary-color)', textAlign: 'center', marginTop: '8px'}}>Education</Title>

                

                {EducationData.map((current, i) => (
                    <Entry {...current} extra={this.renderIcons(current.icon)} key={`education-${i}`}/>
                ))}
                </Col>
            </Row>}/>
        );
    };
};

const Entry = (props) => (
    <Collapse expandIconPosition={'right'} defaultActiveKey={['1']} accordion style={{width: '100%', maxWidth: '600px', marginTop: '16px'}} className='default-font extra-small-font'>   
        <Panel header={props.title} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}} extra={props.extra}>
            <EntryDescription {...props} />
        </Panel>
    </Collapse>
);

export class EntryDescription extends React.Component { 

    constructor(props)
    {
        super(props);
        this.state = {
            filteredCourses: this.props.courses.slice()
        }
    }

    filterCourses = (filter) => {
        filter = filter.currentTarget.value.toLowerCase();

        let filteredCourses = this.props.courses.filter((course) => {
           return filter.length === 0 ||
           JSON.stringify(course).toString().toLowerCase().search(filter) !== -1;
       });
    
       filteredCourses = (filteredCourses.length === 0)? [null] : filteredCourses;
    
       this.setState({
           filteredCourses
        });
    }

    render() {
        const { filteredCourses } = this.state;
        return (
            <div>
                <div className='flex-left default-font extra-small-font'>
                    <Icon type='environment' className='padding-right primary-color'/>
                    <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={this.props.placelink} rel='noopener noreferrer' target='_blank'>
                        {this.props.place}
                    </a>
                </div>
                <div className='flex-left default-font extra-small-font'>
                    <Icon type='read' className='padding-right primary-color'/>
                    {this.props.gpa}
                </div>
                <div className='flex-left default-font extra-small-font'>
                    <Icon type='calendar' className='padding-right primary-color'/>
                    {this.props.time}
                </div>
                <div className='flex-left default-font extra-small-font'>
                    <Icon type='idcard' className='padding-right primary-color'/>
                    {this.props.classification}
                </div>
                <div className='default-font extra-small-font'>
                    <Collapse expandIconPosition={'right'} bordered={false} style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
                        <Panel header={'Awards'} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                                {this.props.awards.map(({name, date, link}, i) => (
                                    <div className='flex-left default-font extra-small-font;' key={`award-${i}`}>
                                        <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'>
                                            <Icon type='link' className='padding-right primary-color'/>
                                            {`${name} ${date}`}
                                        </a>
                                    </div>
                                ))}
                        </Panel>
                        <Panel header={'Organizations'} key='2' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                                {this.props.organizations.map(({name, date, description, position}, i) => (
                                    <Card title={name} key={`org-${i}`} hoverable className='default-font extra-small-font'>
                                        {description}
                                        <div className='flex-left default-font extra-small-font'>
                                            <Icon type='user' className='padding-right primary-color'/>
                                            {position}
                                        </div>
                                        <div className='flex-left default-font extra-small-font'>
                                            <Icon type='calendar' className='padding-right primary-color'/>
                                            {date}
                                        </div>
                                    </Card>
                                ))}
                        </Panel>
                        <Panel header={'Completed Major-Related Courses'} key='3' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                            <Filter onChange={this.filterCourses} placeholder='Search Courses'/>
                            
                            <QueueAnimation children={filteredCourses.map((course, i) => (
                                (course)? 
                                <Card title={course.name} key={`course-${i}`} hoverable className='default-font extra-small-font' 
                                extra={<Button href={course.parentlink + encodeURI((`${course.number}. ${course.name}`).replace(' ', '+'))} 
                                target='_blank' shape='circle' size='small' rel='noopener noreferrer' icon='link'/>}>
                                    {course.description}
                                    <div className='flex-left default-font extra-small-font'>
                                        <Icon type='tag' className='padding-right primary-color'/>
                                        {course.number}
                                    </div>
                                    <div className='flex-left default-font extra-small-font'>
                                        <Icon type='hourglass' className='padding-right primary-color'/>
                                            {(course.hours > 1)? `${course.hours} Hours` : `${course.hours} Hour`}
                                    </div>
                                </Card>
                            :
                                <Empty style={{paddingTop: '16px'}}/>
                            ))}/>
                        </Panel>
                    </Collapse>
                </div>
            </div>             
        )
    }
};

export const EducationShort = (props) => (
    <div className='flex-left default-font extra-small-font'>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='read' className='padding-right primary-color'/>
            {props.gpa}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='calendar' className='padding-right primary-color'/>
            {props.time}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='idcard' className='padding-right primary-color'/>
            {props.classification}
        </div>
    </div>
);


export const Filter = ({onChange, placeholder}) => (
    <Row type='flex' justify='center' style={{paddingBottom: '8px'}}>
        <Input placeholder={placeholder} onChange={onChange} style={{ minWidth: '50%', width: '50%', maxWidth: '60%'}} allowClear/>
        <Button type='primary' icon='search'/>
    </Row>
);

export default Education;