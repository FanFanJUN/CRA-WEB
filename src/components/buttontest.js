/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:56:53
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-10-26 16:13:30
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/buttontest.js
 */
import React from "react";
import { Button, Card } from "antd";
import styles  from './index.module.less';
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
    const title = () => {
      return (<div className={styles.cardtitle}>
        <span className={styles.lefttitle}>安全</span>
        <span className={styles.righttitle}>
          安全运行 153 天
        </span>
      </div>)
    }
    return (<div className={styles.article}>
      <Card title={title()} bordered={false}>
      <div className={styles.wrap}>
      <div className={styles.wrapcontent}>
        <span className={styles.uptitle}>设备事故</span>
        <span className={styles.downtitle}>0</span>
      </div>
      <div>
        <span className={styles.uptitle}>设备事故</span>
        <span className={styles.downtitle}>0</span>
      </div>
      <div>
        <span className={styles.uptitle}>设备事故</span>
        <span className={styles.downtitle}>0</span>
      </div>
      <div>
        <span className={styles.uptitle}>设备事故</span>
        <span className={styles.downtitle}>0</span>
      </div>
    </div></Card>
    </div>);
}
}

export default Mudle;
