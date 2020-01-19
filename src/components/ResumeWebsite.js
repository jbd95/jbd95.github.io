import React from 'react';
import '../App.css';
import { Layout, Typography, Col, Row, Icon, Modal, Card } from 'antd';
import { EducationPopup } from './Education';
import { WorkPopup } from './Work';
import { ProjectPopup } from './Projects';
import { Link } from './Link';
import { Email } from './Email';
const { Content } = Layout;

const { Text, Title } = Typography;

export class ResumeWebsite extends React.Component {
  
  state = {
    modalVisible: false,
    modalElement: null,
    modalTitle: "",
  }

  showPopup = (element) => {
    if(element)
    {
      this.setState({
        modalVisible: true,
        modalElement: element
      })
    }
  }

  hidePopup = async () => {
    await this.setState({
      modalVisible: false,
      modalElement: null
    })
  }

  render() {
    return (
      <Layout className='layout'>
        <Content className='fill-screen resume-color'>
          <Modal title={this.state.modalTitle}
                 style={{top: '20px'}}
                 bodyStyle={{width: '100%'}}
                 visible={this.state.modalVisible}
                 onOk={this.hidePopup}
                 onCancel={this.hidePopup}
                 footer={null}>
            {this.state.modalElement}
          </Modal>
          <Row align='top' justify='center' type='flex' style={{width: '100%', paddingTop: '16px'}}>
            <Row align='top' justify='center' type='flex' style={{maxWidth: '8.5in', width: '90%'}}>
            <Title level={1} style={{margin: '0 0 10px 0'}}> {this.props.name} </Title>
              <Col style={{width: '100%'}}>
                <Row align='top' justify='center' type='flex'>
                  <Email style={{margin: '0 16px 0 0'}} hash='e]m\_t4004;bh\dg)^jh' callback={this.showPopup}></Email>
                  {this.props.links ? this.props.links.map(({href, text, icon}, i) => (
                      <div key={i} style={{paddingRight: '16px'}}>
                        <Link href={href} content={(
                          <Row>
                            <Icon type={icon}/>
                            <Text> {text} </Text>
                          </Row>
                        )}/>
                      </div>
                  )) : null}
                </Row>
              </Col>
              <Row align='top' justify='center' type='flex' style={{width: '100%'}}>
                <Col style={{width: '100%', margin: '0 0 0 0'}}>
                  <ResumeHeading title='Education'/>
                  <ResumeEntry company='The University of Texas at Arlington' title={`Bachelor's of Science in Computer Science`}
                    popupCallback={() => this.showPopup(<EducationPopup name='uta'/>)} date='Fall 2017 - Spring 2021'
                    bullets={
                      [
                        'GPA: 4.0',
                        `Awards: Nokia Outstanding Professional CS Student 2019; Dean's List 2018-2019`,
                        `Relevant Coursework: Algorithms and Data Structures, Operating Systems, Object Oriented Programming, 
                         Software Engineering, Databases, Computer Organization, Linear Algebra`
                      ]
                    }/>
                  <ResumeHeading title='Work Experience'/>
                  <ResumeEntry company='Yelp' title={`Incoming Software Engineering Intern`}
                    popupCallback={() => this.showPopup(null)} date='Summer 2020'
                    bullets={
                      [
                      ]
                    }/>
                  <ResumeEntry company='The University of Texas at Arlington' title={`Undergraduate Research Assistant`}
                    popupCallback={() => this.showPopup(<WorkPopup name='uta'/>)} date='Nov. 2017 - Present'
                    bullets={
                      [
                        'Contribute to numerous projects involving Human-Computer Interaction Research',
                        'Gave 20 minute presentation at CASE 2019 Conference in Vancouver, Canada',
                        'Presented Poster at PETRA 2019 Conference in Rhodes, Greece'
                      ]
                    }/>
                  <ResumeHeading title='Publications'/>
                  <ResumeEntry company='' title={``}
                    popupCallback={() => this.showPopup(<WorkPopup name='uta'/>)} date=''
                    bullets={
                      [
                        `Towards a robot-based multimodal framework to assess the impact of fatigue on user behavior and performance:
                         a pilot study - PETRA 2019 Conference Proceedings`,
                        `A Review of Wearable Heart Rate Sensors in Research - PETRA 2019 Conference Proceedings`,
                        `Multimodal approach for cognitive task performance prediction from body postures, facial expressions and
                        EEG signal - MCPMD 2018 Workshop`
                      ]
                    }/>
                  <ResumeHeading title='Projects'/>
                  <ResumeEntry company='Edunate' title={`First Place Winner and Best Use of Snapkit`}
                    popupCallback={() => this.showPopup(<ProjectPopup name='edunate'/>)} date='MLH HackHouston 2019'
                    bullets={
                      [
                        `Edunate is a platform that helps students to succeed in college through micro-donations, peer tutoring, and
                         textbook exchange`,
                        `Developed back end with Node.js, Express, Google Cloud Firestore, and Stripe on an AWS Lightsail server`
                      ]
                    }/>
                  <ResumeEntry company='MemeRoyale' title={`First Place Winner and Best Mobile Project`}
                    popupCallback={() => this.showPopup(<ProjectPopup name='meme'/>)} date='HackSMU 2019'
                    bullets={
                      [
                        `MemeRoyale is a friendly-competition based game (Android and iOS) that allows you to compete with others
                        to see who can create the best meme`,
                        `Developed the back end in Node.js with Socket.IO, Express, and MongoDB on an AWS Lightsail server`
                      ]
                    }/>
                  <ResumeEntry company='Road Rage Unlimited' title={`First Place Project`}
                    popupCallback={() => this.showPopup(<ProjectPopup name='road'/>)} date='Software Engineering Course'
                    bullets={
                      [
                        `Road Rage Unlmited is a 3D driving game set on an infinite terrain that allows the user to compete against AI
                         players in singleplayer mode or against other players in multiplayer mode`,
                        `Developed in Unity3D using C#, models made in Blender, Google Play Games Services used to implement
                         login, achievements and multiplayer`
                      ]
                    }/>
                  <ResumeHeading title='Skills'/>
                  <ResumeEntry company='' title={``}
                    popupCallback={() => this.showPopup(null)} date=''
                    bullets={
                      [
                        `C++, C, C#, Unity3D, Python, Blender, Linux, SQL`
                      ]
                    }/>
                  <ResumeHeading title='Organizations'/>
                  <ResumeEntry company='Leadership Honors Program' title={`Member`}
                    popupCallback={() => this.showPopup(<EducationPopup name='uta'/>)} date='2017 - Present'
                    bullets={
                      [
                      ]
                    }/>
                  <ResumeEntry company='Kalpana Chawla Hall Council' title={`President`}
                    popupCallback={() => this.showPopup(<EducationPopup name='uta'/>)} date='2018 - 2019'
                    bullets={
                      [
                      ]
                    }/>
                </Col>
              </Row>
            </Row>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const ResumeHeading = (props) => (
  <Title level={3} style={{margin: '4px'}}> {props.title} </Title>
)


class ResumeEntry extends React.Component {

    render() {
      return (
        <div>
          <Card hoverable bordered={false} onClick={this.props.popupCallback} size='small'>
            <Row align='middle' justify='space-between' type='flex'>
            <Text style={{fontSize: '1.5rem'}}>
                {this.props.company}
            </Text>
            <Text>
                {this.props.date}
            </Text>
            </Row>
            <div/>
            <Text className='small-font'>
                {this.props.title}
            </Text>
            <ul>
              {this.props.bullets.map((point, i) => (
                <li key={i}>
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )
  }
}