import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'lib/posts' // tsconfig配置了baseUrl:'./'，引入自定义模块就可以直接在根目录下开始
import Head from 'next/head'
import Date from 'components/date'
import utilStyles from 'styles/utils.module.css'
import type { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }: {
  postData: {
    title: string,
    date: string,
    contentHtml: string
  }
}): JSX.Element {
    return (
      <Layout>
          <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps  = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
}