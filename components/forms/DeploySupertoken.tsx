import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import DataDisplay from './DataDisplay';
import SupertokenDataDisplay from './SupertokenDataDisplay';
import { getLink } from '../../utils/getLinkAddress';
import styles from './styles.module.css';

const DeploySupertoken: React.FC = (props: any) => {

  const { name, symbol, tokenAddress, setToken, deploySupertoken, tokenData, isLoading, supertoken } = props;

  console.log('name', name, 'symbol', symbol, 'here', 'isSuccess');

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
            label=""
            name="token"
          >
            <label className={styles.label}>ERC20 TOKEN ADDRESS</label>
            <Input
              placeholder='Insert ERC20 token Address'
              type="text" 
              value={tokenAddress}
              onChange={(e) => setToken(e.target.value)}
              className={styles.input}
            />
          </Form.Item>

          <DataDisplay key={'1'} name={tokenData?.name} symbol={tokenData?.symbol} address={tokenData?.address}/>

          <SupertokenDataDisplay key={'2'} name={name} symbol={symbol} address={supertoken ? supertoken : 'Deploy Supertoken'}/>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              {
                isLoading ? 'loading' : 'Deploy Supertoken'
              }
            </Button>
          </Form.Item>
        </Form>

  );
};

export default DeploySupertoken;