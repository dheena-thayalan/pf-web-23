/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { biography } from "../../../utils/biography";
import DataHelper from "../../../utils/DataHelper";
import Button from "../button/index";
// import Feedback from "../../../assets/images/facebook.svg";

const SocialMediaIcons = () => {
  return (
    <div className="social-media">
      <Button className="resume-btn" label="Explore My CV"/>
      <h6>Reach me out</h6>
      <div className="media-box">
      {biography.social_media.map((socialMedia, index) => {
        const { icons, href } = socialMedia;
        const svgPath = DataHelper.iconMap[icons || ""];
        const tooltip = icons || "";

        return (
          <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip id={`tooltip-${index}`}>{tooltip}</Tooltip>}>
            <a href={href || ""} target="__blank">
              {icons && <img src={svgPath} className={icons} alt={icons || ""} />}
            </a>
          </OverlayTrigger>
        );
      })}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
