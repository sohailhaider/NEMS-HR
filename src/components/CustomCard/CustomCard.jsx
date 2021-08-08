import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './CustomCard.styles';
import { Card, Row, Col } from "antd";

const CustomCard = (props) => (
  <div>
    <Card
      title={
        <Col align="middle" span={24}>
          {String(props.title).toUpperCase()}
        </Col>
      }
      style={{ margin: "10px 20px" }}
    >
      <Row>
        <Col span={24}>{props.children}</Col>
      </Row>
    </Card>
  </div>
);

CustomCard.propTypes = {
  // bla: PropTypes.string,
};

CustomCard.defaultProps = {
  // bla: 'test',
};

export default CustomCard;
