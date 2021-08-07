import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader";

const { Content } = Layout;
const PublicPageLayout = (props) => (
  <Layout>
    <AppHeader title={props.headerTitle} />
    <Layout>
      <Content>{props.children}</Content>
    </Layout>
  </Layout>
);

PublicPageLayout.propTypes = {
  // bla: PropTypes.string,
};

PublicPageLayout.defaultProps = {
  // bla: 'test',
};

export default PublicPageLayout;
