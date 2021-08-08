import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './UsersPage.styles';
import { fetchUsers } from "../../utilities/services/firebase";
import { Row, Col, PageHeader } from "antd";
import { redirectBack } from "../../utilities/navigation-helper";
import SingleUserOverviewCard from "../../components/SingleUserOverviewCard/SingleUserOverviewCard";

const UsersPage = (props) => {
  const [allUsers, setAllUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUsers().then((_allUsers) => {
      console.log(_allUsers);
      setAllUsers(_allUsers);
    });
  }, []);
  return (
    <div className="UsersPageWrapper">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="Users"
            align="middle"
            subTitle="All Users"
            onBack={redirectBack}
          />
        </Col>
      </Row>
      <Row>
        {allUsers && allUsers.map(user => {
          return <SingleUserOverviewCard key={user.id} {...user}/>
        })}
      </Row>
    </div>
  );
};

UsersPage.propTypes = {
  // bla: PropTypes.string,
};

UsersPage.defaultProps = {
  // bla: 'test',
};

export default UsersPage;
