/* Layout applies common style to all compoents.
 */
import Head from 'next/head';
import Link from 'next/link';
import style from './base.module.css';

export default function Layout({ htmlTitle, children }) {
  return (
    <div className='container'>
      <Head>
        <title>{htmlTitle}</title>
        <link rel='icon' href='/logo.webp' />
      </Head>
      <header className={style.header}>
        <Link href='/'>
          <a>
            <img src='/logo.webp' height={64} />
          </a>
        </Link>
        <h2>RS Fitness</h2>
        <h2></h2>
      </header>
      {/* Children */}
      <section className={style.section}>{children}</section>
      <footer>
        Created by
        <a href='https://www.linkedin.com/in/dshutwal/'>
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
