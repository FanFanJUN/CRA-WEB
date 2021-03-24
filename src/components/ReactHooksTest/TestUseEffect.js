/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-12 16:41:21
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-01-12 17:56:55
 * @Description  : useeffectsheng
 * @FilePath     : /CRA-WEB/src/components/ReactHooksTest/testUseEffect.js
 */
import React, { useEffect, useState } from 'react';

function TestUseEffect() {
    const [count, setcount] = useState('初始化');
    const [count1, setcount1] = useState('初始化');
    const a = 9;
    const promise1 = () => {
      return new Promise((resolve, reject) => {
        console.log("new promise begin 1 立即执行");
        if (a < 10) {
          resolve("resole sucess");
        }
        reject(new Error("error"));
      });
    }; 

    const promise2 = () => {
        return  new Promise((resolve, reject) => {
            console.log('new promise begin 2 立即执行');
            if(a > 1) {
                resolve('resole sucess a> 1');
            }
            reject(new Error('error'));
        })
    } 

    useEffect( () => {
        async function dealPromise1() {
           const res = await promise1();
           console.log("promise1", res);
           setcount(res);
        }
        async function dealPromise2() {
            const res = await promise2();
            console.log("promise2", res);
            setcount1(res);
         }
        dealPromise1();
        dealPromise2();
        // await promise1;
        // await promise2;
    }, [])
    return <h1>{count}</h1>;
}

export default TestUseEffect;