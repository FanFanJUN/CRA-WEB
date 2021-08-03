/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-08-03 10:08:55
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-08-03 10:34:32
 * @Description  : setState
 * @FilePath     : /CRA-WEB/src/components/TestDemo/index.js
 */
import React, { useState } from "react";

class Test extends React.PureComponent {
  state = {
    count: 0,
  };

  // handleClick = () => {
  //   const fans = Math.floor(Math.random() * 10);
  //   console.log(fans);
  //   setTimeout(() => {
  //     console.log("宏任务触发");
  //   });
  //   Promise.resolve().then(() => {
  //     console.log("微任务触发");
  //   });
  //   this.setState(
  //     {
  //       count: this.state.count + fans,
  //     },
  //     () => {
  //       console.log("新增粉丝数:", fans);
  //     }
  //   );
  // };

  // handleClick = () => {
  //   const fans = Math.floor(Math.random() * 10)
  //   console.log('开始运行')
  //   this.setState({
  //     count: this.state.count + fans
  //   }, () => {
  //     console.log('新增粉丝数:', fans)
  //   })
  //   console.log('结束运行')
  // }


  handleClick = () => {
    setTimeout(() => {
      const fans = Math.floor(Math.random() * 10)
      console.log('开始运行')
      this.setState({
        count: this.state.count + fans
      }, () => {
        console.log('新增粉丝数:', fans)
      })
      console.log('结束运行')
    })
  }

  render() {
    const { count } = this.state;
   return <h1 onClick={this.handleClick} style={{textAlign: 'center'}}>车阿斯{count}</h1>;
  }
}

export default Test;
