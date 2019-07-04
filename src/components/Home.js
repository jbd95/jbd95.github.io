import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Layout, Button, Tooltip} from 'antd';

export class Home extends React.Component {

    render () {
    return (
        <div className='center-screen'>
            <div className='bold-font large-font default-font secondary-color'>
            James Brady
            </div>

            <div className='flex'>
                <Tooltip placement='bottom' title='Github'>
                    <a style={{position: 'relative', left: '0%'}} className='horizontal-padding-small' href= {"https://github.com/jbd95"} rel='noopener noreferrer' target="_blank">
                        <Button shape="circle" icon="github" style={{backgroundColor: '#76323F', color: 'white'}}/>
                    </a>
                </Tooltip>
                <Tooltip placement='bottom' title='LinkedIn'>
                <a style={{position: 'relative', left: '0%'}} className='horizontal-padding-small' href= {"https://www.linkedin.com/in/james-brady-aa67a2151/"} rel='noopener noreferrer' target="_blank">
                    <Button shape="circle" icon="linkedin" style={{backgroundColor: '#76323F', color: 'white'}}/>
                </a>
                </Tooltip>
                <Tooltip placement='bottom' title='Devpost'>
                    <a style={{position: 'relative', left: '0%'}} className='horizontal-padding-small' href= {"https://devpost.com/jbd95"} rel='noopener noreferrer' target="_blank">
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