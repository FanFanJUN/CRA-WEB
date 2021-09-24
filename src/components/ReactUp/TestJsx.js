/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-09-22 15:19:50
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-09-22 15:22:30
 * @Description  : TODO
 * @FilePath     : /CRA-WEB/src/components/ReactUp/TestJsx.js
 */
import React from 'react';

const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]

const TextComponent = ()=> <div> hello , i am function component </div> 

class TestJsx extends React.Component{
    status = false /* 状态 */
    renderFoot=()=> <div> i am foot</div>
    render(){
        /* 以下都是常用的jsx元素节 */
        return <div style={{ marginTop:'100px', textAlign: 'center' }}   >
          { /* element 元素类型 */ }
          <div>hello,world</div>
          { /* fragment 类型 */ }
          <React.Fragment>
              <div> 👽👽 </div>
            </React.Fragment>
          { /* text 文本类型 */ }
          my name is alien 
            { /* 数组节点类型 */ }
          { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }
          { /* 组件类型 */ }
          <TextComponent/>
          { /* 三元运算 */  }
          { this.status ? <TextComponent /> : <div>三元运算</div> }
          { /* 函数执行 */ } 
          { this.renderFoot() }
          <button onClick={()=> console.log( this.render() )} >打印render后的内容</button>
        </div>
    }
}

export default TestJsx;