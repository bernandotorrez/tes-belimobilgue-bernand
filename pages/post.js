import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
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
    <h1>{props.show_res.headline.main}</h1>
    <p>{props.show_res.snippet}</p>
    <p>{props.show_res.lead_paragraph}</p>
    <img src={'https://static01.nyt.com/'+props.show_res.multimedia[0].url} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`)
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);
  const show = await res.json();

  var show_res = show.response.docs[0]
  console.log(`Fetched show: ${show_res.headline.main}`);

  return { show_res };
};

export default Post;