import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import { BannerData } from '../data/Banner';

const BgElement = Element.BgElement;

export class Banner extends React.Component {

    render(){
        return (
            <BannerAnim prefixCls="banner-user" autoPlay autoPlaySpeed={5000}>
                {BannerData.map((current, i) => (
                    <Element prefixCls="banner-user-elem" key={`${i}`}>
                        <BgElement key="bg" className="bg" style={{ background: current.backgroundColor }}/>
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            {current.title}
                        </TweenOne>
                        <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }} >
                            {current.text}
                        </TweenOne>
                    </Element>
                ))} 
            </BannerAnim>
        )
    }
}