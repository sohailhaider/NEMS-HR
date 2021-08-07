import React from "react";
import { Layout } from "antd";
const { Sider } = Layout;

const AppSider = (props) => <Sider className="AppSiderWrapper">Sider</Sider>;

AppSider.propTypes = {
  // bla: PropTypes.string,
};

AppSider.defaultProps = {
  // bla: 'test',
};

export default AppSider;
