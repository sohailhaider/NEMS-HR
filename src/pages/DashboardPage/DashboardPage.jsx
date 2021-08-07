import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './DashboardPage.styles';
import { fetchLiveSession } from "../../utilities/services/firebase";

const DashboardPage = (props) => {
  React.useEffect(() => {
    fetchLiveSession();
  }, []);
  return <div className="DashboardPageWrapper">Dashboard</div>;
};

DashboardPage.propTypes = {
  // bla: PropTypes.string,
};

DashboardPage.defaultProps = {
  // bla: 'test',
};

export default DashboardPage;
