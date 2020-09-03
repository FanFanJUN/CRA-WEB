import React, {Component} from 'react'
import { Table, Divider, Tag } from 'antd';
import {withRouter} from "react-router-dom";


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

/**
 * @description 测试页面
 * @author LC@1981824361
 * @date 2020-09-03
 * @class Demo
 * @extends {Component}
 */
class Demo extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];
    return (
        <div  style={{textAlign: 'center', padding: '30px 30px'}} >
           <Table columns={columns} dataSource={data} />
          </div>
         )
  }
}

export default withRouter(Demo);
