/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TabPannel from "../ui/tabpanel/index.js";
import { biography } from "../../utils/biography";
import CustomList from "../ui/list/index.js";
import MapHook from "../../utils/hooks/maphook.js";

const About = () => {
  const { education, certification, quotes, about_me, skills, language } =
    biography || {};

  const getSkill = () => {
    return Object.entries(skills)?.map(([category, technologies]) => {
      return {
        badgeValue: Object.keys(technologies)?.join(", ") || "",
        subheading: category || "", // Adding the category for reference
      };
    });
  };

  // eslint-disable-next-line consistent-return
  const aboutData = () => {
    try {
      return [
        // Who I'am ***************
        {
          title: "Who I'am",
          content: (
            <div className="row who-iam-box">
              <div className="col-lg-12 quotes">
                <h2 className="fw-6">{`❝ ${quotes || ""} ❞`} </h2>
              </div>
              <div
                className="col-md-6 col-lg-9"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: about_me || "",
                }}
              />
              <div className="col-md-6 col-lg-3">
                <img
                  className="face-img"
                  // eslint-disable-next-line global-require
                  src={require("../../assets/images/person.png") || ""}
                  alt="Person"
                />
              </div>
            </div>
          ),
        },
        // Qualification & Certification ***************
        {
          title: "Qualification & Certification ",
          content: (
            <div className="row who-iam-box">
              <div className="col-lg-6">
                <CustomList
                  items={MapHook(education, "CERTIFICATION")}
                  title="Educational Qualification"
                />
              </div>
              <div className="col-md-6 col-lg-6">
                <CustomList
                  items={MapHook(certification, "CERTIFICATION")}
                  title="Certification"
                />
              </div>
            </div>
          ),
        },
        // Skills & Languages ***************
        {
          title: "Skills & Languages",
          content: (
            <div className="row who-iam-box">
              <div>
                <ul>
                  <li>
                    Started coding with C & C++ in 2017, then switched to
                    building web applications using JavaScript, HTML, and CSS,
                    and currently working with React, Angular, and Node.js
                  </li>
                  <li>
                    I have created complete web applications from scratch,
                    handling both the frontend and backend development.
                  </li>
                  <li>
                    Besides web development, I still have a passion for Java.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <CustomList items={getSkill()} title="Skills" />
              </div>
              <div className="col-md-6 col-lg-6">
                <CustomList
                  items={MapHook(language, "LANGUAGE")}
                  title="Language"
                />
              </div>
            </div>
          ),
        },
      ];
    } catch (e) {
      console.log("***aboutData() @ about.js****");
    }
  };

  return (
    <div className="about-container">
      <h2 className="section-heading">About </h2>
      <TabPannel data={aboutData() || []} dfKey={"Who I'am"} />
    </div>
  );
};

export default About;
