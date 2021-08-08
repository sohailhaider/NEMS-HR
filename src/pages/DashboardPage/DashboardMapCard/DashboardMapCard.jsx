import React, { useState, useEffect } from "react";
import MapMarker from "../../../components/MapMarker/MapMarker";
import CustomGoogleMap from "../../../components/CustomGoogleMap/CustomGoogleMap";
import { fetchLiveSession } from "../../../utilities/services/firebase";

const DashboardMapCard = (props) => {
  const [liveSessions, setLiveSessions] = useState([]);
  const [mapsObj, setMapsObj] = useState(null);
  useEffect(() => {
    fetchLiveSession().then((_liveSessions) => {
      setLiveSessions(_liveSessions);
    });
  }, []);
  const setBound = (mapsObj, liveSessions) => {
    if (mapsObj && liveSessions) {
      const bounds = new mapsObj.maps.LatLngBounds();
      liveSessions.forEach((liveSession) => {
        console.log("adding in bound", liveSession.data.userName);
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
  );
};

DashboardMapCard.propTypes = {
  // bla: PropTypes.string,
};

DashboardMapCard.defaultProps = {
  // bla: 'test',
};

export default DashboardMapCard;
