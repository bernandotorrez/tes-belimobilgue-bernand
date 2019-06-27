import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
       <style jsx>{`
        h1,
        a {
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
    <h1>Techlogy News</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.url}>
          <Link href={`/post?id=${show.url}`}>
            <a>{show.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=D63Kg6LvRgmGqWlhOInQqrAEFvfQ2FEj');
  
  const data = await res.json();

  var data_res = data.results;

  console.log(`Show data fetched. Count: ${data_res.length}`);

  return {
    shows: data_res.map(entry => 
        entry
        )
  };
};

export default Index;