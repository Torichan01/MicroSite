import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Layout,siteTitle } from '../components/Layout'
import utilStyles from "../styles/utils.module.css"
import { getPostsData } from '../lib/post'
import Head from 'next/head'

//SSGの場合
export const getStaticProps = async () =>{
  const allPostsData = getPostsData();
  return {
    props:{
      allPostsData
    }
  }
}

export const Home = ({allPostsData}) => {
  return (
<Layout>
  <Head>
   <title>{siteTitle}</title>
  </Head>
  <section className = {`${utilStyles.headingMd}${utilStyles.padding1pt}`}>
    <p>自分の説明文</p>
    </section>
    <h2>Tori blog</h2>
    <div className= {styles.grid}>
      {allPostsData.map(({ id, title, date, thumbnail }) => (
        <article key={id}>
        <Link href = {`/post/${id}`} >
        <img src ={`${thumbnail}`}  className={ styles.thumbnailImage }/>
        </Link>
        <Link href = {`/post/${id}`} >
        <a className={utilStyles.boldText}>{title}</a>
        </Link>
        <br />
        <small className = {utilStyles.lightText}>{date}</small>
      </article>
      ))}
    </div>

</Layout>
  )
}

export default Home;
