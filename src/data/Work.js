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
            }
        ],
        icons: [
            {
            link: 'https://www.uta.edu/engineering/_downloads/degree_plans/2017-se-f.pdf',
            image: <img alt='' src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
            tooltip: 'Degree Plan',  
            },
        ],
        description: 'Testing Description',
        extras: [
            {
                title: 'Publications',
                children: [
                    {
                        title: 'My First Paper',
                        entries: [
                            {
                                icon: 'calendar',
                                text: 'July',
                                link: null
                            }
                        ],
                        description: 'Description for my first paper that was submitted earlier this year'
                    }
                ]
            },
            {
                title: 'Presentations',
                children: [
                    {
                        title: 'PETRA 2019 Conference',
                        icon: {
                            link: 'http://petrae.org/',
                            image: <Icon type='link'/>,
                            tooltip: 'PETRA Website',
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
                            }
                        ],
                        description: 'Testing'
                    },
                    {
                        title: 'PETRA 2018 Conference',
                        icon: {
                            link: 'http://petrae.org/',
                            image: <Icon type='link'/>,
                            tooltip: 'PETRA Website',
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
                        description: 'Testing'
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
        description: 'Testing Description',
        extras: null
    },
];