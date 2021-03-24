/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:17:46
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-01-12 17:31:48
 * @Description  : useEffect相关
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/Demo1.js
 */

import  React, { useEffect, useState , Fragment } from "react";

import TestUseEffect from "./TestUseEffect";

 const Demo1 = () => {
   const [count, setcount] = useState(0);

   // useEffect 第二个参数  为 []只执行一次
   /* 不希望useEffect()每次渲染都执行，这时可以使用它的第二个参数，使用一个数组指定副效应函数的依赖项，只有依赖项发生变化，才会重新渲染  shouldComponentUpdate*/
   /* componentDidMount   componentWillMount  shouldComponentUpdate */
   useEffect(() => {
     console.log("component did mount");
     const a = setTimeout(() => {
       setcount((x) => x + 1);
     }, 1000);
     return () => {
       console.log("component will unmount");
       clearTimeout(a);
     };
   }, []);

   return (
     <Fragment>
       <h1>{count}</h1>
       <TestUseEffect />
     </Fragment>);
 };

 export default Demo1;