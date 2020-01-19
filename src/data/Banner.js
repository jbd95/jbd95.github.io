import React from 'react';
import { ExpandButtonAuto } from '../components/ExpandableButton';
import Links from './Links';

export const BannerData = [
    {
        backgroundColor: '#364D79',
        title: 'James Brady',
        text: 'Computer Science Student at UTA',

    },
    {
        backgroundColor: '#4875B4',
        title: 'Message me on',
        text: (<ExpandButtonAuto icon='linkedin' text='LinkedIn' color={'var(--linkedin-color)'} href={Links.linkedin}/>),
    },
    {
        backgroundColor: 'black',
        title: 'Explore my projects on',
        text: (<ExpandButtonAuto icon='github' text='Github' color={'black'} href={Links.github}/>)
    },
    {
        backgroundColor: 'var(--devpost-color)',
        title: 'See my hackathon wins on',
        text: (<ExpandButtonAuto extra='D' text='evpost' color={'var(--devpost-color)'} href={Links.devpost}/>),
    }
];