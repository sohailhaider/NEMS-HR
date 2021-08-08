import React from "react";
import DashboardMapCard from "./DashboardMapCard";
import { Row, Col, PageHeader } from "antd";
import CustomCard from "../../components/CustomCard/CustomCard";
import DashboardLiveSessionsCard from "./DashboardLiveSessionsCard/DashboardLiveSessionsCard";
import DashboardUserStatisticsCard from "./DashboardUserStatisticsCard/DashboardUserStatisticsCard";
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

      <CustomCard title="USER STATISTICS">
        <DashboardUserStatisticsCard />
      </CustomCard>
      <CustomCard title="LIVE SESSION">
        <DashboardLiveSessionsCard />
      </CustomCard>
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
