import React from "react";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <>
      <Link href="/category/posts">
        <div className="card">
          <div className="card-body text-center">
            <h5 className="card-title">Javascript</h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default React.memo(CategoryCard);
