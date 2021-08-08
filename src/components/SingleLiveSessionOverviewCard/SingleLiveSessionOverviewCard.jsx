import React from "react";
// import PropTypes from "prop-types";
import { Card, Col, Descriptions, Row } from "antd";
import { redirectToSessionDetails } from "../../utilities/navigation-helper";
import Chart from "./Chart";
//import { Test } from './SingleLiveSessionOverviewCard.styles';

const SingleLiveSessionOverviewCard = ({ id, data }) => {
  return (
    <Card
      hoverable
      title={data.userName}
      onClick={() => redirectToSessionDetails(id)}
      style={{ margin: "10px" }}
    >
      <Row>
        <Descriptions column={1}>
          <Descriptions.Item label="Average HR">
            {data.avgHeartRate}
          </Descriptions.Item>
          <Descriptions.Item label="Average HR Effort">
            {data.avgHrEffort}%
          </Descriptions.Item>
          <Descriptions.Item label="Total Calories">
            {data.totalCalories} KCal
          </Descriptions.Item>
        </Descriptions>
      </Row>
      <Row>
        <Col span={24}>
          <Chart data={data} />
        </Col>
      </Row>
    </Card>
  );
};

SingleLiveSessionOverviewCard.propTypes = {
  // bla: PropTypes.string,
};

SingleLiveSessionOverviewCard.defaultProps = {
  // bla: 'test',
};

export default SingleLiveSessionOverviewCard;
