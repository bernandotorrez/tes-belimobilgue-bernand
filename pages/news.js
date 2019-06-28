import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const imgStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '400px'
}

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

    {/* Tampilkan Berita */}
    <h1>{props.headline}</h1>
    <p>{props.snippet}</p>
    <p>{props.paragraph}</p>
    
    <img src={props.image} style={imgStyle}/>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${id}")&api-key=WD9orPN6fmWSYmGjHaZwnZwW79Ca06xa`);
  const show = await res.json();

  var show_res = show.response.docs[0]
  console.log(`Fetched show: ${show_res.headline.main}`);

  var headline = show_res.headline.main;
  var snippet = show_res.snippet;
  var paragraph = show_res.lead_paragraph;
  
  // cek apakah ada imagenya atau tidak
  if(show_res.multimedia == '' || !show_res.multimedia) {
    var image = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  } else {
    var image = `https://static01.nyt.com/${show_res.multimedia[0].url}`;
  }

  return { 
    headline: headline,
    snippet: snippet,
    paragraph: paragraph,
    image: image
   };
};

export default Post;