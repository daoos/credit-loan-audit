<template>
  <div class="PneCtrl">
    <!-- 大数据风控 -->
    <div class="outside">
      <div class="title">
        <ul>
          <li v-for="(item,index) in titles" class="tabdefault" :key='index' :class="{tab:ind==index}" @click="swiching($event,index,item)">{{item}}
          </li>
        </ul>
      </div>
      <div class="wrap">
        <div class="content">
          <keep-alive v-if="Routes.closed">
            <RiskPoint v-if="ind==0" :applySubNo='localInf.applySubNo'>风控指引</RiskPoint>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <complexPic v-if="ind==1" :applySubNo='localInf.applySubNo'>复杂网络图谱</complexPic>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <OcrMessage v-if="ind==2" :applySubNo='localInf.applySubNo'>OCR信息</OcrMessage>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <portrait v-if="ind==3" :applySubNo='localInf.applySubNo'>同盾设备画像</portrait>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <telBook v-if="ind==4" :applySubNo='localInf.applySubNo'>通讯录</telBook>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <ZxReport v-if="ind==5" :applySubNo='localInf.applySubNo'>网查征信报告</ZxReport>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <carrierReport v-if="ind==6" :applySubNo='localInf.applySubNo'>运营商报告</carrierReport>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <debitCardReport v-if="ind==7" :applySubNo='localInf.applySubNo'>储蓄卡报告</debitCardReport>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <AccumulationFundReport v-if="ind==8" :applySubNo='localInf.applySubNo'>公积金报告</AccumulationFundReport>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <SocialSecurityReport v-if="ind==9" :applySubNo='localInf.applySubNo'>社保报告</SocialSecurityReport>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <BaiRongData v-if="ind==10" :applyId='localInf.applyId'>百融数据</BaiRongData>
          </keep-alive>
          <keep-alive v-if="Routes.closed">
            <RiskDecision v-if="ind==11" :applyId='localInf.applyId'>同盾风险决策</RiskDecision>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BaiRongData from './PneCtrl/BaiRongData.vue'
  import RiskDecision from './PneCtrl/RiskDecision.vue'
  import SocialSecurityReport from './PneCtrl/SocialSecurityReport.vue'
  import AccumulationFundReport from './PneCtrl/AccumulationFundReport.vue'
  import telBook from './PneCtrl/telBook.vue'
  import portrait from './PneCtrl/portrait.vue'
  import RiskPoint from './PneCtrl/RiskPoint.vue'
  import OcrMessage from './PneCtrl/OcrMessage.vue'
  import complexPic from './PneCtrl/complexPic.vue'
  import carrierReport from './PneCtrl/carrierReport.vue'
  import ZxReport from './PneCtrl/360ZxReport.vue'
  import debitCardReport from './PneCtrl/debitCardReport.vue'
  export default {
    data() {
      return {
        ind: 0,
        titles: ['风控指引', '复杂网络图谱', 'OCR信息', '同盾设备画像', '通讯录', '网查征信报告', '运营商报告', '储蓄卡报告', '公积金报告', '社保报告', '百融数据',
          '同盾风险决策'
        ],
        localInf: {},
        obj: {
          applySubNo: ''
        },
        judgeFlag: '',
        Routes: this.$router.options.routes[34],
      }
    },
    watch: {
      '$route'(to, from) {
        from.meta.newOne = false;
        if (to.path === '/PneCtrl' && this.$route.params.newOne) {
          this.Routes.closed = false;
          this.customInf = {};
          // this.accepCusBasicInfo = {};
          this.mountedInf();
          this.ind = 0;
        }
      }
    },
    activated() {
      this.Routes.closed = true;
    },
    methods: {
      swiching(e, index, val) {
        this.ind = index;
      },
      mountedInf() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
        } else if (this.judgeFlag.flag == '02') {
          this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
          this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
        } else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
          this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
        } else if (this.judgeFlag.flag == '07' || this.judgeFlag.flag == '08' || this.judgeFlag.flag == '09' || this.judgeFlag
          .flag == '10' || this.judgeFlag.flag == '11' || this.judgeFlag.flag == '13') {
          this.localInf = JSON.parse(localStorage.getItem("FGQTTaskWait")) //质检 专员、主管、初终审本人任务列表、初终审主管、复议任务列表（首次） ---区域无社保公积金按钮、合规经理任务列表
        } else if (this.judgeFlag.flag == '18') {
          this.localInf = JSON.parse(localStorage.getItem("IntegratedQuerytask")) //综合查询
          this.obj.applySubNo = this.localInf.applySubno
          Object.assign(this.localInf, this.obj)
        }
      }
    },
    created() {
      this.mountedInf();
    },
    components: {
      BaiRongData,
      RiskDecision,
      SocialSecurityReport,
      AccumulationFundReport,
      telBook,
      portrait,
      RiskPoint,
      OcrMessage,
      complexPic,
      carrierReport,
      ZxReport,
      debitCardReport,
    }
  }

</script>
<style scoped>
  .tab {
    color: white;
    border-bottom: 1px solid white;
  }

</style>
