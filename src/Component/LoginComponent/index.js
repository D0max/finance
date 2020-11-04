import React from 'react';
import { Card, Input, Typography } from "antd";
import { UserOutlined } from '@ant-design/icons';


import './Login.css'

const { Title } = Typography

const Index = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card className="card-login">
        <Title level={2}>Auth form</Title>
        <div>
          <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
          <Input size="large" placeholder="Password" prefix={<UserOutlined />} />
        </div>
      </Card>
    </div>
  );
};

export default Index;
