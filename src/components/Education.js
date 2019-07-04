import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Layout, Collapse, Row, Icon, Typography, Col, Card, Input, Empty } from 'antd';
import utaIcon from '../images/uta-mavs-icon.png';
import cseIcon from '../images/uta-cse-icon-crop.png';
import { MainMenu } from './Menu'
import Column from 'antd/lib/table/Column';
import { strict } from 'assert';
import Search from 'antd/lib/input/Search';
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const { Title, Text } = Typography;

export class Education extends React.Component {
    
    utaIcons = {
        logos: [
            {
                link: 'https://uta.edu/',
                image: <img src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>
            },
        ]
    }; 

    renderIcons = ({logos}) => (
        <div>
            {logos.map(({link, image}, i) => (
                <Button size='small' shape='circle' key={`icon-${i}`} href={link} target='_blank' rel='noopener noreferrer' onClick={event => event.stopPropagation()}>
                    {image}
                </Button>
            ))}
        </div>
    );

    render() {
        return (
            <Row className='background-color' type='flex' justify='center' style={{flexShrink: '0', paddingTop: '5%'}}>
                <Col className='background-color' style={{maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px'}} >
                <Title style={{color: 'var(--secondary-color)', textAlign: 'center', marginTop: '8px'}}>Education</Title>
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

const catalogURL = `https://catalog.uta.edu/search/?P=`;

const Entry = (props) => (
    <Collapse expandIconPosition={'right'} defaultActiveKey={['1']} accordion style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
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
                    name: 'Algorithms & Data Structures',
                    number: 'CSE 2320',
                    hours: '3',
                    description: `Design and analysis of algorithms 
                    with an emphasis on data structures. Approaches 
                    to analyzing lower bounds on problems and upper 
                    bounds on algorithms. Classical algorithm design 
                    techniques including algorithms for sorting, searching, 
                    and other operations on data structures such as hash 
                    tables, trees, graphs, strings, and advanced data 
                    structures, dynamic programming and greedy approaches.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Fundamentals of Software Engineering',
                    number: 'CSE 3310',
                    hours: '3',
                    description: `Software engineering principles, 
                    processes, and techniques; software development 
                    approaches focusing on functional analysis and 
                    functional design methods. Configuration management, 
                    implementation strategies, and testing.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Database Systems and File Structures',
                    number: 'CSE 3330',
                    hours: '3',
                    description: `Database system architecture; 
                    file structures for databases, including 
                    indexing hashing, and B+-trees; the relational 
                    model and algebra; the SQL database language; 
                    Entity-Relationship data modeling; functional 
                    dependencies and basic normalization.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Object-Oriented Programming',
                    number: 'CSE 1325',
                    hours: '3',
                    description: `Object-oriented concepts, class diagrams, 
                    collection classes, generics, polymorphism, and reusability. 
                    Projects involve extensive programming and include graphical 
                    user interfaces and multithreading.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Linear Algebra for CSE',
                    number: 'CSE 3330',
                    hours: '3',
                    description: `Solving systems of equations, 
                    matrix algebra, determinants, vector spaces, 
                    orthogonality and least squares, with applications 
                    to computer science.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Engineering Probability',
                    number: 'IE 3301',
                    hours: '3',
                    description: `Topics in engineering that 
                    involve random processes. Applications 
                    and backgrounds for topics in reliability, 
                    inventory systems, and queuing problems, 
                    including absolute and conditional probabilities, 
                    discrete and continuous random variables, parameter 
                    estimation, hypothesis testing, and an introduction 
                    to linear regression, experimental design, and 
                    analysis of variance.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Intermediate Programming',
                    number: 'CSE 1320',
                    hours: '3',
                    description: `Programming concepts beyond basic 
                    control and data structures. Emphasis is given 
                    to data structures including linked-lists and 
                    trees as well as modular design consistent with 
                    software engineering principles.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Computer Organization & Assembly Language Programming',
                    number: 'CSE 2312',
                    hours: '3',
                    description: `Computer organization from the viewpoint of software, 
                    including: the memory hierarchy, instruction set architectures, 
                    memory addressing, input-output, integer and floating-point 
                    representation and arithmetic. The relationship of higher-level 
                    programming languages to the operating system and to instruction 
                    set architecture are explored. Some programming in an assembly language.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Discrete Structures',
                    number: 'CSE 2315',
                    hours: '3',
                    description: `Propositional and predicate logic, mathematical 
                    proof techniques, sets, combinatorics, functions and relations, 
                    graphs, and graph algorithms.`,
                    parentlink: catalogURL
                },
                {
                    name: 'Practical Computer Hardware/Software Systems',
                    number: 'CSE 2100',
                    hours: '1',
                    description: `A practical approach to hands-on 
                    computer hardware and software systems in a laboratory 
                    environment. Students will be exposed to basic design 
                    concepts using off-the-shelf hardware components and 
                    to tools that enable the design of complex software systems.`,
                    parentlink: catalogURL
                },
                ]   
                }/>
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
        filter = filter.currentTarget.value;
        let filteredCourses = this.props.courses.filter((course) => {
           return filter.length === 0 ||
           JSON.stringify(course).toString().search(filter) !== -1;
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
                <div className='flex-left default-font'>
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
                                    <Button key={`award-${i}`} shape='round' target='_blank' href={link} rel='noopener noreferrer' size='small'>
                                        {`${name} - ${date}`}
                                    </Button>
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
                            {filteredCourses.map((course, i) => (
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
                            ))}
                        </Panel>
                    </Collapse>
                </div>
                 {/*organizations and classwork and awards maybe scholarships*/}
            </div>

               
        )
    }
};


export const Filter = ({onChange, placeholder}) => (
    <Row type='flex' justify='center' style={{paddingBottom: '8px'}}>
        <Input placeholder={placeholder} onChange={onChange} style={{width: '50%'}} allowClear/>
        <Button type='primary' icon='search'/>
    </Row>
);