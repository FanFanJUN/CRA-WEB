import React from 'react'
import { Button } from 'antd';
import request from 'umi-request';

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
      .catch((error) => {
        console.log(error);
      });
}

renderItem = () => {
    const {articles} = this.state;
    return articles.map((item)=><List className="my-list">
      <Item extra={<a target="_blank" href={item.articleHref}>查看</a>}>{item.articleTitle}</Item>
                                </List>);
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