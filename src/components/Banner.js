import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

import { Button } from 'antd';
import Links from '../data/Links';

const BgElement = Element.BgElement;
export class Banner extends React.Component {
  
    render(){
        return (
            <BannerAnim prefixCls="banner-user" autoPlay autoPlaySpeed={5000}>
                <Element 
                prefixCls="banner-user-elem"
                key="0"
                >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                    background: '#364D79',
                    }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    James Brady
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                    Computer Science Student at UTA
                </TweenOne>
                </Element>
                
                <Element 
                prefixCls="banner-user-elem"
                key="0"
                >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                    background: '#4875B4',
                    }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Message me on
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                    <Button shape='round' icon='linkedin' className='linkedin-color' href={Links.linkedin} rel='noopener noreferrer' target="_blank">
                        LinkedIn
                    </Button>
                </TweenOne>
                </Element>

                <Element 
                prefixCls="banner-user-elem"
                key="0"
                >
                <BgElement
                    key="bg"
                    className="bg black-background"
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Checkout my projects on 
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                    <Button shape='round' icon='github' href={Links.github} rel='noopener noreferrer' target="_blank">
                        Github
                    </Button>
                </TweenOne>
                </Element>

                <Element 
                prefixCls="banner-user-elem"
                key="0"
                >
                <BgElement
                    key="bg"
                    className="bg black-background"
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    See my hackathon projects on
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                    <Button shape='round' href={Links.devpost} rel='noopener noreferrer' target="_blank">
                        Devpost
                    </Button>
                </TweenOne>
                </Element>
                
            </BannerAnim>
        )
    }
}