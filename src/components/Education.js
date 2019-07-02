import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Layout, Collapse, Row, Icon, Tag } from 'antd';
import { MainMenu } from './Menu'
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;


export class Education extends React.Component {
    
    renderIcons = () => (
        <Row>
            <Button type='ghost' onClick={event => {event.stopPropagation(); }}>
                Testing
            </Button>
        </Row>
    );

    render() {
        return (
            <Entry 
                title={`Bachelor's of Science in Computer Science`}
                description='Education Description'
                icons={this.renderIcons()}
                place='The University of Texas at Arlington'
                placelink='https://www.uta.edu/uta/'/>
        );
    };
};

const Entry = (props) => (
    <Collapse defaultActiveKey={'1'} accordion={true} onChange={props.onChange} expandIconPosition={'right'}>
        <Panel header={props.title} extra={props.icons}>
            <EntryDescription place={props.place} placelink={props.placelink} gpa='4.0 GPA' time='Spring 2017 - Present' classification='Junior'/>
        </Panel>
    </Collapse>
);

const EntryDescription = ({ description, gpa, place, placelink, time, classification }) => (
    <div>
        <div className='flex-left default-font'>
                <Icon type='environment' className='padding-right primary-color'/>
                <Tag style={{fontSize: 'inherit'}}>
                    <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={placelink} target='_blank'>
                        {place}
                    </a>
                </Tag>
        </div>
        <div className='flex-left default-font extra-small-font'>
                <Icon type='read' className='padding-right primary-color'/>
                {gpa}
        </div>
        <div className='flex-left default-font extra-small-font'>
                <Icon type='calendar' className='padding-right primary-color'/>
                {time}
        </div>
        <div className='flex-left default-font extra-small-font'>
                <Icon type='idcard' className='padding-right primary-color'/>
                {classification}
        </div>
        {/*organizations and classwork*/}
    </div>
);
