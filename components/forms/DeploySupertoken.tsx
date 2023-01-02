import React from 'react';
import { Button, Form, Input } from 'antd';
import DataDisplay from './DataDisplay';
import SupertokenDataDisplay from './SupertokenDataDisplay';
import styles from './styles.module.css';

const DeploySupertoken: React.FC = (props: any) => {

  const { name, symbol, tokenAddress, setToken, deploySupertoken, tokenData, isLoading, supertoken } = props;

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
         
          <label className={styles.label}>ERC20 TOKEN ADDRESS</label> 
          <Form.Item
            label=""
            name="token"
          >
            <div
              className={styles.deploy}
            >
              <Input
                placeholder='Insert ERC20 token Address'
                type="text" 
                value={tokenAddress}
                onChange={(e) => setToken(e.target.value)}
                className={styles.input}
              />
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                {
                  isLoading ? 'loading' : 'Deploy Supertoken'
                }
              </Button>
            </div>

          </Form.Item>

          {
            tokenData && <DataDisplay key={'1'} name={tokenData?.name} symbol={tokenData?.symbol} address={tokenData?.address}/>
          }

          {
            name && <SupertokenDataDisplay key={'2'} name={name} symbol={symbol} address={supertoken ? supertoken : 'Deploy Supertoken'}/>
          }

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
   
          </Form.Item>
        </Form>

  );
};

export default DeploySupertoken;