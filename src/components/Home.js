import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import '../fonts/montserrat.css'
import { Button, Typography, Row} from 'antd';
import { Banner } from './Banner';

const { Title, Text } = Typography;

export class Home extends React.Component {

    render () {
    return (
        <div>
            <Banner></Banner>
            <Row type='flex' justify='center' className='top-title'>
                <div>
                    <Title level={2} className='secondary-color' style={{color: 'var(--secondary-color)'}}>
                        About Me
                    </Title>

                    <Text strong>
                        Coming soon
                    </Text>
                </div>
            </Row>
        </div>
        );
    }
}