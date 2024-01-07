/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import NavBar from "../../components/contents/navbar";
import Banner from "../../components/contents/banner";
import About from "../../components/contents/about";
import Project from "../../components/contents/project";
import Footer from "../../components/contents/footer";
import Testimonials from "../../components/contents/testimonials";

function Layout() {
  return (
    <div>
      <NavBar />
      <div className="mx-50">
        <Banner />
        <About />
        <Project />
        <Testimonials />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
