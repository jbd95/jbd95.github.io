import React from 'react';
import { Collapse, Icon, Card, Row, Tooltip, Button } from 'antd';
import ResizeableComponent from './ResizeableBase';

const { Panel } = Collapse;

export class Display extends  ResizeableComponent {

    renderIcons = (icon) => {

        if(!icon)
            return null;
        
        const { link, image, tooltip } = icon;

       return ( 
            (this.state.windowWidth > 400) ? 
                (<Row type='flex'>
                    <Tooltip title={tooltip} placement='top'>
                        <Button size='small' shape='circle' href={link} target='_blank' 
                            rel='noopener noreferrer' onClick={event => event.stopPropagation()}>
                            {image}
                        </Button>
                    </Tooltip>
                </Row>)
            :
            (null)
        )
    };

    render() {
        return (
            <Collapse defaultActiveKey={['1']} expandIconPosition={'right'} accordion style={{width: '100%', marginTop: '16px'}}>   
            <Panel header={this.props.title} key='1' className='default-font extra-small-font bold-font' extra={this.renderIcons(this.props.icon)}>
                <div>
                    {(this.props.description)? <div className='flex-left default-font extra-small-font'> {this.props.description} </div> : <div/>}
                    
                    {this.props.entries.map(({ icon, text, link }, i) => (
                        <div className='flex-left default-font extra-small-font' key={`entry-${i}`}>
                            <Icon type={`${icon}`} className='padding-right primary-color'/>
                            {(link) ?  <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'> {text} </a>
                            : <div> {text} </div>
                            }
                        </div>
                    ))}

                    {(this.props.extras) ? this.props.extras.map((category, i) => (
                        <Collapse expandIconPosition={'right'} key={`extra-${i}`} bordered={false} style={{width: '100%', marginTop: '16px'}}>   
                        <Panel header={category.title} key='1' className='default-font extra-small-font'>
                                {(category.children)? category.children.map((current, i) => (
                                    <Card title={current.title} extra={this.renderIcons(current.icon)} key={`child-${i}`}>
                                        {(current.description)? <div className='flex-left default-font extra-small-font'> {current.description} </div> : <div/>}
                    
                                        {current.entries.map(({ icon, text, link }, i) => (
                                            <div className='flex-left default-font extra-small-font' key={`entry-${i}`}>
                                                <Icon type={icon} className='padding-right primary-color'/>
                                                {(link) ?  <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'> {text} </a>
                                                : <div>{text}</div>
                                                }
                                            </div>
                                        ))}
                                    </Card>
                                )) : null}
                                {(category.type === 'list')? category.entries.map(({icon, text, link}, i) => (
                                    <div className='flex-left default-font extra-small-font;' key={`extra-child-${i}`}>
                                        <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'>
                                            <Icon type={icon} className='padding-right primary-color'/>
                                            {text}
                                        </a>
                                    </div>
                                ))
                                
                                : null}
                        </Panel>
                        </Collapse>
                    ))
                        : <div/>}
                </div>
                </Panel>
            </Collapse>
        )
    }
};

export class DisplayPopup extends ResizeableComponent {
    renderIcons = (icon) => {

        if(!icon)
            return null;
        
        const { link, tooltip } = icon;

       return ( 
            (this.state.windowWidth > 400) ? 
                (<Row type='flex'>
                    <Tooltip title={tooltip} placement='top' className='hidden-small'>
                        <Button size='small' shape='circle' href={link} target='_blank' icon='global'
                            rel='noopener noreferrer' onClick={event => event.stopPropagation()}>
                        </Button>
                    </Tooltip>
                </Row>)
            :
            (null)
        )
    };

    render() {
        return (
            <Card title={this.props.title} key='1' className='default-font small-font bold-font' style={{margin: '20px 20px 10px 10px'}} extra={this.renderIcons(this.props.icon)}>
                <div>
                    {(this.props.description)? <div className='flex-left default-font extra-small-font'> {this.props.description} </div> : <div/>}
                    
                    {this.props.entries.map(({ icon, text, link }, i) => (
                        <div className='flex-left default-font extra-small-font' key={`entry-${i}`}>
                            <Icon type={`${icon}`} className='padding-right primary-color'/>
                            {(link) ?  <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'> {text} </a>
                            : <div> {text} </div>
                            }
                        </div>
                    ))}

                    {(this.props.extras) ? this.props.extras.map((category, i) => (
                        <Collapse expandIconPosition={'right'} key={`extra-${i}`} bordered={false} style={{width: '100%', marginTop: '16px'}}>   
                        <Panel header={category.title} key='1' className='default-font extra-small-font'>
                                {(category.children)? category.children.map((current, i) => (
                                    <Card title={current.title} extra={this.renderIcons(current.icon)} key={`child-${i}`}>
                                        {(current.description)? <div className='flex-left default-font extra-small-font'> {current.description} </div> : <div/>}
                    
                                        {current.entries.map(({ icon, text, link }, i) => (
                                            <div className='flex-left default-font extra-small-font' key={`entry-${i}`}>
                                                <Icon type={icon} className='padding-right primary-color'/>
                                                {(link) ?  <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'> {text} </a>
                                                : <div>{text}</div>
                                                }
                                            </div>
                                        ))}
                                    </Card>
                                )) : null}
                                {(category.type === 'list')? category.entries.map(({icon, text, link}, i) => (
                                    <div className='flex-left default-font extra-small-font;' key={`extra-child-${i}`}>
                                        <a style={{textDecoration: 'none', color: 'inherit', fontSize: 'inherit'}} href={link} rel='noopener noreferrer' target='_blank'>
                                            <Icon type={icon} className='padding-right primary-color'/>
                                            {text}
                                        </a>
                                    </div>
                                ))
                                
                                : null}
                        </Panel>
                        </Collapse>
                    ))
                        : <div/>}
                </div>
            </Card>
        )
    }
}