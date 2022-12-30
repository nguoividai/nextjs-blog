import Link from "next/link";
import React from "react";

const SideMenu = () => {
  const handleClick = () => {
    document.querySelector<HTMLElement>(".btn-close")?.click();
  };

  return (
    <>
      <ul className="navigation-menu">
        <li>
          <Link href="/" data-text="Trang chủ" onClick={handleClick}>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link href="/category" data-text="Danh mục" onClick={handleClick}>
            Danh mục
          </Link>
        </li>
        <li>
          <Link href="#/" data-text="Thông tin" onClick={handleClick}>
            Thông tin
          </Link>
        </li>
      </ul>
    </>
  );
};

export default React.memo(SideMenu);
