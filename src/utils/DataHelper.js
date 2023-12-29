/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { biography } from "./biography";
import StarRating from "../components/ui/rating";

const DataHelper = {
  SECTIONS: {
    Home: {
      banner: `<div>Hello there, I'm</div>
            <div class=name>${biography?.s_name || "Dheena"}</div>
            <div class=info>And I'm a <span class="role">Developer & Contributor</span></div>`
    },
    about: {
      data: [
        {
          title: "who i'am",
          content: biography?.about_me
        }
      ]
    },
    Proficiency: {},
    Testimonials: {},
    Project: {},
    "Conduct Us": {},
  },
  generateContent: (data, type) => {
    try {
      switch (type) {
        case 'EDUCATION':
        case 'CERTIFICATION': {
          const { year, name, institute, url, address, percentage, college } = data || {};
          const badgeValue = year || "000";
          const subheading = name || "course";
          const content = (
            <p>
              from{" "}
              <a href={url || ""} target="__blank">
                {institute || college || ""}
              </a>
              {address || ""}
              {percentage ? ` with ${percentage}` : ""}
            </p>)
          return {
            badgeValue,
            subheading,
            content,
          };
        }
        case "LANGUAGE" :{
          const { language, rate } = data || {};
         return {
          subheading:language||"",
          badgeValue: <StarRating rating={Number(rate)} totalStars={5} /> || rate||""
         };
        }
        default:
          return null;
      }
      
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`****DataHelper.generateContent.${type}*****`);
      return null;
    }
  }
};

export default DataHelper;
