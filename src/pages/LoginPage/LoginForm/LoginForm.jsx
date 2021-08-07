import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './LoginForm.styles';
import { Form, Input, Button, Checkbox, Alert, Row, Col } from "antd";

const LoginForm = (props) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={props.handleLoginSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      {props.errorMessage && (
        <Row>
          <Col span={8} />
          <Col span={16}>
            <Alert message={props.errorMessage} type="error" />
            <br />
          </Col>
        </Row>
      )}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = {
  // bla: PropTypes.string,
};

LoginForm.defaultProps = {
  // bla: 'test',
};

export default LoginForm;
