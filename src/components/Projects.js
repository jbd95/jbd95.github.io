import React from 'react';
import "antd/dist/antd.css"
import { Collapse, Button, Tooltip, Icon, Col, Select, Typography, Row, Empty, Tag } from 'antd';
import '../App.css';

const { Panel } = Collapse;
const { Option } = Select;
const { Title, Text } = Typography;

const projects = [
    {
        title: 'Edunate',
        description: {
            description: '📚💵👩‍🏫Succeed in College through micro-donations, peer tutoring and textbook exchange.',
            award: `1st Place out of 19 Projects; Best Use of Snapchat's Snapkit`,
            place: 'MLH HackHouston 2019 @ TSU',
            placelink: 'https://hack-houston-2019.devpost.com/',
            date: 'April 13-14, 2019',
            stack: 'Backend: NodeJS + Express on AWS Lightsail; Frontend: Javascript + React; Database: GCP Firestore',
            team: [ 
            {
                name: 'Robert Brady',
                link: 'https://github.com/r0bert123/'
            },        
            {
                name: 'Imtiaz Khaled',
                link: 'https://github.com/ImtiazKhaled'
            },
            {
                name: 'Adarsh Pai',
                link: 'https://github.com/adarsh9pai/'
            }]
        },
        tags: ['Hackathon', 'Github', 'Devpost'],
        devpostLink: 'https://devpost.com/software/edunate-l7k3bs',
        videoLink: null,
        githubLink: 'https://github.com/jbd95/edunate'
    },
    {
        title: 'MemeRoyale',
        description: {
            description: 'MemeRoyale: The Battle Royale of Memes',
            award: `1st Place out of 14 Projects; Best Mobile Project`,
            place: 'HackSMU 2019 @ SMU',
            placelink: 'https://hacksmu.devpost.com/',
            date: 'February 2-3, 2019',
            stack: 'Backend: NodeJS + Express + Socket.io on AWS Lightsail; Frontend: Javascript + React Native + Expo; Database: MongoDB, MLab',
            team: [ 
                {
                    name: 'Nahian Alam',
                    link: 'https://github.com/nahianalam18',
                },
                {
                    name: 'Robert Brady',
                    link: 'https://github.com/r0bert123/',
                },        
                {
                    name: 'Adarsh Pai',
                    link: 'https://github.com/adarsh9pai/'
                }]
        },
        tags: ['Hackathon', 'Github', 'Devpost'],
        devpostLink: 'https://devpost.com/software/meme-royale-9cdr5q',
        videoLink: null,
        githubLink: 'https://github.com/jbd95/MemeRoyale'
    },
    {
        title: 'Road Rage Unlimited',
        description: {
            description: '🚗⛽🗻Compete against AI players or your friends in this 3D driving game featuring an infinite terrain. Drive around the map to obtain items that give you an edge over your opponents. Unleash your road rage in order to deal damage to your opponents and win the game.',
            award: `1st Place out of 15 Projects; Best Game`,
            place: 'Fundamentals of Software Engineering Course @ UTA',
            placelink: 'https://catalog.uta.edu/coursedescriptions/cse/',
            date: 'Spring 2019 Semester',
            stack: 'Unity3D, C#, Blender, Gimp',
            team: [
                {
                    name: 'Nahian Alam',
                    link: 'https://github.com/nahianalam18',
                },
                {
                    name: 'Jonathan Marek',
                    link: 'https://github.com/jonnyboy1241',
                },
                {
                    name: 'Andrew Miller',
                    link: 'https://github.com/TrinityDevelopers'
                }
            ]
        },
        tags: ['School'],
        devpostLink: null,
        videoLink: null,
        githubLink: null
    }
];

const allTags = ['Hackathon', 'School', 'Github', 'Devpost', 'Demo Video'];

export class Projects extends React.Component {

    state = { filteredProjects: []}

    constructor(props)
    {
        super(props);
        this.state = {
             filteredProjects: projects.slice()
        }
    }

