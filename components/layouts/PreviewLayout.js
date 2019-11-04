import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';
import stylesheet from '../../styles/index.scss';

class PreviewLayout extends Component {
    render(){
        const { children } = this.props;
        return (
            <div>
                 <Head>
                    <style
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: stylesheet }}
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    </Head>
                <Nav/>
                <div className="page-container">{children}</div>
                <Footer/>
            </div>
        )
    }
}

export default PreviewLayout;