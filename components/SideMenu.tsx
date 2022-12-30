import React from "react";

const SideMenu = () => {
  return (
    <>
      <ul className="navigation-menu">
        <li>
          <a href="#/" data-text="Trang chủ">
            Trang chủ
          </a>
        </li>
        <li>
          <a href="#/" data-text="Danh mục">
            Danh mục
          </a>
        </li>
        <li>
          <a href="#/" data-text="Thông tin">
            Thông tin
          </a>
        </li>
      </ul>
    </>
  );
};

export default React.memo(SideMenu);
