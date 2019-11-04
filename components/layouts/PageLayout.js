import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

class PageLayout extends Component {
    render(){
        const { children } = this.props;
        return (
            <div>
                <Header/>
                <Nav/>
                <div className="page-container">{children}</div>
                <Footer/>
            </div>
        )
    }
}

export default PageLayout;