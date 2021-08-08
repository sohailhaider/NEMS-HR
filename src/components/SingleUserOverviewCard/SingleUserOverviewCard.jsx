import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './SingleUserOverviewCard.styles';
import { Row, Descriptions, Card } from "antd";
import { redirectToUserDetails } from "../../utilities/navigation-helper";

const SingleUserOverviewCard = ({id, data}) => (
  <Card
    hoverable
    title={data.userName}
    onClick={() => redirectToUserDetails(id)}
    style={{ margin: "10px" }}
  >
    <Row>
      <Descriptions column={1}>
        <Descriptions.Item label="Platform">
          {data.platform}
        </Descriptions.Item>
        <Descriptions.Item label="Total Number of Sessions">
          {data.sessionHistory.length}
        </Descriptions.Item>
      </Descriptions>
    </Row>
  </Card>
);

SingleUserOverviewCard.propTypes = {
  // bla: PropTypes.string,
};

SingleUserOverviewCard.defaultProps = {
  // bla: 'test',
};

export default SingleUserOverviewCard;
