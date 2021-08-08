import { Col } from "antd";
import React from "react";
// import PropTypes from "prop-types";
import CustomCard from "../../../components/CustomCard/CustomCard";
import SingleUserSessionOverviewCard from "../../../components/SingleUserSessionOverviewCard/SingleUserSessionOverviewCard";
//import { Test } from './UserSessionsOverviewCard.styles';

const UserSessionsOverviewCard = ({ sessions }) => (
  <CustomCard title="User Sessions">
    {sessions.map((session, index) => {
      return (
        <SingleUserSessionOverviewCard key={index} {...session} index={index} />
      );
    })}
    {sessions.length === 0 && <Col align="center" span={24}>No sessions history found.</Col>}
  </CustomCard>
);

UserSessionsOverviewCard.propTypes = {
  // bla: PropTypes.string,
};

UserSessionsOverviewCard.defaultProps = {
  // bla: 'test',
};

export default UserSessionsOverviewCard;
