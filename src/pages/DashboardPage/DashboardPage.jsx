import React from "react";
import CustomGoogleMap from "../../components/CustomGoogleMap/CustomGoogleMap";
// import PropTypes from "prop-types";
//import { Test } from './DashboardPage.styles';
import { fetchLiveSession } from "../../utilities/services/firebase";
import MapMarker from "../../components/MapMarker/MapMarker";

const DashboardPage = (props) => {
  React.useEffect(() => {
    fetchLiveSession();
  }, []);
  return (
    <div className="DashboardPageWrapper">
      Dashboard
      <hr />
      <CustomGoogleMap>
        <MapMarker lat={59.955413} lng={30.337844} />
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
