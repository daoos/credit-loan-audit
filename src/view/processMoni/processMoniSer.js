import apiService from '../../util/apiServer'
import appConstant from '../../util/constant'

var URL = {
  // 工作流接口-------------------------------------------
  // 查询流程监控
  getProcessMonitorList: "/creauditInfo/approvalTrajectory",




  // 转分派任务轨迹
  // getTransmitHistoryList: "bpmService/getTransmitHistoryList",
  getTransmitHistoryList: "get::/creauditInfo/getTransmitHistoryList",

  // 查询审批流程轨迹
  getProcessTraceList: "get::/creauditInfo/getProcessTraceList",
  // 查询质检流程轨迹
  // getQTProcessTraceList:'/insConclusion/getInsProcessTraceList',
  // 转办任务
  transmitTask: "/creauditInfo/transmitTask",
 
};

// var processMoniSer = apiService(appConstant.baseUrl_common2).build(URL);
var processMoniSer = apiService(appConstant.baseUrl_common).build(URL);

export default processMoniSer