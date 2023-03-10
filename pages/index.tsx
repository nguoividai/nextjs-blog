import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import BlogList from "components/card/BlogList";
import categoryStyles from "../styles/module/Category.module.css";
import BlogCard from "components/card/BlogCard";
import Category from "components/card/Category";
import Timeline from "components/timeline/Timeline";

export default function Home() {
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
          <div className="row">
            <div className="col-6 col-md-3">
              <Category />
            </div>
            <div className="col-6 col-md-3">
              <Category />
            </div>
            <div className="col-6 col-md-3">
              <Category />
            </div>
            <div className="col-6 col-md-3">
              <Category />
            </div>
          </div>
          <div className={categoryStyles["heading"]}>Bài viết mới nhất</div>
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

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
