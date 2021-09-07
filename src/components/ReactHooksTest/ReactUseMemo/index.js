/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-08-10 11:01:00
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-08-10 11:03:07
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/ReactUseMemo/index.js
 */
import React, { useState, useEffect, useRef, useMemo } from "react";
import UseMemoCounts from "./Counts";

export default function ParentComponentFroMemo() {
  
  const [times, setTimes] = useState(0);
  const useMemoRef = useRef(0);

  const incrementUseMemoRef = () => useMemoRef.current++;

  // uncomment the next line to test that <UseMemoCounts /> will re-render every t ime the parent re-renders.
  // const memoizedValue = useMemoRef.current++;

// the next line ensures that <UseMemoCounts /> only renders when the times value changes
const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  
  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-md mt-5 dark:border-yellow-200 max-w-lg m-auto pb-10 bg-gray-900">
      
        <div className="mt-4 text-center">
          <button
            className="bg-indigo-200 py-2 px-10 rounded-md"
            onClick={() => setTimes(times+1)}
          >
            Force render
          </button>

          <UseMemoCounts memoizedValue={memoizedValue} />
        </div>
    </div>
  );
}