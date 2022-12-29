import React from 'react';
import { Button, Result } from 'antd';

const Fail: React.FC<{message: string}> = () => (
  <Result
    status="error"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);

export default Fail;