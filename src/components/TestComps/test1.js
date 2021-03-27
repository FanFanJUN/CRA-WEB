/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-03-24 09:44:02
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-03-25 16:50:26
 * @Description  : 虚表
 * @FilePath     : /CRA-WEB/src/components/TestComps/test1.js
 */
import React, { Fragment } from "react";
import VirtualTable from "../VirtualTable";
import './index.less';

const dataSource = new Array(1000)
  .join(',')
  .split(',')
  .map((_, inx) => ({
    key: inx,
    name: 'John BrownJohn BrownJohn BrownJohn',
    name1: 'John',
    name2: 'Brown',
    name3: 'John',
  }));


  const columns = [
    {
      title: 'Full Name0',
      width: 202,
      dataIndex: 'name',
      fixed: 'left',
    },
    {
      title: 'Full Name3',
      width: 202,
      dataIndex: 'name3',
      resizable: true
    },
    {
      title: 'Full Name2',
      width: 202,
      dataIndex: 'name2',
    },
    {
      title: 'Full Name1',
      dataIndex: 'name1',
    },
  ];


export default function Test1 () {
    return (
      <div className='center'>
        <VirtualTable 
          columns={columns} 
          data={dataSource} 
          height={500} 
          width={700} 
        />
      </div> 
    )
}