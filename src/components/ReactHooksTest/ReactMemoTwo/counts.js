/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-08-10 10:36:26
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-08-10 11:06:23
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/ReactMemoTwo/counts.js
 */

import React, { useRef } from "react";
// function Counts() {
//   const renderCount = useRef(0);
//   return (
//     <div className="mt-3">
//       <p className="dark:text-white">
//         Nothing has changed here but I've now rendered:{" "}
//         <span className="dark:text-green-300 text-grey-900">
//           {(renderCount.current++)} time(s)
//         </span>
//       </p>
//     </div>
//   );
// }
// export default React.memo(Counts);


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
