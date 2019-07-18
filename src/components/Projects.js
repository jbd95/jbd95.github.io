import React from 'react';
import "antd/dist/antd.css"
import { Collapse, Button, Tooltip, Icon, Col, Select, Typography, Row, Empty } from 'antd';
import '../App.css';

import { ProjectData, ProjectTags } from '../data/Projects';

const { Panel } = Collapse;
const { Option } = Select;
const { Title } = Typography;


export class Projects extends React.Component {

    state = { filteredProjects: []}

    constructor(props)
    {
        super(props);
        this.state = {
             filteredProjects: ProjectData.slice()
        }
    }

    searchProjects = (filter) => {
        filter = filter.toLowerCase();

        let filteredProjects = ProjectData.filter((project) => {
            return (filter.length === 0 || JSON.stringify(project).toLowerCase().toString().search(filter) !== -1);
        })

        filteredProjects = (filteredProjects.length === 0)? [null] : filteredProjects;

        this.setState({
            filteredProjects
        });
    }

    filterProjects = (filters) => {
         let filteredProjects = ProjectData.filter((project) => {
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
                    <Filter onChange={this.filterProjects} onSearch={this.searchProjects} placeholder='Filter Projects' allTags={ProjectTags} mode='tags'/>

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
                    <Button shape='circle' size='small' icon="github" className='white-background primary-color padding-left-small' onClick={event => {event.stopPropagation();}}/>
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
                <a href={devpostLink} target="_blank" rel='noopener noreferrer' className='padding-right-small padding-left-small'>
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
                    <Button shape='circle' size='small' icon="youtube" className='white-background primary-color padding-left-small' onClick={event => {event.stopPropagation();}}/>
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
        <div className='flex-left default-font extra-small-font vertical-margin'>
            {description}
        </div>
        <div className='flex-left default-font extra-small-font'>
            <Icon type='fire' className='padding-right primary-color'/>
                {award}
        </div>
        <div className='flex-left default-font extra-small-font vertical-margin'>
            <Icon type='environment' className='padding-right primary-color'/>
                <a style={{textDecoration: 'none', color: 'inherit'}} href={placelink} target='_blank' rel='noopener noreferrer'>
                    {place}
                </a>
        </div>
        <div className='flex-left default-font extra-small-font vertical-margin'>
            <Icon type='calendar' className='padding-right primary-color'/>
            {date}
        </div>
        <div className='flex-left default-font extra-small-font vertical-margin'>
            <Icon type='code' className='padding-right primary-color'/>
            {stack}
        </div>
        <div className='flex-left flex-wrap default-font extra-small-font vertical-margin'>
            <Icon type='team' className='padding-right primary-color' />
            {team.map(({name, link}, i) => (
                <Button key={`team-${i}`} shape='round' target='_blank' href={link} rel='noopener noreferrer' className='horizontal-margin' size='small'>
                    {`${name}`}
                </Button>
            ))}
        </div>
    </div>
);

export const Filter = ({onChange, onSearch, placeholder, allTags, mode}) => (
    <Row type='flex' justify='center'>
        <Select mode={mode} placeholder={placeholder} onChange={onChange} onSearch={onSearch} style={{width: '50%'}}>
            {allTags.map((tag, i) => <Option key={`${tag}`}>{tag}</Option>)}
        </Select>
        <Button type='primary' icon='search'/>
    </Row>
);