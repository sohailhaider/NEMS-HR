import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader";
import AppSider from "../../components/AppSider";

const { Content } = Layout;
const DashboardLayout = (props) => (
  <Layout>
    {console.log(props.headerTitle)}
    <AppHeader title={props.headerTitle} />
    <Layout>
      <AppSider />
      <Content>{props.children}</Content>
    </Layout>
  </Layout>
);

DashboardLayout.propTypes = {
  // bla: PropTypes.string,
};

DashboardLayout.defaultProps = {
  // bla: 'test',
};

export default DashboardLayout;
