import React from 'react';
import "antd/dist/antd.css"
import { Collapse, Button, Tooltip, Icon, Col, Select, Typography, Row } from 'antd';
import '../App.css';

const { Panel } = Collapse;
const { Option } = Select;
const { Title, Text } = Typography;

/**
 * I like this data structure but for your devpost, github, and video links why don't you just put those for all of them and put null if they don't have a link
 * that way you can get rid of the 'hide' variables - we can instead check if they are null
 * Also, create an array of mates instead of naming each specific one
 */
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
            mates: [
                {
                    name: 'Imtiaz Khaled',
                    link: 'https://github.com/ImtiazKhaled',
                },
                {
                    name: 'Robert Brady',
                    link: 'https://github.com/r0bert123/',
                },
                {
                    name: 'Adarsh Pai',
                    link: 'https://github.com/adarsh9pai/'
                }
            ]
        },
        tags: ['Hackathon', 'Github', 'Devpost', 'Demo Video'],
        devpostLink: 'https://devpost.com/software/edunate-l7k3bs',
        videoLink: null,
        githubLink: null,
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
            mates: [
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
                }
            ]
        },
        tags: ['Hackathon', 'Github', 'Devpost'],
        devpostLink: 'https://devpost.com/software/meme-royale-9cdr5q',
        videoLink: null,
        githubLink: null,
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
            mates: [
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
        tags: ['School', 'Demo Video'],
        devpostLink: null,
        videoLink: null,
        githubLink: null,
    }
];
const allTags = ['Hackathon', 'School', 'Github', 'Devpost', 'Demo Video'];

export class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredProjects: projects.slice(),
        }
    }

    filterProjects = (filter) => {
        const { projects } = this.state;

        console.log('applying filter: ' + filter);

        // Notice that when we don't use brackets after the lambda we are using an expression instead of a function so we don't need return statements
        const filteredProjects = projects.filter(project =>
            project.tags.includes(filter[i]) || JSON.stringify(project).search(filter[i]) !== -1
        );
        console.log('filtered projects', filteredProjects);

        // If your state name and the variable name are the same then you can only put it once JS will know what to do
        // i.e. this.setState({ filteredProjects: filteredProjects }) => this.setState({ filteredProjects })
        this.setState({ filteredProjects });
    };

    render() {
        const { filteredProjects } = this.state;

        return (
            <Row className='background-color' type='flex' justify='center' style={{ flexShrink: '0', paddingTop: '5%' }}>
                <Col className='background-color' style={{ maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px' }} >
                    <Title style={{ color: 'var(--secondary-color)', textAlign: 'center', marginTop: '8px' }}>
                        My Projects
                    </Title>
                    <Filter onChange={this.filterProjects} />

                    {filteredProjects.map((project, i) => <Project key={`project-${i}`} project={project} />)}
                </Col>
            </Row>
        )
    }
};

class Project extends React.Component {
    callback = (key) => { };

    generateButtons = () => {
        return (
            <div className='flex'>
                {this.generateVideo()}
                {this.generateDevpost()}
                {this.generateGithub()}
            </div>
        )
    };

    /* 
        Check out this github link for security when using target='_blank'
        https://github.com/asciidoctor/asciidoctor/issues/2071
    */

    generateGithub = () => {
        const { githubLink } = this.props.project;

        if (!githubLink)
            return null;

        return (
            <Tooltip placement='top' title='Github'>
                <a href={githubLink} target="_blank">
                    <Button shape='circle' size='small' icon="github" className='white-background primary-color padding-left' onClick={event => { event.stopPropagation(); }} />
                </a>
            </Tooltip>
        );
    }

    generateDevpost = () => {
        const { devpostLink } = this.props.project;

        if (!devpostLink)
            return null;

        return (
            <Tooltip placement='top' title='Devpost'>
                <a href={devpostLink} target="_blank" className='padding-right padding-left'>
                    <Button shape='circle' size='small' className='white-background' onClick={event => { event.stopPropagation(); }}>
                        <div className='bold-font default-font primary-color'> D </div>
                    </Button>
                </a>
            </Tooltip>
        );
    }

    generateVideo = () => {
        const { videoLink } = this.props.project;

        if (!videoLink)
            return null;

        return (
            <Tooltip placement='top' title='Video Demo'>
                <a href={videoLink} target="_blank">
                    <Button shape='circle' size='small' icon="youtube" className='white-background primary-color padding-left' onClick={event => { event.stopPropagation(); }} />
                </a>
            </Tooltip>
        )
    }

    render() {
        const { project } = this.props;

        return (
            <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition='right' accordion style={{ width: '100%', maxWidth: '600px', marginTop: '16px' }}>
                <Panel header={project.title} key='1' extra={this.generateButtons()} className='default-font small-font' style={{ maxWidth: '600px' }}>
                    <ProjectDescription {...project.description} />
                </Panel>
            </Collapse>
        )
    }
};

// When you don't need a state for a component, you can use these type of components
const ProjectDescription = ({ description, award, place, date, stack, placelink, mates }) => (
    <div>
        <div className='flex-left default-font extra-small-font'>
            {description}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='fire' className='padding-right primary-color' />
            {award}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='environment' className='padding-right primary-color' />
            <a style={{ textDecoration: 'none', color: 'inherit' }} href={placelink} target='_blank'>
                {place}
            </a>
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='calendar' className='padding-right primary-color' />
            {date}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='code' className='padding-right primary-color' />
            {stack}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <p>
                <Icon type='team' className='padding-right primary-color' />

                {/* 
                    Check out this github link for security when using target='_blank'
                    https://github.com/asciidoctor/asciidoctor/issues/2071
                */}
                {mates.map(({ name, link }, i) => (
                    <a key={`mate-${i}`} style={{ textDecoration: 'none', color: 'inherit' }} href={link} target='_blank'>
                        {`${name} `}
                    </a>
                ))}
            </p>
        </div>
    </div>
);

const Filter = ({ onChange }) => {
    return (
        <Row type='flex' justify='center'>
            <Select mode='tags' placeholder='Filter Projects' onChange={onChange} style={{ width: '50%' }}>
                {allTags.map((tag, i) => <Option key={`tag-${i}`}>{tag}</Option>)}
            </Select>
            <Button type='primary' icon='search' />
        </Row>
    )
}
