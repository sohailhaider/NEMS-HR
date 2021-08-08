import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './MapMarker.styles';
import icon from "./icon.svg";
import { Tooltip } from "antd";

const MapMarker = (props) => (
  <div className="MapMarkerWrapper">
    <Tooltip title={props.title} style={{cursor:"pointer"}}>
      <span><img src={props.icon} alt="Map Marker" style={{ width: "40px" }} /></span>
    </Tooltip>
  </div>
);

// MapMarker.propTypes = {
//   // bla: PropTypes.string,
// };

MapMarker.defaultProps = {
  icon: icon,
  title: "User Name"
};

export default MapMarker;
