import React from 'react'
import '../App.css';
import { Layout, Typography, Col, Row, Icon, Modal, Card } from 'antd';
import { EducationList, EducationPopup } from './Education';
import { ListWork } from './Work';
import { ListProjects } from './Projects';
import { Link } from './Link';
import { Email } from './Email';
const { Title, Text } = Typography;
const { Content } = Layout;

export class ListWebsite extends React.Component {

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
                      <ResumeHeading title='Summary'/>
                      <ResumeEntry company='' title={``}
                        popupCallback={() => this.showPopup(null)} date=''
                        bullets={
                        [
                            `Incoming Software Engineer Intern at Yelp - Summer 2020`,
                            `Undergraduate Research Assistant co-authored two academic publications`,
                            `Won first place at HackSMU 2019 and HackHouston 2019`,
                            `Studying Computer Science with expected graduation of Spring 2021`
                        ]
                        }/>
                        <ResumeHeading title='Skills'/>
                    <ResumeEntry company='' title={``}
                        popupCallback={() => this.showPopup(null)} date=''
                        bullets={
                        [
                            `Languages: C#, C++, C, Python, JavaScript, Java, SQL`,
                            `Frameworks: Unity3D, Express.js`,
                            `Tools and Platforms: Amazon Web Services (Lightsail, EC2), Blender`,
                            `Databases: MySQL, Google Firestore, MongoDB, mLab`
                        ]
                        }/>
                      <ResumeHeading title='Work Experience'/>
                        <ListWork/>
                      <ResumeHeading title='Projects'/>
                        <ListProjects/>
                      <ResumeHeading title='Education'/>
                        <EducationList/>
                      </Col>
                    </Row>
                  </Row>
                </Row>
            </Content>
        </Layout>
        )
    }
}

const ResumeHeading = (props) => (
    <Title level={3} style={{margin: '4px', paddingTop: '32px'}}> {props.title} </Title>
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