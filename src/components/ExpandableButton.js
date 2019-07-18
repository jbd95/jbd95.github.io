import React from 'react';
import { Button } from 'antd';

export class ExpandableButton extends React.Component {

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