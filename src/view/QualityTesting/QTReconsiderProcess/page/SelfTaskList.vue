<template>
  <!-- 质检复议流程 初终审本人任务列表 -->
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model="params.custName_la" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="Rsearch">查询</el-button>
          <el-button class="btn reset" @click="Rreset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        质检信息
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @row-dblclick="handleCurrentChange"
        border>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" align='center' width="165">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' width="140">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" align='center' width="170">
        </el-table-column>
        <el-table-column prop="checkResultTxt" label="质检结果" align='center' width="115">
        </el-table-column>
        <el-table-column prop="errorType" label="差错类型" align='center' width="252">
        </el-table-column>
        <el-table-column prop="errorDescribe" label="差错描述" align='center' width="474">
        </el-table-column>
        <el-table-column prop="remark" label="备注" align='center' width="474">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import baseU from '../../../../util/constant';
  export default {
    data() {
      return {
        taskList: "",
        query: {
          id: '',
          ApplyId: "",
          taskId: '',
          processInstanceId: '',
          listType: '',
        },
        QTquery: {
          id: '',
          matchApplyId: "",
          applySubNo: ''
        },
        userInf: null,
        tableData: [],
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        params: {
          processTemplateId: '',
          taskNodeName: '',
          taskStatus: '',
          applySubNo: '',
          custName_la: '',
          certCode: '',
        },
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/SelfTaskList') {
          this.mountedInf();
        }
      }
    },
    methods: {
      mountedInf() {
        this.taskList = JSON.parse(localStorage.getItem('QTTrialSelftWorkbenchPass'))
        this.params.processTemplateId = this.taskList.processTemplateId;
        this.params.taskNodeName = this.taskList.taskNodeName;
        this.params.taskStatus = this.taskList.taskStatus;
        this.inquire(this.params)
      },
      handleCurrentChange(val) {
        this.QTquery.id = this.query.id = val.id;
        this.QTquery.matchApplyId = this.query.ApplyId = val.applyId;
        this.QTquery.applySubNo = val.applySubno;
        this.query.taskId = val.taskId;
        this.query.processInstanceId = val.processInstanceId;
        this.query = Object.assign({}, this.query, this.QTquery, val)
        // 存储质检结论参数
        localStorage.setItem("QTSelfTW", JSON.stringify(this.query));
        localStorage.setItem("FGQTTaskWait", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQT?checkApp_trial_self');
        this.$route.meta.newOne = true;
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
      },
      Rreset() {
        this.params.applySubNo = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.inquire(this.params)
      },
      Rsearch() {
        this.inquire(this.params)
      },
      inquire(pam) {
        // 查询列表
        this.post("insConclusion/queryCZSBRTaskList", pam).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
    },
    mounted() {
      this.mountedInf();
    },
  }

</script>
