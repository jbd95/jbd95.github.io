import React from 'react';
import { Button } from 'antd';
import TweenOne from 'rc-tween-one';

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

export class ExpandButtonAuto extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            expanded: true
        };
    }

    startExpand = (type) => {
        if(this.state.expanded)
        {
            setTimeout(() => {this.setState({expanded: false});}, 400);
        }
    }

    endExpand = () => {
        this.setState({
            expanded: false
        })
    }

    render() {
        if(!this.props.icon)
        {
            return (<TweenOne animation={{ delay: 300, onStart: this.startExpand, onComplete: this.endExpand }}>
                        <Button shape={(this.state.expanded) ? 'circle' : 'round'} className='horizontal-margin' style={{color: this.props.color}} onPointerEnter={this.enter} onPointerLeave={this.exit} href={this.props.href} rel='noopener noreferrer' target="_blank">
                            {this.props.extra}
                            {(this.state.expanded) ? null : this.props.text}
                        </Button>
                    </TweenOne>)
        }
        return (<TweenOne animation={{ delay: 300, onStart: this.startExpand }}>
                    <Button icon={this.props.icon} shape={(this.state.expanded) ? 'circle' : 'round'} style={{color: this.props.color}} className='horizontal-margin' onPointerEnter={this.enter} onPointerLeave={this.exit} href={this.props.href} rel='noopener noreferrer' target="_blank">
                        {(this.state.expanded) ? `` : this.props.text}
                    </Button>
                </TweenOne>)
    }
}