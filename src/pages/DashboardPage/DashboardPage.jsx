import React, { useState, useEffect } from "react";
import CustomGoogleMap from "../../components/CustomGoogleMap/CustomGoogleMap";
// import PropTypes from "prop-types";
//import { Test } from './DashboardPage.styles';
import { fetchLiveSession } from "../../utilities/services/firebase";
import MapMarker from "../../components/MapMarker/MapMarker";
import { fitBounds } from "google-map-react";

const DashboardPage = (props) => {
  const [liveSessions, setLiveSessions] = useState([]);
  const [mapsObj, setMapsObj] = useState(null);
  useEffect(() => {
    fetchLiveSession().then((_liveSessions) => {
      console.log("live sessions", _liveSessions);
      setLiveSessions(_liveSessions);
    });
  }, []);
  const setBound = (mapsObj, liveSessions) => {
    if (mapsObj && liveSessions) {
      const bounds = new mapsObj.maps.LatLngBounds();
      liveSessions.forEach((liveSession) => {
        console.log("adding in bound", liveSession.data.userName)
        bounds.extend(
          new mapsObj.maps.LatLng(
            liveSession.data.latitude,
            liveSession.data.longitude
          )
        );
      });
      console.log("Bounds", bounds);
      mapsObj.map.fitBounds(bounds);
    }
  };
  useEffect(() => {
    setBound(mapsObj, liveSessions);
  }, [mapsObj, liveSessions]);
  return (
    <div className="DashboardPageWrapper">
      Dashboard
      <hr />
      <CustomGoogleMap setMaps={setMapsObj}>
        {liveSessions.map((liveSession, index) => {
          return (
            <MapMarker
              key={`marker-${index}`}
              lat={liveSession.data.latitude}
              lng={liveSession.data.longitude}
              title={liveSession.data.userName}
            />
          );
        })}
      </CustomGoogleMap>
    </div>
  );
};

DashboardPage.propTypes = {
  // bla: PropTypes.string,
};

DashboardPage.defaultProps = {
  // bla: 'test',
};

export default DashboardPage;
