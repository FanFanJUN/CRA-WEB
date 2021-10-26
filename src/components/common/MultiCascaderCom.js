/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-12 10:22:43
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-10-25 15:03:24
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
import { Button, Modal } from "antd";
import ModalContent from "./ModalContent";
import VirtualizedCheckbox from "../VirtualizedCheckbox";
import { MOCKDATA, REMOCKDATA } from "./mockdata";

export default function App() {
  const [value, setValue] = React.useState(["福田区", "罗湖区"]);
  return (
    <div className="App">
      {/* <section>
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
      </section> */}
      <section>
        <header>I18n</header>
        {/* <MultiCascader
          selectAll
          data={options}
          placeholder="请选择城市"
          okText="确认"
          cancelText="取消"
          selectAllText="全选"
        /> */}
      </section>
      <Link to='/Virtable'>测试</Link>
      <Modal
      title={
        <div>
          {/* <img src={people_icon} alt="" className={styles.wimg} /> */}
          选择角色
        </div>
      }
      width={540}
      centered
      closable
      className="modalWraps"
      maskClosable={false}
      visible={false}
      footer={[
        <Button key="cancel" >
          取消
        </Button>,
        <Button key="submit" >
          确定
        </Button>,
      ]}
      >
      <ModalContent  />
    </Modal>
    <div style={{
              height: 313,
              width: 300,
              boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)',
              display: 'flex',
              // margin: '0 auto'
            }}>
    <VirtualizedCheckbox
              items={REMOCKDATA.map(opt => ({
                ...opt,
                checked: false
              }))}
              labelKey="name"
              // onOk={(checked, all, textFilter) =>
              //   this.setState({
              //     all,
              //     results: checked,
              //     canceled: false,
              //     textFilter
              //   })}
              // onCancel={() =>
              //   this.setState({
              //     all: false,
              //     results: [],
              //     canceled: true,
              //     textFilter: ''
              //   })}
              onChange={item => console.log('onChange', item)}
              rowHeight={20}
              hasOkButton={true}
              hasCancelButton={true}
              hasFilterBox={true}
              height={280}
              width={300}
    />
    </div>
    </div>
  );
}
