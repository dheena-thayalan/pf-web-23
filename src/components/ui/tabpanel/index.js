/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabPanel = ({ data, dfKey }) => {
  
  return (
    <Tabs
      defaultActiveKey={dfKey||""}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {data?.length > 0 && data?.map((tp, index) => (
        <Tab key={index + 1} eventKey={tp?.title || ""} title={tp?.title || ""}>
         {tp?.content||null}
        </Tab>
      ))}
    </Tabs>
  );
};

TabPanel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
};

export default TabPanel;

