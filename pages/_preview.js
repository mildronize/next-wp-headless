import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import PreviewLayout from '../components/layouts/PreviewLayout';
import Prism from 'prismjs';
import Config from '../config';
import QueryString from 'query-string';

export default class extends Component {

  state = {
     post: {
       title: "",
       content: ""
     },
     errorMsg: ""
  };

  async componentDidMount(){
    await this.loadData();
    Prism.highlightAll();
  }

  async loadData(){
    const parsed = QueryString.parse(window.location.search);
    const { id } = parsed;
    try {
      const response = await fetch(`${Config.WPAPI.previewById}/${id}`);
      const data = await response.json();
      console.log(data);
      if ('message' in data){
        this.setState({ errorMsg: data.message });
        console.log(data.message);
      }else {
        this.setState({
          post: data
        });
      }
      
    } catch (error) { 
     console.log(error);
    }
  }

  render () {
    const { title, content } = this.state.post

    return (
      <PreviewLayout>
      <main>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title}</h1>
        <h1>{this.state.errorMsg}</h1>
        <div
          dangerouslySetInnerHTML={{ __html:  content }}
        />
        
      </main>
      </PreviewLayout>
    )
  }
}
