import React from 'react';
import { Button, Result } from 'antd';

const Success: React.FC<{message: string, link: string, address: string}> = ({message, link, address}) => (
  <Result
    status="success"
    style={{
      maxWidth: '50vw'
    }}
    extra={[
      <h4 key={'message'}>{message}</h4>,
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);

export default Success;