/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-10-20 16:59:04
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-10-20 18:47:35
 * @Description  : Modal 内容区域
 * @FilePath     : /front-saas-web/src/components/CoustomModal/ModalContent.js
 */
import React, { useState } from 'react';
import styles from './index.less';
import { Input, Checkbox, Icon } from 'antd';
import classNames from 'classnames';
const { Search } = Input;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const ModalContent = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    return (
      <div className={styles.wrapcontent}>
        <div className={styles.flexcontent}>
          <div className={classNames(styles.boxLeft,styles.box)}>
            <Search placeholder="搜索" onSearch={(value) => console.log(value)} />
            <div>
              <div className={styles.checkAllBox}>
                <Checkbox
                  indeterminate={indeterminate}
                  //   onChange={this.onCheckAllChange}
                  checked={checkAll}
                >
                  全部
                </Checkbox>
              </div>
              <div className={styles.checkboxGroup}>
                <CheckboxGroup
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '30px',
                    marginTop: '10px',
                  }}
                  options={plainOptions}
                  value={checkedList}
                  // onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className={classNames(styles.boxRight, styles.box)}>
              <div className={styles.boxRightHead}>
                  <div>已选0项</div>
                  <div>清空</div>
              </div>
              <ul className={styles.ultop}>
                  <li><Icon type="close" />测试1</li>
                  <li><Icon type="close"/>测试2</li>
              </ul>
          </div>
        </div>
      </div>
    );
};

export default ModalContent;
