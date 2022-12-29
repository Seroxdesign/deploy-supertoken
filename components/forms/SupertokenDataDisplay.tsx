import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  symbol: string;
  address: string;
}


const columns: ColumnsType<DataType> = [
  {
    title: 'Super Token Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Super Token Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Super Token Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const SupertokenDataDisplay: React.FC<{key: string, name: string, symbol: string, address: string}> = ({key, name, symbol, address}) => <Table columns={columns} dataSource={[{key, name, symbol, address}]} />;

export default SupertokenDataDisplay;