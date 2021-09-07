/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-08-06 14:50:56
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-08-11 15:53:03
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/ReactCallback/index.js
 */
import React, { useCallback, useState } from "react";
// 子组件
function Childs(props) {
  console.log("子组件渲染了");
  return (
    <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </>
  );
}
const Child = React.memo(Childs);

function App() {
  const [title, setTitle] = useState("这是一个 title");
  const [subtitle, setSubtitle] = useState("我是一个副标题");
  const callback = () => {
    setTitle("标题改变了");
  };
  return (
    <div className='App'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
      {/* 子组件渲染 */}
      {/* <Child onClick={()=> setTitle("标题改变了")} name='洪湖' />  */}
      {/* 子组件不渲染 */}
      <Child onClick={useCallback(callback, [])} name='桃桃' />
    </div>
  );
}

export default App;
