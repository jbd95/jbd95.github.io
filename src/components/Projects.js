import React from 'react';
import "antd/dist/antd.css"
import { Collapse, Button, Tooltip, Icon, Col, Select, Typography, Row } from 'antd';
import '../App.css';

const { Panel } = Collapse;
const { Option } = Select;
const { Title, Text } = Typography;

export class Projects extends React.Component {

    state = { filteredProjects: []}

    constructor(props)
    {
        super(props);
        this.state.filteredProjects = this.projects.slice()
    }

    projects = [
            {
                title: 'Edunate',
                description: {
                    description: '📚💵👩‍🏫Succeed in College through micro-donations, peer tutoring and textbook exchange.',
                    award: `1st Place out of 19 Projects; Best Use of Snapchat's Snapkit`,
                    place: 'MLH HackHouston 2019 @ TSU',
                    placelink: 'https://hack-houston-2019.devpost.com/',
                    date: 'April 13-14, 2019',
                    stack: 'Backend: NodeJS + Express on AWS Lightsail; Frontend: Javascript + React; Database: GCP Firestore',
                    mate1: 'Robert Brady',
                    mate1link: 'https://github.com/r0bert123/',
                    mate2: 'Imtiaz Khaled',
                    mate2link: 'https://github.com/ImtiazKhaled',
                    mate3: 'Adarsh Pai',
                    mate3link: 'https://github.com/adarsh9pai/' },
                tags: ['Hackathon', 'Github', 'Devpost', 'Demo Video'],
                devpostLink: 'https://devpost.com/software/edunate-l7k3bs'
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
                    mate1: 'Nahian Alam',
                    mate1link: 'https://github.com/nahianalam18',
                    mate2: 'Robert Brady',
                    mate2link: 'https://github.com/r0bert123/',
                    mate3: 'Adarsh Pai',
                    mate3link: 'https://github.com/adarsh9pai/'},
                tags: ['Hackathon', 'Github', 'Devpost'],
                devpostLink: 'https://devpost.com/software/meme-royale-9cdr5q',
                hideVideo: 'true'
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
                    mate1: 'Nahian Alam',
                    mate1link: 'https://github.com/nahianalam18',
                    mate2: 'Jonathan Marek',
                    mate2link: 'https://github.com/jonnyboy1241',
                    mate3: 'Andrew Miller',
                    mate3link: 'https://github.com/TrinityDevelopers'},
                tags: ['School', 'Demo Video'],
                hideDevpost: true,
                hideGithub: true
            }
        ];

    filterProjects = (filter) => {
        console.log('applying filter: ' + filter);
        let filteredProjects = this.projects.filter((project) => {
            let include = true;
            let searchableString = JSON.stringify(project);
            for(let i = 0; i < filter.length && include; i++)
            {                
                include = (project.tags.includes(filter[i]) || searchableString.search(filter[i]) !== -1);
                console.log(project.title + " " + filter[i] + include);
            }
            return include;
        });
        this.setState({
            filteredProjects: filteredProjects
        });
    };

    render() {

        const { filteredProjects } = this.state;
        return (
            <Row className='background-color' type='flex' justify='center' style={{flexShrink: '0', paddingTop: '5%'}}>
                <Col className='background-color' style={{maxWidth: '98vw', alignSelf: 'center', flexBasis: '600px'}} >
                    <Title style={{color: 'var(--secondary-color)', textAlign: 'center', marginTop: '8px'}}>My Projects</Title>
                    <Filter tags={['Hackathon', 'School', 'Github', 'Devpost', 'Demo Video']} style={{width: '50%'}} onChange={this.filterProjects}/>

                    {filteredProjects.map((project) => (
                        <Project 
                            title={project.title}
                            key={project.title}
                            description = {
                                <ProjectDescription
                                    description={project.description.description}
                                    award={project.description.award}
                                    place={project.description.place}
                                    placelink={project.description.placelink}
                                    date={project.description.date}
                                    stack={project.description.stack}
                                    mate1={project.description.mate1}
                                    mate1link={project.description.mate1link}
                                    mate2={project.description.mate2}
                                    mate2link={project.description.mate2link}
                                    mate3={project.description.mate3}
                                    mate3link={project.description.mate3link} />}
                            tags={project.tags}
                            devpostLink={(project.devpostLink)? project.devpostLink : undefined}
                            videoLink={(project.videoLink)? project.videoLink : undefined}
                            hideDevpost={(project.hideDevpost)? project.hideDevpost : false}
                            hideGithub={(project.hideGithub)? project.hideGithub : false}
                            hideVideo={(project.hideVideo)? project.hideVideo : false} />
                    ))}
                </Col>
            </Row>
        )
    }
};

