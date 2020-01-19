import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { RoundButton } from './ExpandableButton';

const { Text } = Typography;

export class Email extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            email: this.props.hash,
            hashed: true,
            arr: [],
            offset: 5
        }
    }
    rehash = () => {
        let { hashed, arr, offset } = this.state;
        let res = '';
        offset = Math.floor(Math.random() * 80) + 20;
        for(let i = 0; i < arr.length; i++)
        {
            res += String.fromCharCode(arr[i] - offset);
        }
        hashed = true;
        this.setState({email : res, hashed, arr, offset});
    }

    decode = () => {
        let { email, hashed, offset } = this.state;
        let res = '';
        let arr = [];
        for(let i = 0; i < email.length; i++)
        {
            arr.push(email.charCodeAt(i) + offset);
        }
        for(let i = 0; i < arr.length; i++)
        {
            res += String.fromCharCode(arr[i]);
        }
        hashed = false;
        this.setState({email : res, hashed, arr});
        return res;
    }

    toggleHash = () => {
        if(this.state.hashed)
            this.decode();
        else
            this.rehash();
    }

    renderPopup = (email) => (
        <Row justify='center' type='flex'>
            <Col>
                <Text copyable> {email} </Text>
                <Button type='primary' href={'mailto:' + email} style={{margin: '16px'}}> Send Email </Button>
            </Col>
        </Row>
    )

    display = async (callback) => {
        let email = this.state.email;
        if(this.state.hashed)
        {
            await this.decode();
            email = this.state.email;
            await this.rehash();
        }
        callback(this.renderPopup(email));
    }

    render() {
        return (
            <div style={this.props.style}>
                <RoundButton minWidth={100} icon='mail' text='email' onClick={() => this.display(this.props.callback)}/>
            </div>
        )
    }
}
