import Vue from 'vue'
import Router from 'vue-router'
// 头部导航
import myHead from '@/view/header'
/*初审审批*/
import taskInWaitting from '@/view/FirstTrail/taskInWaitting'
/*备注信息*/
import remark from '@/view/FirstTrail/detailComponent/remark'
/*实地征信*/
import creditInvestigation from '@/view/FirstTrail/detailComponent/creditInvestigation'
/*借款人资料*/
import borrowerInformation from '@/view/FirstTrail/detailComponent/borrowerInformation'
/*申请信息*/
import applicationInformation from '@/view/FirstTrail/detailComponent/applicationInformation'
// 工作台
import workbench from '@/view/FirstTrail/workbench'
// 分屏
import SplitScreen from '@/view/FirstTrail/SplitScreen'
// 影像资料
import AudioVisual from '@/view/FirstTrail/detailComponent/AudioVisual'
// 信审表
import CreditForm from '@/view/FirstTrail/detailComponent/CreditForm'
// 登录页
import login from '@/view/login/login'
import cCreditForm from '@/view/FirstTrail/checkComponent/cCreditForm'
// 内部匹配
import InternalMatch from '@/view/FirstTrail/InternalMatch'
// 电话征信
import PhoneCredit from '@/view/FirstTrail/PhoneCredit'
// 信审审批
import CreditApproval from '@/view/FirstTrail/CreditApproval'
//----- 匹配查询页面--------
import MatchingInf from '@/view/FirstTrail/MatchingInf'
// 审批结论轨迹（部分）
import RApprovalConclusion from '@/view/FirstTrail/ReadComponent/RApprovalConclusion'
// 放账信息（部分）
import RFinanceInformation from '@/view/FirstTrail/ReadComponent/RFinanceInformation'
// ----------终审-------------------------
import FSplitScreen from '@/view/FinalTrial/FSplitScreen'
import FcCreditForm from '@/view/FinalTrial/FinalComponent/FcCreditForm'
//列表页
import FtaskInWaitting from '@/view/FinalTrial/FtaskInWaitting'
import FMCreditForm from '@/view/FinalTrial/FinalMatchComponent/FMCreditForm'
import FCreditForm from '../view/FinalTrial/FinalComponent/FCreditForm'
// ------------反欺诈------------------
import AntiAudit from '@/view/AntiFraud/AntiAudit.vue' //反欺诈分屏
import AntiRules from '../view/AntiFraud/AntiRules.vue' //反欺诈规则设定
import AntiCaseNum from '../view/AntiFraud/AntiCaseNum' // 案件编号维护
import AnitAudioVisual from '../view/AntiFraud/components/AnitAudioVisual.vue' // 反欺诈 列表
import AntiFraud from '@/view/AntiFraud/AntiFraud.vue' // 反欺诈 专员 / 主管
import AntiFraud34 from '@/view/AntiFraud/AntiFraud34.vue' // 反欺诈 申请
import AntiApplyEditf from '@/view/AntiFraud/AntiApplyEditf.vue' // 反欺诈申请列表
import AntiApplyEdit from '@/view/AntiFraud/AntiApplyEdit.vue'
import AntiApplyInf from '@/view/AntiFraud/AntiApplyInf.vue'
import AntiApplyAdd from '@/view/AntiFraud/AntiApplyAdd.vue'
import aAntiApplyInf from '@/view/AntiFraud/components/aAntiApplyInf.vue' //反欺诈调查
import aAntiFraudInvestigation from '@/view/AntiFraud/components/aAntiFraudInvestigation.vue' // 审批结论
import ApprovalConclus from '@/view/AntiFraud/approvalConclus.vue'
import AborrowerInformationDetail from '@/view/AntiFraud/components/AborrowerInformationDetail.vue'
import MborrowerInformationSetail from '@/view/AntiFraud/matchComponent/MborrowerInformationSetail.vue'
// -------------------------复议---------------------
import ReconsiderApply from '../view/Reconsider/ReconsiderComponents/ReconsiderApply.vue' //复议申请
import reconsiderList from '../view/Reconsider/reconsiderList.vue' //复议申请任务列表
import ReconsiderSplit from '../view/Reconsider/ReconsiderSplit.vue' //复议专员主管分屏
// import ReconsiderAntiSplit from '../view/Reconsider/ReconsiderAntiSplit.vue'//复议反欺诈分屏
import ReconsiderationConclusion from '../view/Reconsider/ReconsiderComponents/ReconsiderationConclusion.vue' //复议专员
import ReconjingliConclusion from '../view/Reconsider/ReconsiderComponents/ReconjingliConclusion.vue' //复议经理
// -------------------------流程监控---------------------
import processMoni from '../view/processMoni/processMoni.vue'
// -----------------------任务管理----------------------
import DoneTask from '../view/TaskManagement/reconsider/DoneTask.vue' //
import HistoryTask from '../view/TaskManagement/reconsider/HistoryTask.vue' //
import aDoneTask from '../view/TaskManagement/antiTaskManagment/aDoneTask.vue' //
import aHistoryTask from '../view/TaskManagement/antiTaskManagment/aHistoryTask.vue' //
import TaskManagementSplit from '../view/TaskManagement/reconsider/TaskManagementSplit.vue' //
import doTheTask from '../view/TaskManagement/examineAndApprove/doTheTask.vue' //审批任务管理——已办任务
import historicalTask from '../view/TaskManagement/examineAndApprove/historicalTask.vue' //审批任务管理——历史任务
//  -----------------------质检----------------------
import tb from '../view/QualityTesting/roles/tb.vue'
import tes from '../view/QualityTesting/roles/tes.vue'
//  -----------------------大数据风控+社保公积金----------------------
import PneCtrl from '../view/SocialSeAndPneCtrl/PneCtrl.vue' //大数据
import SocialSe from '../view/SocialSeAndPneCtrl/SocialSe.vue' //社保公积金