class Project extends React.Component {

    githubLink ='https://github.com/jbd95/';
    
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

    generateGithub = () => (
        (this.props.hideGithub)? 
            <div></div>
            : <Tooltip placement='top' title='Github'>
            <a href={(this.props.githubLink)? this.props.githubLink : this.githubLink + this.props.title} target="_blank">
                <Button shape='circle' size='small' icon="github" className='white-background primary-color padding-left' onClick={event => {event.stopPropagation();}}/>
            </a>
        </Tooltip>
    )

    generateDevpost = () => (
        (this.props.hideDevpost)? 
            <div></div>
            : <Tooltip placement='top' title='Devpost'>
            <a href={this.props.devpostLink} target="_blank" className='padding-right padding-left'>
                <Button shape='circle' size='small' className='white-background' onClick={event => {event.stopPropagation();}}>
                    <div className='bold-font default-font primary-color'> D </div>
                </Button>
            </a>
        </Tooltip>
    );

    generateVideo = () => (
        (this.props.hideVideo)? 
            <div></div>
            : <Tooltip placement='top' title='Video Demo'>
            <a href={this.props.videoLink} target="_blank">
                <Button shape='circle' size='small' icon="youtube" className='white-background primary-color padding-left' onClick={event => {event.stopPropagation();}}/>
            </a>
        </Tooltip>
    )

    render() {
        return (
            <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition={'right'} accordion={true} style={{width: '100%', maxWidth: '600px', marginTop: '16px'}}>   
              <Panel header={this.props.title} key='1' extra={this.generateButtons()} className='default-font small-font' style={{maxWidth: '600px'}}>
                  <div>{this.props.description}</div>
              </Panel>
            </Collapse>
        )
    }
};

class ProjectDescription extends React.Component {

    render() {
        return (
            <div>
                <div className='flex-left default-font extra-small-font'>
                {this.props.description}
                </div>
            <div className='flex-left default-font extra-small-font'>
                <Icon type='fire' className='padding-right primary-color'/>
                    {this.props.award}
            </div>
            <div className='flex-left default-font extra-small-font'>
                <Icon type='environment' className='padding-right primary-color'/>
                    <a style={{textDecoration: 'none', color: 'inherit'}} href={this.props.placelink} target='_blank'>
                        {this.props.place}
                    </a>
            </div>
            <div className='flex-left default-font extra-small-font'>
                <Icon type='calendar' className='padding-right primary-color'/>
                {this.props.date}
            </div>
            <div className='flex-left default-font extra-small-font'>
                <Icon type='code' className='padding-right primary-color'/>
                {this.props.stack}
            </div>
            <div className='flex-left default-font extra-small-font'>
                <p>
                    <Icon type='team' className='padding-right primary-color' />
                    <a style={{textDecoration: 'none', color: 'inherit'}} href={this.props.mate1link} target='_blank'>
                        {this.props.mate1}
                    </a>, {" "}
                    <a style={{textDecoration: 'none', color: 'inherit'}} href={this.props.mate2link} target='_blank'>
                        {this.props.mate2}
                    </a>, {' '}
                    <a style={{textDecoration: 'none', color: 'inherit'}} href={this.props.mate3link} target='_blank'>
                        {this.props.mate3}
                    </a>
                </p>
            </div>
        </div>
        )
    }
};

export class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.options = [];
        for(let i = 0; i < this.props.tags.length; i++)
        {
            this.options.push(
                <Option key={this.props.tags[i]}>{this.props.tags[i]}</Option>
            );
        }
    }

    render() {
        return (
            <Row type='flex' justify='center'>
                <Select mode='tags' placeholder='Filter Projects' onChange={this.props.onChange} style={this.props.style}>
                    {this.options}
                </Select>
                <Button type='primary' icon='search'/>
            </Row>
        )
    }
}
