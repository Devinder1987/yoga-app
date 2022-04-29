import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

library.add(fas, faWhatsapp, faYoutube, faInstagram);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yoga Classes in Gurgaon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Need to create Layout for all common pages. */}
      {/* Header */}
      <Header />
      {/* Main  page */}
      <Main />
      {/* Footer */}
      <footer>
        Created by
        <a href="https://www.linkedin.com/in/dshutwal/">
          {' '}
          &nbsp; Devinder Shuthwal
        </a>
      </footer>
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            max-width: 786px;
            margin: auto;
          }
          main {
          }

          footer {
            width: 100%;
            height: 4rem;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #3e9cee;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
          font-size: 16px;
        }
        p,
        h1,
        h2,
        h3,
        h4 {
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
