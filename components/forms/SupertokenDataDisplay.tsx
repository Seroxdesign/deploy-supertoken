import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNetwork } from 'wagmi';

interface DataType {
  key: string;
  name: string;
  symbol: string;
  address: string;
}

const SupertokenDataDisplay: React.FC<{key: string, name: string, symbol: string, address: string}> = ({key, name, symbol, address}) => {

  const { chain } = useNetwork()

  console.log(chain)

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
      render: (text) => text !== 'TBD' ? <a
      target={"_blank"}
      href={`https://console.superfluid.finance/${chain?.network!}/supertokens/${text}?tab=streams`} 
      rel={"noreferrer"}>{text}</a> : <p>TBD</p>,
    },
  ];

  return (
    <Table
    style={{marginBottom: '1em'}}
    pagination={false}
    columns={columns}
    dataSource={[{key, name, symbol, address}]}
    />
  )
}


export default SupertokenDataDisplay;
