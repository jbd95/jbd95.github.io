import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import '../fonts/montserrat.css';
import ResizeableComponent from './ResizeableBase';
import { MobileWebsite } from './MobileWebsite';
import { ResumeWebsite } from './ResumeWebsite';
import { ListWebsite } from './ListWebsite';


export class CombinedWebsite extends ResizeableComponent {
  render() {
    return (
      <ListWebsite name='James Brady' links={[
        {
          href: 'https://github.com/jbd95',
          text: 'github.com/jbd95',
          icon: 'github'
        },
        {
          href: 'https://jamesrbrady.com',
          text: 'jamesrbrady.com',
          icon: 'global'
        }
      ]}/>
    );
  }
}

/*<ResumeWebsite name='James Brady' links={[
        {
          href: 'https://github.com/jbd95',
          text: 'github.com/jbd95',
          icon: 'github'
        },
        {
          href: 'https://jamesrbrady.com',
          text: 'jamesrbrady.com',
          icon: 'global'
        }
      ]}/>
{/*(this.state.windowWidth > this.props.minWidth) ? 
        (<ResumeWebsite name='James Brady' links={[
          {
            href: 'https://github.com/jbd95',
            text: 'github.com/jbd95',
            icon: 'github'
          },
          {
            href: 'https://jamesrbrady.com',
            text: 'jamesrbrady.com',
            icon: 'global'
          }
        ]}/>)
          :
      (<MobileWebsite/>)*/