import React from "react";


function Child(props) {
    const { name } = props;
    console.log('父组件渲染， 子组件渲染了吗');
    return (
        <h1>这是子组件渲染</h1>
    )
}

export default React.memo(Child);