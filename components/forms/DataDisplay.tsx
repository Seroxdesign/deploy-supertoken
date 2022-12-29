import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  symbol: number;
  address: string;
}


const columns: ColumnsType<DataType> = [
  {
    title: 'Token Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Token Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Token Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    symbol: 32,
    address: 'New York No. 1 Lake Park',
  },
];

const DataDisplay: React.FC = () => <Table columns={columns} dataSource={data} />;

export default DataDisplay;