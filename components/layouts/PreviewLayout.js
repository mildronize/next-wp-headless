import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

class PreviewLayout extends Component {
    render(){
        const { children } = this.props;
        return (
            <div>
                <Nav/>
                <div className="page-container">{children}</div>
                <Footer/>
            </div>
        )
    }
}

export default PreviewLayout;