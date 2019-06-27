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
    <h1>{props.show.response.docs[0].web_url}</h1>
    <p>{props.show.summary}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);
  const show = await res.json();

  console.log(`Fetched show: ${show.response.docs[0].web_url}`);

  return { show };
};

export default Post;