import React from "react";

/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-08-10 11:01:29
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-08-10 11:03:22
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/ReactUseMemo/Counts.js
 */
function UseMemoCounts({memoizedValue}) {
    return (
      <div className="mt-3">
        <p className="dark:text-white max-w-md">
          I'll only re-render when you click <span className="font-bold text-indigo-400">Force render.</span> 
          </p>
        <p className="dark:text-white">I've now rendered: <span className="text-green-400">{memoizedValue} time(s)</span> </p>
      </div>
    );
  }
  export default UseMemoCounts;