import React from "react";
import PropTypes from "prop-types";
import { Card, Descriptions } from "antd";
import { Link } from "react-router-dom";
//import { Test } from './SingleUserSessionOverviewCard.styles';

const SingleUserSessionOverviewCard = (props) => (
  <Card>
    {console.log(props)}
    <Descriptions column={3}>
      <Descriptions.Item label="Session Date">date</Descriptions.Item>
      <Descriptions.Item label="Duration">Minutes</Descriptions.Item>
      <Descriptions.Item ><Link to={`/session/${props.userId}?v=${props.index}`}>DETAILS</Link></Descriptions.Item>
    </Descriptions>
  </Card>
);

SingleUserSessionOverviewCard.propTypes = {
  // bla: PropTypes.string,
};

SingleUserSessionOverviewCard.defaultProps = {
  // bla: 'test',
};

export default SingleUserSessionOverviewCard;