//  -----------------------质检----------------------
// import exam from '../view/exam.vue'
import MatchingInfQuery from '../view/FirstTrail/MatchingInfQuery.vue'
import AudioVisualLeft from '../view/FirstTrail/detailComponent/AudioVisualLeft.vue'
import IntegratedQuery from '../view/QualityTesting/FunctionalityPages/IntegratedQuery.vue'
import commissioner from '../view/QualityTesting/QTProcess/commissioner/commissioner.vue'//质检专员任务列表
import manager from '../view/QualityTesting/QTProcess/manager/manager.vue'//质检主管页面
import regularQT from '../view/QualityTesting/QTProcess/components/regularQT.vue'//首次常规质检
import specialQT from '../view/QualityTesting/QTProcess/components/specialQT.vue'//首次专纵向质检
import regularANDspecialQT from '../view/QualityTesting/QTProcess/components/regularANDspecialQT.vue'//常规质检又抽中专纵向质检
// import manager from ''//首次常规质检
// import manager from ''//首次常规质检

// commissioner//质检专员列表
// manager//质检主管列表


Vue.use(Router)

const routes = [{
    path: '/',
    component: workbench,
    // name:workbench
  },
  // {
  //   path:'/exam',
  //   component:exam,
  // },

  {
    path: '/AudioVisualLeft',
    component: AudioVisualLeft,
  },
  {
    path: '/workbench',
    component: login,
  },
  /*初审审批*/
  {
    path: '/taskInWaitting',
    component: taskInWaitting,
    // name:taskInWaitting
  },
  /*备注信息*/
  {
    path: '/remark',
    component: remark
  },
  /*实地征信*/
  {
    path: '/creditInvestigation',
    component: creditInvestigation
  },
  /*借款人资料*/
  {
    path: '/borrowerInformation',
    component: borrowerInformation
  },
  /*申请信息*/
  {
    path: '/applicationInformation',
    component: applicationInformation
  },
  // 分屏
  {
    path: '/SplitScreen',
    component: SplitScreen,
    // name:SplitScreen
  },
  // 匹配查看-页面
  {
    path: '/MatchingInf',
    component: MatchingInf,
    // name:MatchingInf
  },
  // 影像资料
  {
    path: '/AudioVisual',
    component: AudioVisual
  },
  // 申请表
  {
    path: '/CreditForm',
    component: CreditForm
  },
  // 申请表
  {
    path: '/cCreditForm',
    component: cCreditForm
  },
  {
    //内部匹配
    path: '/InternalMatch',
    component: InternalMatch
  },
  {
    //电话征信  
    path: '/PhoneCredit',
    component: PhoneCredit
  },
  // 审批结论轨迹
  {
    path: '/RApprovalConclusion',
    component: RApprovalConclusion
  },
  // 反欺诈 借款人资料
  {
    path: '/AborrowerInformationDetail',
    component: AborrowerInformationDetail
  },
  // 反欺诈、复议（内匹） 借款人资料
  {
    path: '/MborrowerInformationSetail',
    component: MborrowerInformationSetail
  },
  // 账务信息
  {
    path: '/RFinanceInformation',
    component: RFinanceInformation
  },
  {
    // 信审审批
    path: '/CreditApproval',
    component: CreditApproval
  },
  // ----------------终审----------------
  {
    path: '/FSplitScreen',
    component: FSplitScreen,
    // name:FSplitScreen
  },
  {
    path: '/FcCreditForm',
    component: FcCreditForm
  },
  {
    path: '/FtaskInWaitting',
    component: FtaskInWaitting,
    // name:FtaskInWaitting
  },
  {
    path: '/FCreditForm',
    component: FCreditForm
  },
  {
    path: '/FMCreditForm',
    component: FMCreditForm
  },

  //-------------------反欺诈------------
  {
    path: '/AntiAudit',
    component: AntiAudit,
    name:'AntiAudit'
  },
  {
    path: '/AnitAudioVisual',
    component: AnitAudioVisual
  },
  // 反欺诈列表
  {
    path: '/AntiFraud',
    component: AntiFraud
  },
  // 反欺诈 专员/主管
  {
    path: '/AntiFraud34',
    component: AntiFraud34
  },
  // 反欺诈申请 编辑
  {
    path: '/AntiApplyEditf',
    name:'AntiApplyEditf',
    component: AntiApplyEditf
  },
  // 反欺诈申请列表 编辑 导航
  {
    path: '/AntiApplyEdit',
    name:'AntiApplyEdit',
    component: AntiApplyEdit
  },
  // 反欺诈申请 查看
  {
    path: '/AntiApplyInf',
    name:'AntiApplyInf',
    component: AntiApplyInf
  },
  // 反欺诈申请 添加
  {
    path: '/AntiApplyAdd',
    name:'AntiApplyAdd',
    component: AntiApplyAdd
  },
  {
    path: '/aAntiApplyInf',
    component: aAntiApplyInf
  },
  //反欺诈调查
  {
    path: '/aAntiFraudInvestigation',
    component: aAntiFraudInvestigation
  },
  // 审批结论
  {
    path: '/ApprovalConclus',
    component: ApprovalConclus
  },
  // 反欺诈规则设定
  {
    path: '/AntiRules',
    component: AntiRules,
    // name:AntiRules
  },
  // 案件编号维护
  {
    path: '/AntiCaseNum',
    component: AntiCaseNum,
    // name:AntiCaseNum
  },
  // ---------------------复议-------------
  {
    path: '/ReconsiderApply',
    component: ReconsiderApply
  },
  {
    path: '/reconsiderList',
    component: reconsiderList,
    // name:reconsiderList
  },
  {
    path: '/ReconsiderSplit',
    component: ReconsiderSplit,
    // name:ReconsiderSplit
  },
  //复议结论（专员）
  {
    path: '/ReconsiderationConclusion',
    component: ReconsiderationConclusion
  },
  //复议结论（经理）
  {
    path: '/ReconjingliConclusion',
    component: ReconjingliConclusion
  },
  // ---------------------流程监控---------
  {
    path: '/processMoni',
    component: processMoni
  },
  // ------------------任务管理------------
  {
    path: '/DoneTask',
    component: DoneTask,
    // name:DoneTask
  },
  {
    path: '/aDoneTask',
    component: aDoneTask,
    // name:aDoneTask
  },
  {
    path: '/HistoryTask',
    component: HistoryTask,
    // name:HistoryTask
  },
  {
    path: '/aHistoryTask',
    component: aHistoryTask,
    // name:aHistoryTask
  },
  {
    path: '/TaskManagementSplit',
    component: TaskManagementSplit,
    // name:TaskManagementSplit
  },
  {
    path: '/doTheTask',
    component: doTheTask,
    // name:doTheTask
  },
  {
    path: '/historicalTask',
    component: historicalTask,
    // name:historicalTask
  },
  // ---------------质检--------------------
  {
    path: '/tb',
    component: tb
  },
  {
    path: '/tes',
    component: tes
  },
  {
    path: '/IntegratedQuery',
    component: IntegratedQuery,
    // name:IntegratedQuery 
  },
  {
    path: '/MatchingInfQuery',
    component: MatchingInfQuery
  },
  {
    path: '/commissioner',
    component: commissioner
  }, 
  {
    path: '/manager',
    component: manager
  }, {
    path: '/regularQT',
    component: regularQT
  }, {
    path: '/specialQT',
    component: specialQT
  }, {
    path: '/regularANDspecialQT',
    component: regularANDspecialQT
  }, 
  // {
  //   path: '/tes',
  //   component: tes
  // }, {
  //   path: '/tes',
  //   component: tes
  // }, {
  //   path: '/tes',
  //   component: tes
  // }, {
  //   path: '/tes',
  //   component: tes
  // },
  // ---------------大数据+社保--------------------
  {
    path: '/PneCtrl',
    component: PneCtrl
  },
  {
    path: '/SocialSe',
    component: SocialSe
  },
];

const router = new Router({
  routes
});
export default router;
