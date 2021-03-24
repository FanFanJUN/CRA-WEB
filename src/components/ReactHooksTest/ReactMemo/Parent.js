import React, { Fragment, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [title, settitle] = useState("测试");
  return (<div style={{textAlign: 'center', fontSize: '20px'}}>
    {title}
    <br/>
    <a onClick={() => settitle('修改')}>点击</a>
    <Child name='小明'/>
  </div>);
};

export default Parent;
