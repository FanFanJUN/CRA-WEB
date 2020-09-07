import React, {Component} from 'react'
import { Table, Divider, Tag } from 'antd';
import request from 'umi-request';

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
      articles: [],
      pagination: {},
    }
  }

  componentDidMount() {
    this.getDataSource();
  }

  getDataSource = (params)=> {
    request
      .post('/api/lc/SELECTLISTARTICLE', {
        data: {
          pageNum: 1,
          pageSize: 10,
          ...params,
        },
      })
      .then((response) => {
        console.log(response);
        const {data: {dataSource, pagination}} = response;
        this.setState(()=>({
          articles: dataSource,
          pagination,
        }))
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
  }

  render() {
    const { articles } = this.state;
    const columns = [
      {
        title: '文章标题',
        dataIndex: 'articleTitle',
        key: 'articleTitle',
      },
      {
        title: '文章链接',
        dataIndex: 'articleHref',
        key: 'articleHref',
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
      <div style={{textAlign: 'center', padding: '30px 30px'}}>
        <Table columns={columns} dataSource={articles} />
      </div>
         )
  }
}

export default (Demo);
