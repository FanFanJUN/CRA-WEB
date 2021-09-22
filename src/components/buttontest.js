/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:56:53
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-09-17 10:02:13
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/buttontest.js
 */
import React from "react";
import { Button } from "antd";

class Mudle extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    for (let index = 0; index < 3; index++) {
      setTimeout(() => {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(index, this.state.count);
          });
      }, 0);
    }
  }

  render() {
      console.log(this.state.count);
    return <Button type='primary'>测试</Button>;
  }
}

export default Mudle;
