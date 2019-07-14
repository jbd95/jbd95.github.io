import React from 'react';

import { Icon } from 'antd';

import utaIcon from '../images/uta-mavs-icon.png';

export const WorkData = [
    {
        title: 'Undergraduate Research Assistant',
        entries: [
            {
                icon: 'environment',
                text: 'Heracleia Lab @ UTA',
                link: 'https://heracleia.uta.edu'
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
            image: <img src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
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
                        icons: [
                            {
                            link: '',
                            image: <Icon type='link'/>,
                            tooltip: 'petrae.org',
                            },
                        ],
                        entries: [
                            {
                                icon: 'environment',
                                text: 'Rhodes, Greece',
                                link: null
                            },
                            {
                                icon: 'calendar',
                                text: 'Testing',
                                link: null
                            }
                        ],
                        description: 'Testing'
                    }
                ]
            }
        ]
    },
    {
        title: 'Customer Service Representative',
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
            image: <img src={utaIcon} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px', paddingBottom: '1px'}}></img>,
            tooltip: 'Degree Plan',
            }
        ],         
        description: 'Testing Description',
        extras: null
    },
];