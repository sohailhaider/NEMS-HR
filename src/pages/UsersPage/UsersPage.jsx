import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './UsersPage.styles';
import { fetchUsers } from "../../utilities/services/firebase";

const UsersPage = (props) => {
  React.useEffect(() => {
    fetchUsers();
  }, []);
  return <div className="UsersPageWrapper">Test content</div>;
};

UsersPage.propTypes = {
  // bla: PropTypes.string,
};

UsersPage.defaultProps = {
  // bla: 'test',
};

export default UsersPage;
