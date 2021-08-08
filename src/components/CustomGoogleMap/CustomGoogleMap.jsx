import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './CustomGoogleMap.styles';
import GoogleMapReact from "google-map-react";

const CustomGoogleMap = (props) => {
  const onGoogleApiLoaded = (mapNMapsObj) => {
    if (props.setMaps) props.setMaps(mapNMapsObj);
  };
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {props.children}
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

CustomGoogleMap.propTypes = {
  // bla: PropTypes.string,
};

CustomGoogleMap.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

export default CustomGoogleMap;
