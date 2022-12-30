import BlogCard from "components/card/BlogCard";
import Layout from "components/Layout";
import Head from "next/head";
import React, { ReactElement } from "react";
import styles from "../../styles/Home.module.css";
import categoryStyles from "../../styles/module/Category.module.css";

const Category = () => {
  return (
    <>
      <Head>
        <title>Category</title>
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className={categoryStyles.heading}>Danh mục</div>
          <div className="row">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <BlogCard />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
