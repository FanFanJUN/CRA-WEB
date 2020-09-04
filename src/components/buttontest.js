import React, {Fragment} from 'react'
import { NavBar, Icon, List, Pagination } from 'antd-mobile';
import request from 'umi-request';

const Item = List.Item;
const locale = {
    prevText: '上一页',
    nextText: '下一页',
  };
class Mudle extends React.Component {
constructor(props) {
super(props);
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
      .catch(function (error) {
        console.log(error);
      });
}

renderItem = () => {
    const {articles} = this.state;
    return articles.map((item)=>{
    return <List className="my-list">
        <Item extra={<a target="_blank" href={item.articleHref}>查看</a>}>{item.articleTitle}</Item>
      </List>
    });
}

render() {
    const { pagination } = this.state;
return (
    <div style={{height: '714px'}}>
    <NavBar
      mode="dark"
    //   leftContent="Back"
    //   icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
    //   rightContent={[
    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
    //     <Icon key="1" type="ellipsis" />,
    //   ]}
    >
    知识页签
    </NavBar>
    {this.renderItem()}
    <Pagination total={parseInt(pagination.total/ pagination.pageSize) + 1} current={pagination.current} locale={locale} />
    </div>  
);
}
}

export default (Mudle);