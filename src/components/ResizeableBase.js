import React from 'react';

class ResizeableComponent extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state = { windowWidth: 0, windowHeight: 0 };
    }

    componentDidMount() {
        this.getWindowDimensions();
        window.addEventListener('resize', this.getWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getWindowDimensions);
    }

    getWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }
}

export default ResizeableComponent;