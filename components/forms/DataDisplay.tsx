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
    title: 'ERC20 Token Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'ERC20 Token Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'ERC20 Token Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const DataDisplay: React.FC<{key: string, name: string, symbol: string, address: string}> = ({key, name, symbol, address}) => <Table pagination={false} columns={columns} dataSource={[{key, name, symbol, address}]} />;

export default DataDisplay;