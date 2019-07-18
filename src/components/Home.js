import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Typography, Row} from 'antd';

const { Title } = Typography;

export class Home extends React.Component {

    render () {
    return (
        <Row type='flex' justify='center' className='top-title'>
            <div>
                <Title level={1} className='secondary-color' style={{color: 'var(--secondary-color)'}}>
                    James Brady
                </Title>

                <div className='flex'>
                    <ExpandableButton icon='github' text='Github' href='https://github.com/jbd95'/>
                    <ExpandableButton icon='linkedin' text='LinkedIn' href='https://www.linkedin.com/in/james-brady-aa67a2151/'/>
                    <ExpandableButton text='evpost' extra='D' href='https://devpost.com/jbd95'/>
                </div>
            </div>
        </Row>
        );
    }
}

{/*<a style={{position: 'relative', left: '0%'}} className='horizontal-padding-small' href= {"https://www.linkedin.com/in/james-brady-aa67a2151/"} rel='noopener noreferrer' target="_blank">*/}

class ExpandableButton extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            hidden: true
        };
    }

    enter = (event) => {
        this.setState({
            hidden: false
        });
        console.log(this.state.hidden);
    }

    exit = (event) => {
        this.setState({
            hidden: true
        });
        console.log(this.state.hidden);
    }

    render() {
        if(!this.props.icon)
            return (<Button shape={(this.state.hidden) ? 'circle' : 'round'} size='large' className='primary-color horizontal-margin' onPointerEnter={this.enter} onPointerLeave={this.exit} href={this.props.href} rel='noopener noreferrer' target="_blank">
                            {this.props.extra}
                            {(this.state.hidden) ? null : this.props.text}
                    </Button>)
        return (<Button icon={this.props.icon} shape={(this.state.hidden) ? 'circle' : 'round'} size='large' className='primary-color horizontal-margin' onPointerEnter={this.enter} onPointerLeave={this.exit} href={this.props.href} rel='noopener noreferrer' target="_blank">
                    {(this.state.hidden) ? `` : this.props.text}
                </Button>)
    }
}