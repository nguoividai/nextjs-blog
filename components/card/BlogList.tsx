import React from "react";
import Image from "next/image";

const BlogList = () => {
  return (
    <>
      <div className="blog-list">
        <div className="blog-image">
          <Image
            src="/assets/images/javascript-logo.png"
            alt="image-blog"
            width={150}
            height={200}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="blog-content">
          <div className="blog--category">Javascript</div>
          <div className="blog--title">
            Đây là top các mẫu CPU chơi game tốt nhất năm 2022
          </div>
          <div className="blog--extra">
            <i className="icofont-clock-time"></i> 4 Min
            <a className="btn-read-more" href="#/">
              <i className="icofont-swoosh-right"></i> Đọc thêm
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(BlogList);
