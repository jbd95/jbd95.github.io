import React from 'react';

import { Icon } from 'antd';

import utaIcon from '../images/uta-mavs-icon.png';
import heracleiaIcon from '../images/uta-heracleia.png';
import mactechIcon from '../images/mactech-icon.png';

export const WorkData = [
    {
        title: 'Undergraduate Research Assistant',
        icon: {
            link: 'https://heracleia.uta.edu/',
            image: <img alt='' src={heracleiaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
            tooltip: 'Heracleia Website'           
        },
        entries: [
            {
                icon: 'environment',
                text: 'Heracleia Lab @ UTA',
                link: 'https://heracleia.uta.edu/'
            },
            {
                icon: 'calendar',
                text: 'November 2017 - Present',
                link: null
            },
            {
                icon: 'code',
                text: 'Unity, C#, Python, Javascript',
                link: null
            }
        ],
        icons: [
            {
            link: 'https://www.uta.edu/engineering/_downloads/degree_plans/2017-cs-f.pdf',
            image: <img alt='' src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
            tooltip: 'Degree Plan',  
            },
        ],
        description: `I assist PHD students with their research in the area of Human-Computer Interaction. 
        I have developed software for various projects involving robotics, serious games, and wearable systems.`,
        extras: [
            {
                type: 'list',
                title: 'Publications',
                entries: [
                        {
                            icon: 'link',
                            text: 'An Intelligent Action Recognition System to Assess Cognitive Behavior for Executive Function Disorder',
                            link: 'https://ras.papercept.net/conferences/conferences/CASE19/program/CASE19_ContentListWeb_2.html',
                        },
                        {
                            icon: 'link',
                            text: 'Towards a robot-based multimodal framework to assess the impact of fatigue on user behavior and performance: a pilot study',
                            link: 'https://dl.acm.org/citation.cfm?id=3322776'
                        },
                        {
                            icon: 'link',
                            text: 'A Review of Wearable Heart Rate Sensors in Research',
                            link: 'https://dl.acm.org/citation.cfm?id=3321550'
                        },
                        {
                            icon: 'link',
                            text: 'A Human Robot Interaction Framework for Robotic Motor Skill Learning',
                            link: 'https://dl.acm.org/citation.cfm?id=3197790'
                        },
                    ],
            },
            {
                title: 'Presentations',
                children: [
                    {
                        title: 'CASE 2019 Conference',
                        icon: {
                            link: 'https://ras.papercept.net/conferences/conferences/CASE19/program/',
                            image: <Icon type='link'/>,
                            tooltip: 'Conference Program',
                        },
                        entries: [
                            {
                                icon: 'environment',
                                text: 'Vancouver, Canada',
                                link: null
                            },
                            {
                                icon: 'calendar',
                                text: 'August 22-26, 2019',
                                link: null
                            },
                        ],
                        description: `I gave a 20 minute presentation on a paper titled "An Intelligent Action Recognition System to Assess Cognitive Behavior for Executive Function Disorder."`
                    },
                    {
                        title: 'PETRA 2019 Conference',
                        icon: {
                            link: 'http://www.petrae.org/docs/Petra19_program.pdf',
                            image: <Icon type='link'/>,
                            tooltip: 'Conference Program',
                        },
                        entries: [
                            {
                                icon: 'environment',
                                text: 'Rhodes, Greece',
                                link: null
                            },
                            {
                                icon: 'calendar',
                                text: 'June 5-7, 2019',
                                link: null
                            },
                        ],
                        description: `I presented a poster paper titled "A Wearable System for Unobtrusive Mood Detection."`
                    },
                    {
                        title: 'PETRA 2018 Conference',
                        icon: {
                            link: 'http://www.petrae.org/docs/Petra18_program.pdf',
                            image: <Icon type='link'/>,
                            tooltip: 'Conference Program',
                        },
                        entries: [
                            {
                                icon: 'environment',
                                text: 'Corfu, Greece',
                                link: null
                            },
                            {
                                icon: 'calendar',
                                text: 'June 26-29, 2018',
                                link: null
                            }
                        ],
                        description: `I helped present a poster titled "A Human Robot Interaction Framework for Robotic Motor Skill Learning."`
                    },
                ]
            },
        ]
    },
    {
        title: 'Customer Service Representative',
        icon: {
            link: 'https://mactech-solutions.com/',
            image: <img alt='' src={mactechIcon} style={{maxWidth: '65%', maxHeight: '65%', paddingBottom: '1.5px'}}></img>,
            tooltip: 'Mactech-Solutions'           
        },
        entries: [
            {
                icon: 'environment',
                text: 'MacTech Solutions',
                link: 'https://mactech-solutions.com'
            },
            {
                icon: 'calendar',
                text: 'Summers of 2016, 2017',
                link: null
            }
        ],
        icons: [
            {
            link: 'https://www.uta.edu/engineering/_downloads/degree_plans/2017-se-f.pdf',
            image: <img alt='' src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
            tooltip: 'Degree Plan',
            }
        ],         
        description: 'My roles included greeting customers, answering phones, and helping customers fix software and hardware issues with their Apple Devices. I performed diagnostic tests, data transfers, and part replacements.',
        extras: null
    },
];