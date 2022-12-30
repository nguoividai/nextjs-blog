import { Josefin_Sans } from "@next/font/google";
import React from "react";
import Image from "next/image";
import style from "styles/module/Layout.module.css";
import SideMenu from "./SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const josefinSans = Josefin_Sans();

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={style["app-header"]}>
        <div className="logo">
          <Image
            src="/assets/images/top-logo.png"
            alt="logo"
            width={200}
            height={50}
          />
        </div>
        <div className="action">
          <div
            className={style["menu"]}
            data-bs-toggle="modal"
            data-bs-target="#menuModal"
          >
            <div className={style["menu-bar-lines"]}>
              <div className={style["menu-bar-line"]}></div>
              <div className={style["menu-bar-line"]}></div>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <footer className={style["app-footer"]}>
        &copy; Copyright 2022 Top Developer
      </footer>

      <div
        className="modal fade sidebar"
        id="menuModal"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div
          className="modal-dialog modal-fullscreen"
          data-bs-backdrop="static"
        >
          <div className="modal-content">
            <div className="modal-header">
              <Image
                src="/assets/images/top-logo.png"
                alt="logo"
                width={200}
                height={50}
              />
              <a
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="icofont-close"></i>
              </a>
            </div>
            <div className="modal-body">
              <SideMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Layout);
