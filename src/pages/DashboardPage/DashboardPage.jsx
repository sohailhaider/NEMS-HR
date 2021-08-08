import React from "react";
import DashboardMapCard from "./DashboardMapCard";
import { Row, Col, Divider, PageHeader } from "antd";
import CustomCard from "../../components/CustomCard/CustomCard";
// import PropTypes from "prop-types";
//import { Test } from './DashboardPage.styles';

const DashboardPage = (props) => {
  return (
    <div className="DashboardPageWrapper">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="Dashboard"
            align="middle"
            subTitle="A Dashboard to view active sesions and information"
          />
        </Col>
      </Row>

      <CustomCard title="GEO LOCATIONS">
        <DashboardMapCard />
      </CustomCard>

      <CustomCard title="USER STATISTICS">asdf</CustomCard>
      <CustomCard title="LIVE SESSION"></CustomCard>
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
