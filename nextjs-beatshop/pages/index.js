import Head from 'next/head'
import React from 'react'
import ReactPlayer from "react-player"
import styles from './app.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shop Ando</title>
        <link rel="icon" href="/wave_form_square.png" />
      </Head>
      
      <main>
        <h1 className="title">
          INSTRUMENTAL
        </h1>
        {/*
        <div className="grid">
          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        */}
        
        {/*Demo of single song listing*/}
        {/* Nautical */}
        <div className='grid'>
          <iframe width="700" 
                  height="100" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1097918173%3Fsecret_token%3Ds-KoIzawWyTGp&color=%23333AAB&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false">
          </iframe>
          <div className={styles.soundcloudplayer}>
            <a href="https://soundcloud.com/andorhode" title="Ando Rhode" target="_blank" style={{color: "black", textDecoration: "none"}}>
              Ando Rhode
            </a> · 
            <a href="https://soundcloud.com/andorhode/nautical-prod-ando-rhode/s-KoIzawWyTGp" title="NAUTICAL Prod. Ando Rhode" target="_blank" style={{color: "black", textDecoration: "none"}}>NAUTICAL Prod. Ando Rhode</a>
          </div>
        </div>

        {/* Nautical */}
        <div className='grid'>
          <iframe width="700" 
                  height="100" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023359731%3Fsecret_token%3Ds-lHaXT8nqITD&color=%23333AAB&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false">
          </iframe>
          <div className={styles.soundcloudplayer}>
            <a href="https://soundcloud.com/andorhode" title="Ando Rhode" target="_blank" style={{color: "black", textDecoration: "none"}}>
              Ando Rhode
            </a> · 
            <a href="https://soundcloud.com/andorhode/nautical-prod-ando-rhode/s-KoIzawWyTGp" title="NAUTICAL Prod. Ando Rhode" target="_blank" style={{color: "black", textDecoration: "none"}}>Time To Think Prod. Ando Rhode</a>
          </div>
        </div>
      </main> 
      
      {/* 
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
      */}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
