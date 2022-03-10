import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Pizza Restaurant in Dallas</title>
        <meta name="description" content="Best pizza restaurant in Dallas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HomePage
    </div>
  )
}
