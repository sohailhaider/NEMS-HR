import React from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import {
  DashboardOutlined,
  LogoutOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import _ from "lodash";
import { setLogout } from "../../store/slices/loginSlice";
import { useDispatch } from "react-redux";

const { Sider } = Layout;

const MENUS = [
  {
    title: "Dashboard",
    icon: <DashboardOutlined />,
    to: "/",
  },
  {
    title: "Users",
    icon: <UserOutlined />,
    to: "/users",
  },
];
const AppSider = (props) => {
  let location = useLocation();
  const [selectedKeys, setSelectedKey] = React.useState([]);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  // makes selection of corret menu based on location
  React.useEffect(() => {
    const newSelection = _.findIndex(MENUS, {
      to: location.pathname,
    });
    if (!selectedKeys.includes(String(newSelection)))
      setSelectedKey([String(newSelection)]);
  }, [location.pathname, selectedKeys]);

  return (
    <Sider className="AppSiderWrapper">
      <div>
        <Menu selectedKeys={selectedKeys} mode="inline" theme="dark">
          {MENUS.map((menu, index) => {
            return (
              <Menu.Item key={index} icon={menu.icon}>
                {menu.to ? <Link to={menu.to}>{menu.title}</Link> : menu.title}
              </Menu.Item>
            );
          })}
          <Menu.Item
            onClick={handleLogout}
            key="logout"
            icon={<LogoutOutlined />}
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

AppSider.propTypes = {
  // bla: PropTypes.string,
};

AppSider.defaultProps = {
  // bla: 'test',
};

export default AppSider;
