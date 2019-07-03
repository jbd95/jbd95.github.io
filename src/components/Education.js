import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Layout, Collapse, Row, Icon, Tag, Col, Card } from 'antd';
import { MainMenu } from './Menu'
import Column from 'antd/lib/table/Column';
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;


export class Education extends React.Component {
    
    utaIcons = {
        logos: [
            {
                link: 'https://cse.uta.edu',
                image: 'CSE'
            },
            {
                link: 'https://uta.edu/',
                image: 'UTA'
            },
        ]
    };

    renderIcons = ({logos}) => (
        <div>
            {logos.map(({link, image}, i) => (
                <Button size='small' key={`icon-${i}`} href={link} target='_blank' rel='noopener noreferrer'>
                    {image}
                </Button>
            ))}
        </div>
    );

    render() {
        return (
            <Row className='background-color' type='flex' justify='center' style={{flexShrink: '0', paddingTop: '5%'}}>
                <Col className='background-color' style={{maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px'}} >
                    <Entry 
                        title={`Bachelor's of Science in Computer Science`}
                        description='Education Description'
                        place='The University of Texas at Arlington'
                        placelink='https://www.uta.edu/uta/'
                        extra={this.renderIcons(this.utaIcons)} />
                </Col>
            </Row>
        );
    };
};

const Entry = (props) => (
    <Collapse expandIconPosition={'right'} accordion style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
        <Panel header={props.title} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}} extra={props.extra}>
            <EntryDescription 
                place={props.place} 
                placelink={props.placelink} 
                gpa='4.0 GPA' 
                time='Spring 2017 - Present' 
                classification='Junior'
                awards={
                    [{
                        name: `Nokia Outstanding Professional CS Student`,
                        date: `2019`,
                        link: 'https://cse.uta.edu/future-students/scholarships.php'
                    },
                    {
                        name: `Dean's List`,
                        date: `2018-2019`,
                        link: 'https://www.uta.edu/engineering/current-students/deans-list/index.php'
                    }]
                }
                organizations={
                    [{
                        name: 'Kalpana Chawla Hall Council',
                        date: '2018-2019',
                        position: 'President',
                        description: `Hall Council serves as  representative body for students 
                        to provide input for the running of their residence hall, to organize 
                        and implement activities for the hall, and to provide for the needs 
                        of residents`,  
                    },
                    {
                        name: 'Honors College',
                        date: '2017-Present',
                        position: 'Member',
                        description: `The Honors College is a diverse community of student
                        scholars from all majors who are dedicated to academics, research
                        and service.`,  
                    },
                    {
                        name: 'Leadership Honors Program',
                        date: '2017-Present',
                        position: 'Member',
                        description: `The Leadership Honors Program is a multi-year, flexible 
                        leadership development program that emphasizes and facilitates on-campus 
                        involvement and leadership growth. The program ensures that students have 
                        a comprehensive leadership experience that prepares them to be ethical, 
                        global-minded leaders`,  
                    },
                    {
                        name: 'Kalpana Chawla Hall Council',
                        date: '2017-2018',
                        position: '3rd Floor Representative',
                        description: `Hall Council serves as  representative body for students 
                        to provide input for the running of their residence hall, to organize 
                        and implement activities for the hall, and to provide for the needs 
                        of residents`,  
                    },
                    {
                        name: 'Freshman Leaders on Campus',
                        date: '2017-2018',
                        position: 'Member',
                        description: `Freshman Leaders on Campus is a leadership organization made of 
                        exclusively incoming freshman. FLOC strives to promote freshman involvement, 
                        community service, and campus pride. FLOC also prepares freshman for Student 
                        Governance and other leadership roles at the University of Texas at Arlington`,  
                    }]   
                }
                courses = {
                [{
                    name: 'Algorithms and Data Structures',
                    number: 'CSE 2320',
                    description: 'NULL',
                    link: ''
                },
                ]   
                }/>
        </Panel>
    </Collapse>
);

const EntryDescription = ({ gpa, place, placelink, time, classification, awards, organizations, courses }) => (
    <div>
        <div className='flex-left default-font'>
            <Icon type='environment' className='padding-right primary-color'/>
            <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={placelink} rel='noopener noreferrer' target='_blank'>
                {place}
            </a>
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
        <div className='default-font extra-small-font'>
            <Collapse expandIconPosition={'right'} accordion bordered={false} style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
                <Panel header={'Awards'} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                        {awards.map(({name, date, link}, i) => (
                            <Button key={`award-${i}`} shape='round' target='_blank' href={link} rel='noopener noreferrer' size='small'>
                                {`${name} - ${date}`}
                            </Button>
                        ))}
                </Panel>
            </Collapse>
        </div>
        <div className='default-font extra-small-font'>
            <Collapse expandIconPosition={'right'} accordion bordered={false} style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
                <Panel header={'Organizations'} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                        {organizations.map(({name, date, description, position}, i) => (
                            <Card title={name} key={`org-${i}`} className='default-font extra-small-font'>
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
            </Collapse>
        <div className='default-font extra-small-font'>
            <Collapse expandIconPosition={'right'} accordion bordered={false} style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
                <Panel header={'Courses Completed'} key='1' className='default-font extra-small-font' style={{maxWidth: '600px'}}>
                    {courses.map(({name, number, description}, i) => (
                        <Card title={name} key={`course-${i}`} className='default-font extra-small-font'>
                            {description}
                            <div className='flex-left default-font extra-small-font'>
                                <Icon type='tag' className='padding-right primary-color'/>
                                {number}
                            </div>
                        </Card>
                    ))}
                </Panel>
            </Collapse>
        </div>
        </div>

        {/*organizations and classwork and awards maybe scholarships*/}
    </div>
);
