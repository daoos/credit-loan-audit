<!--质检 已办任务 -->
<template>
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input class="" v-model="applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input class="" v-model="custName_la" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input class="" v-model="certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">产品名称：</span>
          <el-autocomplete popper-class="my-autocomplete" v-model="productCode" :debounce='0' :fetch-suggestions="querySearch"
            placeholder="请输入内容" @select="handleSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix">
            </i>
            <template slot-scope="{ item }">
              <span style="float: left; width:66px">{{ item.productName }}</span>
              <span style="float: left;color: #8492a6; font-size: 13px;margin-left: 20px;">{{ item.productCode }}</span>
            </template>
          </el-autocomplete>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">紧急程度： </span>
          <el-select v-model="emerType" placeholder="请选择">
            <el-option v-for="item in UrgencyDegree" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">申请日期：</span>
          <el-date-picker v-model="applicationDate" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">本环节处理时间：</span>
          <el-date-picker v-model="processingTime" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="search">查询</el-button>
          <el-button class="btn reset" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        质检已办任务列表 </span>
    </div>
    <div class="listContainer">
      <el-table :data="datas" style="width: 100%" height="510" highlight-current-row @row-dblclick='goDetail' border>
        <el-table-column type="index" :index="1" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="emerType" label="紧急程度" min-width="80">
          <template slot-scope="scope">
            <span style="color:#0077ff" v-if="scope.row.timeColor">{{scope.row.emerType}}</span>
            <span v-if="!scope.row.timeColor">{{scope.row.emerType}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" min-width="170">
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期" min-width="100">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" min-width="130">
        </el-table-column>
        <el-table-column prop="certCode" label="证件号码" min-width="170">
        </el-table-column>
        <el-table-column prop="appOrgCode" label="进件机构" min-width="120">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" width="120">
        </el-table-column>
        <el-table-column prop="activationTime" label="进入本环节时间" min-width="170">
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="[10, 20,50]" :page-size='setPageSize' layout="total, sizes, prev, pager, next, jumper" :total="totals.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        activeNames: ['1'],
        totals: {},
        currentPage: 1, // 默认显示的当前页
        setPageSize: 10,
        datas: [],
        applySubNo: '', //进件编号-查询
        custName_la: '', //客户名称模糊-查询
        certCode: '', ////证件号码-查询
        productCode: '', //产品code-查询
        emerType: '', //紧急程度-查询
        appDate_ge: '', //申请日期[大于等于]-查询
        appDate_le: '', //申请日期[小于等于]-查询
        completeTime_ge: '', //本环节处理时间[大于等于]-查询
        completeTime_le: '', //本环节处理时间[小于等于]-查询
        selectedProName: "",
        queryParam: {
          processTemplateId: 'checkApp', //流程模板
          taskNodeName: '', //任务名称
          taskStatus: '03', //任务状态(代办01、已办03、历史不用传)
          userCode: '', //用户编码
          orgCode: '', //机构编码
          pageNum: 1, //页数（第几页）
          pageSize: 10, //页面显示行数
          applySubNo: '', //进件编号
          custName_la: '', //客户名称模糊
          certCode: '', //证件号码
          //紧急程度
          emerType: '',
          //产品code
          proCode: '',
          //申请日期[大于等于]
          appDate_ge: '',
          //申请日期[小于等于]
          appDate_le: '',
          //本环节处理时间[大于等于]
          completeTime_ge: '',
          //本环节处理时间[小于等于]
          completeTime_le: ''
        },
        productNames: [],
        //紧急程度
        UrgencyDegree: [{
            value: '00',
            label: '普通'
          },
          {
            value: '01',
            label: '免费加急'
          },
          {
            value: '02',
            label: '收费加急'
          }
        ],
        //申请信息 时间 数组
        applicationDate: '',
        //本环节处理时间 时间 数组
        processingTime: '',
        judge: '',
        orgId: '',
      }
    },
    mounted() {
      //一进入页面就发送请求
      this.queryParam.userCode = JSON.parse(localStorage.getItem('userInf')).userCode;
      this.queryParam.orgCode = JSON.parse(localStorage.getItem('userInf')).orgCode;
      this.orgId = JSON.parse(localStorage.getItem('userInf')).orgId;
      //请求产品
      this.product();
      this.request(this.queryParam);
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.productNames;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.productName.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
        };
      },
      handleSelect(item) {
        this.productCode = this.selectedProName = item.productName;
        this.queryParam.proCode = item.id;
      },
      product() {
        this.post("/credit/productAll").then(res => {
          if (res.statusCode == 200) {
            for (let k in res.data) {
              this.productNames.push(res.data[k])
            }
          }
        });
      },
      request(param) {
        this.productCode != this.selectedProName ? (this.productCode = this.selectedProName = this.queryParam.proCode = "") :
          "";
        this.post('/workFlowTaskQuery/getTaskToDoList',
          param
        ).then(res => {
          if (res.statusCode == 200 && res.data.recordList != null) {
            this.totals = res.data;
            this.datas = res.data.recordList;
            for (var i = 0; i < this.datas.length; i++) {
              if (this.datas[i].emerType == '00') {
                this.datas[i].emerType = "普通";
              } else if (this.datas[i].emerType == '01') {
                this.datas[i].emerType = "免费加急";
              } else if (this.datas[i].emerType == '02') {
                this.datas[i].emerType = "收费加急";
              };
              if (this.datas[i].approveTimeLong * 1 >= 48) {
                this.datas[i].timeColor = true;
              } else if (this.datas[i].approveTimeLong * 1 < 48) {
                this.datas[i].timeColor = false;
              };
            };
          } else {
            this.datas = [];
          }
        })
      },
      /*重置*/
      reset() {
        this.applySubNo = '';
        this.custName_la = '';
        this.certCode = '';
        this.selectedProName = '';
        this.productCode = ''; //产品code-查询
        this.emerType = ''; //紧急程度-查询
        //申请信息 时间 数组
        this.applicationDate = '',
          //本环节处理时间 时间 数组
          this.processingTime = '',
          this.queryParam.applySubNo = '';
        this.queryParam.custName_la = '';
        this.queryParam.certCode = '';
        this.queryParam.proCode = ''; //产品code-查询
        this.queryParam.emerType = ''; //紧急程度-查询
        this.queryParam.appDate_ge = ''; //申请日期[大于等于]-查询
        this.queryParam.appDate_le = ''; //申请日期[小于等于]-查询
        this.queryParam.completeTime_ge = ''; //本环节处理时间[大于等于]-查询
        this.queryParam.completeTime_le = ''; //本环节处理时间[小于等于]-查询
        this.request(this.queryParam);
      },
      /*查询*/
      search() {
        //申请日期[大于等于]-查询
        if (this.applicationDate) {
          var appge = new Date(this.applicationDate[0]),
            appgey = appge.getFullYear(),
            appgem = appge.getMonth() + 1;
          appgem = appgem < 10 ? ('0' + appgem) : appgem;
          var appged = appge.getDate();
          appged = appged < 10 ? ('0' + appged) : appged;
          this.queryParam.appDate_ge = appgey + '-' + appgem + '-' + appged;
          //申请日期[小于等于]-查询
          var apple = new Date(this.applicationDate[1]),
            appley = apple.getFullYear(),
            applem = apple.getMonth() + 1;
          applem = applem < 10 ? ('0' + applem) : applem;
          var appled = apple.getDate();
          appled = appled < 10 ? ('0' + appled) : appled;
          this.queryParam.appDate_le = appley + '-' + applem + '-' + appled;
        } else {
          this.queryParam.appDate_ge = '';
          this.queryParam.appDate_le = '';
        };
        if (this.processingTime) {
          //本环节处理时间[大于等于]-查询
          var comge = new Date(this.processingTime[0]),
            comgey = comge.getFullYear(),
            comgem = comge.getMonth() + 1;
          comgem = comgem < 10 ? ('0' + comgem) : comgem;
          var comged = comge.getDate();
          comged = comged < 10 ? ('0' + comged) : comged;
          this.queryParam.completeTime_ge = comgey + '-' + comgem + '-' + comged;
          //本环节处理时间[小于等于]-查询
          var comle = new Date(this.processingTime[1]),
            comley = comle.getFullYear(),
            comlem = comle.getMonth() + 1;
          comlem = comlem < 10 ? ('0' + comlem) : comlem;
          var comled = comle.getDate();
          comled = comled < 10 ? ('0' + comled) : comled;
          this.queryParam.completeTime_le = comley + '-' + comlem + '-' + comled;
        } else {
          this.queryParam.completeTime_ge = '';
          this.queryParam.completeTime_le = '';
        }
        this.queryParam.applySubNo = this.applySubNo;
        this.queryParam.custName_la = this.custName_la;
        this.queryParam.certCode = this.certCode;
        this.queryParam.emerType = this.emerType; //紧急程度-查询
        this.request(this.queryParam);
      },
      //跳转到详情页
      goDetail(row, event, column) {
        this.$router.push({
          name: 'TaskManagementSplit',
          params: {
            newOne: true,
          }
        });
        localStorage.setItem("TtaskInWaitting", JSON.stringify(row));
        this.judge = {
          flag: '15'
        };
        localStorage.setItem("judge", JSON.stringify(this.judge));
      },
      handleSizeChange(val) {
        this.queryParam.pageSize = val;
        this.queryParam.pageNum = 1;
        if (this.currentPage !== 1 || this.setPageSize !== 10) {
          this.currentPage = 1;
          this.setPageSize = 10;
        } else {
          this.request(this.queryParam);
        };
      },
      handleCurrentChange(val) {
        this.queryParam.pageNum = val;
        this.request(this.queryParam);
      },
    }
  }

</script>
