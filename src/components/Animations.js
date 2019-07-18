import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';

export const QueueAnimation = (props) => {

    if(!isMobile()) {
        return (
            <QueueAnim>
                {props.children}
            </QueueAnim>
        )
    }
    return (<div>{props.children}</div>)
}

export const FadeAnimation = (props) => {
    if(!isMobile()) {
        return (
            <Animate transitionName='fade' transitionAppear>
                {props.children}
            </Animate>
        )
    }
    return (<div>{props.children}</div>)
}


const isMobile = () => {
    return window.orientation > -1;
}