// /**
//  * 审批页面集中在这个页面写
//  */

// import React from 'react';
// import Approve from "../commons/components/Approve";
// import {host} from "../configs/DefaultConfig";
// import {WorkFlow} from "suid";
// import {CloseCurrent} from "@/commons/utils/CommonUtils";
// import queryString from 'query-string'
// import PurchaseOrderEdit from '../components/PurchaseOrder/edit/PurchaseOrderEdit'

// // 采购订单审核明细
// export class PurchaseOrderDetailApprove extends React.Component {
//     handleClose = () => {
//         CloseCurrent();
//     };
//     render () {
//          let afterUrl = queryString.parse(window.location.search);
//         return (
//             <WorkFlow.Approve
//                 businessId={afterUrl.id}
//                 taskId={afterUrl.taskId}
//                 instanceId={afterUrl.instanceId}
//                 flowMapUrl="flow-web/design/showLook"
//                 submitComplete={this.handleClose}
//             >
//                 <PurchaseOrderEdit
//                     isInFlow={1}
//                     showDetail={1}
//                     pageState={'detail'}
//                 />
//             </WorkFlow.Approve>
//         );
//     }
 

// }
// //采购订单流程中编辑
// export class PurchaseOrderEditApprove extends React.Component {
//     handleSave= ()=>{
//     //这里必须返回一个promise结果
//         return this.PurchaseOrderEdit.toDoNext();
//     };
//     handleClose = () => {
//         CloseCurrent();
//     };
//     render() {
//         let afterUrl = queryString.parse(window.location.search);
//         return (
//             <WorkFlow.Approve
//                 businessId={afterUrl.id}
//                 taskId={afterUrl.taskId}
//                 instanceId={afterUrl.instanceId}
//                 flowMapUrl="flow-web/design/showLook"
//                 beforeSubmit={this.handleSave}
//                 submitComplete={this.handleClose}
//             >
//                 <PurchaseOrderEdit
//                     onRef={ref => this.PurchaseOrderEdit = ref}
//                     isInFlow={1}
//                     pageState={'edit'}
//                 />
//             </WorkFlow.Approve>
//         );
//     }
// }

