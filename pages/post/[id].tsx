import Head from "next/head";
import { Layout } from "../../components/Layout";
import { getAllPostIds , getPostDataOne } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css"

export const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({
    params,
  }) => {
    const postData = await getPostDataOne(params.id)
    return {
      props: {
        postData
      },
    }
  }

export const Post = ({postData}) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
        <article>
         <h1 className={utilStyles.headingX1}>{postData.title}</h1>
         <div className={utilStyles.lightText}>{postData.data}</div>
         <div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}}/>
         </article>
        </Layout>
    );
}

export default Post