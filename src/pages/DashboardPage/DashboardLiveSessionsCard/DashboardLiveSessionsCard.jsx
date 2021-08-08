import { Col, Row } from "antd";
import React from "react";
import SingleLiveSessionOverviewCard from "../../../components/SingleLiveSessionOverviewCard/SingleLiveSessionOverviewCard";
// import PropTypes from "prop-types";
//import { Test } from './DashboardLiveSessionsCard.styles';
import { fetchLiveSession } from "../../../utilities/services/firebase";

const DashboardLiveSessionsCard = (props) => {
  const [liveSessions, setLiveSessions] = React.useState([]);
  React.useEffect(() => {
    fetchLiveSession().then((_liveSessions) => {
      setLiveSessions(_liveSessions);
    });
  }, []);

  return (
    <Row className="DashboardLiveSessionsCardWrapper">
      {liveSessions.map((liveSession, index) => {
        return (
          <Col key={`session-overview-${index}`} span={8}>
            <SingleLiveSessionOverviewCard {...liveSession} />
          </Col>
        );
      })}{liveSessions.map((liveSession, index) => {
        return (
          <Col key={`session-overview-${index}`} span={8}>
            <SingleLiveSessionOverviewCard {...liveSession} />
          </Col>
        );
      })}{liveSessions.map((liveSession, index) => {
        return (
          <Col key={`session-overview-${index}`} span={8}>
            <SingleLiveSessionOverviewCard {...liveSession} />
          </Col>
        );
      })}
    </Row>
  );
};

DashboardLiveSessionsCard.propTypes = {
  // bla: PropTypes.string,
};

DashboardLiveSessionsCard.defaultProps = {
  // bla: 'test',
};

export default DashboardLiveSessionsCard;
