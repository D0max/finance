import React, {useRef, useEffect} from 'react';
import { Card, Input, Typography, Row, Col, Button, Form, notification } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './Login.css'

const { Title } = Typography

const Index = (props) => {
  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus()
  }, []);

  const onFinish = (values) => {
    props.loadData(values)
    notification.success({
      message: 'You are successfully logged in'
    })
  };

  return (
    <div className="site-card-border-less-wrapper">
      <Card className="card-login">
        <Title
          level={2}
          className="auth-title"
        >
          Log in
        </Title>
        <Form
          name="basic"
          onFinish={onFinish}
          className="auth-input-box"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              size="large"
              className="login-input"
              placeholder="Username"
              ref={InputRef}
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 5,
                message: 'Length must be greater than 5'
              }
            ]}
          >
            <Input.Password
              size="large"
              className="login-input"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Row>
            <Col span={12} offset={1}>
              <Button
                type="link"
                size="middle"
                href="#"
              >
                Forgot your password?
              </Button>
            </Col>
            <Col span={3} offset={3}>
              <Button
                type="primary"
                shape="round"
                size="large"
                htmlType="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>

      </Card>
    </div>
  );
};

export default Index;
