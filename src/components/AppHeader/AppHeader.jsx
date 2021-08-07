import React from "react";
import { Layout, Row, Col } from "antd";
const { Header } = Layout;

const AppHeader = (props) => (
  <Header style={{ color: "white" }}>
    <Row>
      <Col span={8}>
        <h1 style={{ color: "white" }}>NMES HR</h1>
      </Col>
      <Col align="middle" span={8}>
        {props.title? props.title: 'Dashboard'}
      </Col>
      <Col align="end" span={8}>
        Hello Admin Name
      </Col>
    </Row>
  </Header>
);

AppHeader.propTypes = {
  // bla: PropTypes.string,
};

AppHeader.defaultProps = {
  // bla: 'test',
};

export default AppHeader;
