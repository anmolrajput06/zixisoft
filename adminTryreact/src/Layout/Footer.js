import React from "react";

const Footer = () => {
  return (
    <>
      {/*start overlay*/}
      <div className="overlay toggle-icon" />
      {/*end overlay*/}
      {/*Start Back To Top Button*/}
      <a href="javaScript:;" className="back-to-top">
        <i className="bx bxs-up-arrow-alt" />
      </a>
      {/*End Back To Top Button*/}
      <footer className="page-footer">
        <p className="mb-0">Copyright © 2023. All right reserved.</p>
      </footer>
      {/*end wrapper*/}
    </>
  );
};

export default Footer;
