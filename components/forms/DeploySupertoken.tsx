import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import DataDisplay from './DataDisplay';
import styles from './styles.module.css';

const DeploySupertoken: React.FC = (props: any) => {

  const { name, symbol, tokenAddress, setToken, deploySupertoken } = props;

  console.log('name', name, 'symbol', symbol, 'here');

  const onFinish = (e: Event) => {
    deploySupertoken(e)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.form}
    >
      
      <Form.Item
        label="ERC20 Token Address"
        name="token"
        rules={[{ required: true, message: '' }]}
      >
        <Input
          type="text" 
          value={tokenAddress}
          onChange={(e) => setToken(e.target.value)}
          className={styles.input}
        />
      </Form.Item>

      <DataDisplay />

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Deploy Supertoken
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DeploySupertoken;