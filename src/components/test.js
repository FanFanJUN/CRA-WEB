import React, {Component} from 'react'
import { Table, Divider } from 'antd';
import request from 'umi-request';
import { connect } from 'react-redux';
import { show, hide } from '../configs/SharedReducer';


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
    this.props.show();
    request
      .post('/api/lc/SELECTLISTARTICLE', {
        data: {
          pageNum: 1,
          pageSize: 10,
          ...params,
        },
      })
      .then((response) => {
        const {data: {dataSource, pagination}} = response;
        this.setState(()=>({
          articles: dataSource,
          pagination,
        }))
        this.props.hide();
      })
      .catch((error) => {
        this.props.hide();
      });
  }

  componentWillMount() {
  }

  render() {
    const { articles, pagination } = this.state;
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
        <Table 
          columns={columns} 
          dataSource={articles}
          pagination={{...pagination}} 
        />
      </div>
         )
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    show: () => {
      dispatch(show());
    },
    hide: () => {
      dispatch(hide());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
