import Layout from '../components/MyLayout.js';

export default function About() {
  return (
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
      <p>Hello! This is Bernand</p>

      <p>This is a React Simple Application for technical test from belimobilgue</p>
    </Layout>
  );
}