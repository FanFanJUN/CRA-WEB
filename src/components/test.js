/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:00:11
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-03-27 11:20:17
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/test.js
 */
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

  componentWillMount() {
    this.props.show();
  }

  componentDidMount() {
    // this.getDataSource();
    this.props.hide();
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
        <iframe src ='https://tecmp.changhong.com/sei-report/ureport/report?_u=p&_type=1' style={{
          padding: '10px',
          width: '100%',
          height: window.document.documentElement.clientHeight
        }}/>
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
