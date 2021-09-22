/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-12 10:22:43
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-09-18 16:04:49
 * @Description  : 级联组件
 * @FilePath     : /CRA-WEB/src/components/common/MultiCascaderCom.js
 */

import * as React from "react";
import "./styles.css";
import MultiCascader from "antd-multi-cascader";
import "antd/dist/antd.css";
import "antd-multi-cascader/dist/index.css";
import options from "./options";
import { Link } from "react-router-dom";

export default function App() {
  const [value, setValue] = React.useState(["福田区", "罗湖区"]);
  return (
    <div className="App">
      <section>
        <header>Form Control</header>
        <MultiCascader
          value={value}
          onChange={setValue}
          data={options}
          placeholder="Select Cities"
        />
      </section>
      <section>
        <header>Select All</header>
        <MultiCascader data={options} placeholder="Select Cities" selectAll />
      </section>
      <section>
        <header>Allow Clear</header>
        <MultiCascader data={options} placeholder="Select Cities" allowClear />
      </section>
      <section>
        <header>Disabled</header>
        <MultiCascader
          disabled
          value={["深圳市"]}
          data={options}
          placeholder="Select Cities"
        />
      </section>
      <section>
        <header>I18n</header>
        <MultiCascader
          selectAll
          data={options}
          placeholder="请选择城市"
          okText="确认"
          cancelText="取消"
          selectAllText="全选"
        />
      </section>
      <Link to='/Virtable'>测试</Link>
    </div>
  );
}
