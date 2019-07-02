import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { PageHeader, Layout, Button, Input, Steps, Icon, Tooltip, Divider } from 'antd';
import { MainMenu } from './Menu'
const { Header, Content, Footer } = Layout;




export class Work extends React.Component {

    render () {
    return (
        <div className='center-screen'>
            <div className='bold-font large-font default-font secondary-color'>
            James Brady
            </div>

            <div className='flex'>
                <Tooltip placement='bottom' title='Github'>
                    <a style={{position: 'relative', left: '0%'}} className='horizontal-padding' href= {"https://github.com/jbd95"} target="_blank">
                        <Button shape="circle" icon="github" style={{backgroundColor: '#76323F', color: 'white'}}/>
                    </a>
                </Tooltip>
                <Tooltip placement='bottom' title='LinkedIn'>
                <a style={{position: 'relative', left: '0%'}} className='horizontal-padding' href= {"https://www.linkedin.com/in/james-brady-aa67a2151/"} target="_blank">
                    <Button shape="circle" icon="linkedin" style={{backgroundColor: '#76323F', color: 'white'}}/>
                </a>
                </Tooltip>
                <Tooltip placement='bottom' title='Devpost'>
                    <a style={{position: 'relative', left: '0%'}} className='horizontal-padding' href= {"https://devpost.com/jbd95"} target="_blank">
                        <Button shape="circle" style={{backgroundColor: '#76323F'}}>
                        <div className='bold-font default-font white-color'> D </div>
                        </Button>
                    </a>
                </Tooltip>
            </div>
        </div>
        );
    }
}