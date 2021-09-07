/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-08-10 10:35:51
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-08-10 11:08:12
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/ReactMemoTwo/index.js
 */import React, { useRef, useMemo } from "react";
import UseMemoCounts from "./counts";
import { useState, useEffect } from "react";
import { Button } from "antd";

export default function ParentComponent() {
  const [cheeseType, setCheeseType] = useState("");
  const [wine, setWine] = useState("");
  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case 'M':
        return setWine('CABERNET');
      case 'C':
        return setWine('CHARDONAY');
      case 'P':
        return setWine('MERLOT');
      default:
        return 'CHARDONAY';
    }
  };

  const [times, setTimes] = useState(0);
  const useMemoRef = useRef(0);

  const incrementUseMemoRef = () => useMemoRef.current++;

  // uncomment the next line to test that <UseMemoCounts /> will re-render every t ime the parent re-renders.
  // const memoizedValue = useMemoRef.current++;

// the next line ensures that <UseMemoCounts /> only renders when the times value changes
const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      whichWineGoesBest();
    }
    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-center dark:text-gray-400 mt-10">
          Without React.memo() or useMemo()
        </h3>
      <h1 className="font-semibold text-2xl dark:text-white max-w-md text-center">
        Select a cheese and we will tell you which wine goes best!
      </h1>
      <div className="flex flex-col gap-4 mt-10">
        <Button onClick={() => setCheeseType('M')}>M</Button>
        <Button  onClick={() => setCheeseType('C')} >C</Button>
        <Button  onClick={() => setCheeseType('P')}>P</Button>
      </div>
      {cheeseType && (
        <p className="mt-5 dark:text-green-400 font-semibold">
          For {cheeseType}, <span className="dark:text-yellow-500">{wine}</span>{" "}
          goes best.
        </p>
      )}
      <div className="mt-4 text-center">
          <button
            className="bg-indigo-200 py-2 px-10 rounded-md"
            onClick={() => setTimes(times+1)}
          >
            Force render
          </button>

          <UseMemoCounts memoizedValue={memoizedValue} />
        </div>
      {/* <Counts /> */}
    </div>
  );
}