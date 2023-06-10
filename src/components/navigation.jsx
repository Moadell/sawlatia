import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
           
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                من نحن
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                اللغات
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                المنتجات
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                المعرض
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                العملاء
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                الفريق
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                تواصل معانا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
