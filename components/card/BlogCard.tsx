import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      <div className="card">
        <Image
          src="/assets/images/javascript-logo.png"
          alt="image-blog"
          width={500}
          height={350}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">Javascript</h5>
          <p className="card-text">
            JavaScript is the worlds most popular programming language.
            JavaScript is the programming language of the Web
          </p>
        </div>
        <div className="card-footer">
          <div>
            <i className="icofont-clock-time"></i> 4 Min
            <span className="m-3">Javascript</span>
          </div>
          <div className="text-end mt-3">
            <Link href="/posts/post-detail">
              <i className="icofont-swoosh-right"></i> Đọc thêm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(BlogCard);
