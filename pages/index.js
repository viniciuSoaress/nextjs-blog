import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/date";



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingmd}>
        <p>[Hello, i´m Vinicius. in develop Front-end by React.js e Next.js]</p>
        <p>
          (this is a sample website - you´ll be building a site like this on{' '} <a href="https://nextjs.org/learn" target="_blank">our Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingmd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headinglg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.linghtText}>
                <date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  );
}