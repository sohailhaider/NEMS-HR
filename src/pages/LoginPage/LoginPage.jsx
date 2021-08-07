import { Row, Col } from "antd";
import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { fetchLoginUser } from "../../utilities/services/authentication";
import { redirectToDashboard } from "../../utilities/navigation-helper";
import { setLoggedIn } from "../../store/slices/loginSlice";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleLoginSubmit = async (values) => {
    const fetchedUser = await fetchLoginUser(values.username, values.password);
    if (fetchedUser) {
      await setErrorMessage("");
      await dispatch(setLoggedIn(fetchedUser));
      await redirectToDashboard();
    } else {
      await setErrorMessage("Invalid Username/Password");
    }
  };
  return (
    <div className="LoginPageWrapper" style={{ marginTop: "100px" }}>
      <Row>
        <Col span={10} />
        <Col span={12}>
          <h1 style={{ marginBottom: "30px" }}>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <LoginForm
            handleLoginSubmit={handleLoginSubmit}
            errorMessage={errorMessage}
          />
        </Col>
      </Row>
    </div>
  );
};

LoginPage.propTypes = {
  // bla: PropTypes.string,
};

LoginPage.defaultProps = {
  // bla: 'test',
};

export default LoginPage;
