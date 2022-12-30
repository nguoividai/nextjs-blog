import Head from "next/head";
import styles from "styles/Home.module.css";
import { ReactElement } from "react";
import BlogList from "components/card/BlogList";
import categoryStyles from "styles/module/Category.module.css";
import Category from "components/card/Category";
import Timeline from "components/timeline/Timeline";
import Layout from "components/Layout";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog by Top Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <div className={categoryStyles["heading"]}>Javascript</div>
          <div className="row">
            <div className="col-12 col-md-9">
              {[...Array(10)].map((_, i) => (
                <div key={i}>
                  <BlogList />
                  <BlogList />
                </div>
              ))}
            </div>
            <div className="col-12 col-md-3">
              <div
                className={categoryStyles["heading"]}
                style={{ fontSize: "1rem" }}
              >
                Xem nhanh
              </div>
              <div className="row">
                <div className="col-12">
                  <Timeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
