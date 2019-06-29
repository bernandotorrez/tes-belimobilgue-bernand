import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      search: '',
      loading: 'Getting Data...'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    
    return (
      <div>
      <Layout>
       <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        p {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    <h1><u>Technology News</u></h1>

    <p>
    <form onSubmit={this.handleSubmit}>
      <label>
        Search : 
        <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      </form>
    </p>
<p> {this.state.loading}</p>
    {/* Looping Data */}
    <ul>
      {this.state.data.map(show => (
        <li key={show.web_url}>
          <Link href={`/news?id=${show.web_url}`}>
            <a>{show.headline.main}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
  </div>
    )
  }

  componentDidMount() {
    this.getNewsData();
  }

  handleSubmit(event) {
    this.getSearchNews()
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  async getSearchNews(){
    try {
      
      // Kosongkan state data
      this.setState({
        data: [],
        loading: 'Searching...'
      })

      const { search } = this.state;
  
      //const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=web_url,headline&fq=section_name:("Technology")&q=${search}&fq=&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);
      const show = await res.json();

      var show_res = show.response.docs

      // Isi state data
      this.setState({
        data: show_res,
        loading: ''
      })
    } catch(e){
      console.log(e)
    }
    
  }

  async getNewsData() {
    try {
      
      const res = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=web_url,headline&fq=section_name:("Technology")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa');
      //const res = await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=D63Kg6LvRgmGqWlhOInQqrAEFvfQ2FEj');
  
      const data = await res.json();

      var data_res = data.response.docs;

      this.setState({
        data: data_res,
        loading: ''
      })

    } catch(e) {
        console.log(e)
    }
  }

}

export default Index;