    filterProjects = (filters) => {
         let filteredProjects = projects.filter((project) => {
            return filters.length === 0 || filters.every(filter => project.tags.findIndex((tag) => filter === tag) !== -1) ||
            filters.every(filter => JSON.stringify(project).toString().search(filter) !== -1);
        });

        filteredProjects = (filteredProjects.length === 0)? [null] : filteredProjects;

        this.setState({
            filteredProjects
        });
    };

    render() {

        const { filteredProjects } = this.state;
        return (
            <Row className='background-color' type='flex' justify='center' style={{flexShrink: '0', paddingTop: '5%'}}>
                <Col className='background-color' style={{maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px'}} >
                    <Title style={{color: 'var(--secondary-color)', textAlign: 'center', marginTop: '8px'}}>My Projects</Title>
                    <Filter onChange={this.filterProjects}/>

                    {filteredProjects.map((project, i) => (
                         (project) ?  <Project key={`project-${i}`} project={project}/> : <Empty style={{paddingTop: '16px'}}/>
                    ))}
                </Col>
            </Row>
        )
    }
};

class Project extends React.Component {

    callback = (key) => {};

    generateButtons = () => {
        return (
            <div className='flex'>
                {this.generateVideo()}
                {this.generateDevpost()}
                {this.generateGithub()}
            </div>
        )
    };

    generateGithub = () => {
        const { githubLink } = this.props.project;

        if(!githubLink)
            return null;

        
        return (
            <Tooltip placement='top' title='Github'>
                <a href={githubLink} target="_blank" rel='noopener noreferrer'>
                    <Button shape='circle' size='small' icon="github" className='white-background primary-color padding-left' onClick={event => {event.stopPropagation();}}/>
                </a>
            </Tooltip>
        )
    }

    generateDevpost = () => {
        const { devpostLink } = this.props.project;

        if(!devpostLink)
            return null;

        return (
            <Tooltip placement='top' title='Devpost'>
                <a href={devpostLink} target="_blank" rel='noopener noreferrer' className='padding-right padding-left'>
                    <Button shape='circle' size='small' className='white-background' onClick={event => {event.stopPropagation();}}>
                        <div className='bold-font default-font primary-color'> D </div>
                    </Button>
                </a>
            </Tooltip>
        )
    };

    generateVideo = () => {
        const { videoLink } = this.props.project;

        if(!videoLink)
            return null;

        return (
            <Tooltip placement='top' title='Demo Video'>
                <a href={videoLink} target="_blank" rel='noopener noreferrer'>
                    <Button shape='circle' size='small' icon="youtube" className='white-background primary-color padding-left' onClick={event => {event.stopPropagation();}}/>
                </a>
            </Tooltip>
        )
    }

    render() {
        const { project} = this.props;

        return (
            <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition={'right'} accordion style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
              <Panel header={project.title} key='1' extra={this.generateButtons()} className='default-font small-font' style={{maxWidth: '600px'}}>
                  <ProjectDescription {...project.description}/>
              </Panel>
            </Collapse>
        )
    }
};

const ProjectDescription = ({description, award, place, placelink, date, stack, team}) => (
    <div>
        <div className='flex-left default-font extra-small-font'>
            {description}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='fire' className='padding-right primary-color'/>
                {award}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='environment' className='padding-right primary-color'/>
                <a style={{textDecoration: 'none', color: 'inherit'}} href={placelink} target='_blank' rel='noopener noreferrer'>
                    {place}
                </a>
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='calendar' className='padding-right primary-color'/>
            {date}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='code' className='padding-right primary-color'/>
            {stack}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='team' className='padding-right primary-color' />
            {team.map(({name, link}, i) => (
                <Tag style={{margin: 0, marginLeft: '2px'}} key={`teammate-${i}`}>
                    <a style={{textDecoration: 'none', color: 'inherit'}} href={link} target='_blank' rel='noopener noreferrer'>
                        {name}
                    </a>
                </Tag>
            ))}
        </div>
    </div>
);

const Filter = ({onChange}) => (
    <Row type='flex' justify='center'>
        <Select mode='tags' placeholder='Filter Projects' onChange={onChange} style={{width: '50%'}}>
            {allTags.map((tag, i) => <Option key={`${tag}`}>{tag}</Option>)}
        </Select>
        <Button type='primary' icon='search'/>
    </Row>
);