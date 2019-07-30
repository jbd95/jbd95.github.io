import React from 'react';
import { Button, Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import { Link } from './Link';
import ResizeableComponent from './ResizeableBase';

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
                            {(this.props.extra) ? this.props.extra : null}
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

export class RoundButton extends ResizeableComponent {
    
    render() {
        return (
            (this.state.windowWidth > this.props.minWidth) ? ( 
            (this.props.icon) ? 
                (<Button shape='round' size='small' icon={this.props.icon} style={{paddingBottom: '5px'}} href={this.props.href} rel='noopener noreferrer' target="_blank" onClick={this.props.onClick}>
                    {this.props.text}
                </Button>)
            :
            (<Button shape='round' size='small' style={{paddingBottom: '5px'}} href={this.props.href} rel='noopener noreferrer' target="_blank" onClick={this.props.onClick}>
                <div className='flex-left'>
                    {this.props.children}
                    <img alt='' src={this.props.image} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px'}}/>
                    <div className='padding-right'/>
                    {this.props.text}
                </div>
            </Button>))
            :
            (<Link href={this.props.href} content={this.props.text}/>)
        )
    }
};