/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import emailjs from "emailjs-com";
import { biography } from "./biography";
import StarRating from "../components/ui/rating";
import facebook from "../assets/images/facebook.svg";
import github from "../assets/images/github.svg";
import hackerrank from "../assets/images/hackerrank.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

const DataHelper = {
  SECTIONS: {
    home: {
     href: "#home"
    },
    about: {
      href: "#about"
    },
    proficiency: { href: "#about"},
    recognition: { href: "#recognition"},
    project: { href: "#project"},
    "conduct Us": { href: "#contact"},
  },
  iconMap: {
    github,
    instagram,
    hackerrank,
    linkedin,
    twitter,
    facebook,
  },
  sendEmail: (form) => {
    const email = form?.email || "";
    // constructing the email content
    const emailContent = `
      Dear Dheena,
      
      You have received a new contact form submission from ${form?.name || ""}.
      
      Mobile No : ${form?.mob?.trim() || ""},

      email: ${email?.trim() || ""},

      Message Details:
      ${form?.msg || ""}
      
      Regards,
      ${form?.name}
    `;
    // sending the email using EmailJS
    emailjs
      .send(
        biography.email_service_key,
        biography.email_template_key,
        { to_email: { email }, message: `${emailContent}` },
        biography.email_public_key
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  },
  generateContent: (data, type) => {
    try {
      switch (type) {
        case "EDUCATION":
        case "CERTIFICATION": {
          const { year, name, institute, url, address, percentage, college } =
            data || {};
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
            </p>
          );
          return {
            badgeValue,
            subheading,
            content,
          };
        }
        case "LANGUAGE": {
          const { language, rate } = data || {};
          return {
            subheading: language || "",
            badgeValue:
              <StarRating rating={Number(rate)} totalStars={5} /> || rate || "",
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
  },
};

export default DataHelper;
