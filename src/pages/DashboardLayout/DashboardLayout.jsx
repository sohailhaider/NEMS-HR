import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader";
import AppSider from "../../components/AppSider";
import { useSelector } from "react-redux";
import { redirectToLogin } from "../../utilities/navigation-helper";

const { Content } = Layout;
const DashboardLayout = (props) => {
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isLogin && redirectToLogin()}
      <AppHeader title={props.headerTitle} />
      <Layout>
        <AppSider />
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  // bla: PropTypes.string,
};

DashboardLayout.defaultProps = {
  // bla: 'test',
};

export default DashboardLayout;
