<template>
  <!-- 立木 -->
  <div class="SocialSecurity carrierReport">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">本机号码：</label>
                <span>{{Inf.mobileNo}}</span>
              </li>
              <li>
                <label class="label_width_166"> 姓名：</label>
                <span>{{Inf.realName}}</span>
              </li>
              <li>
                <label class="label_width_166"> 身份证：</label>
                <span>{{Inf.idCard}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">可用积分：</label>
                <span>{{Inf.pointsValuestr}}</span>
              </li>
              <li>
                <label class="label_width_166">可用余额(元)：</label>
                <span>{{Inf.amount}}</span>
              </li>
              <li>
                <label class="label_width_166">星级：</label>
                <span>{{Inf.vipLevelstr}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_166">邮箱：</label>
                <span>{{Inf.email}}</span>
              </li>
              <!-- <li class="li_half_two_rows"> -->
              <li>
                <label class="label_width_166">地址：</label>
                <span>{{Inf.address}}</span>
              </li>
              <li>
                <label class="label_width_166">入网时间：</label>
                <span>{{Inf.registerDate}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">前10通话次数记录</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.stati" style="width:100%;" highlight-current-row border>
            <el-table-column prop="mobileNo" label="与本机通话手机号码" width='300px'>
            </el-table-column>
            <el-table-column prop="callCount" label="与本机通话次数">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">近6个月通话记录详单</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.callRecordInfo" style="width:100%;" highlight-current-row border>
            <el-table-column prop="callAddress" label="通话地点" width='300px'>
            </el-table-column>
            <el-table-column prop="callDateTime" label="通话时间">
            </el-table-column>
            <el-table-column prop="callTimeLength" label="通话时长(秒)">
            </el-table-column>
            <el-table-column prop="callType" label="通话类型">
            </el-table-column>
            <el-table-column prop="mobileNo" label="与本机通话手机号码">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">近6个月账单信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.bill" style="width:100%;" highlight-current-row border>
            <el-table-column prop="mobileNo" label="本机号码" width='300px'>
            </el-table-column>
            <el-table-column prop="startTime" label="账单月份" width="90">
            </el-table-column>
            <el-table-column prop="comboCost" label="套餐消费(元)">
            </el-table-column>
            <el-table-column prop="sumCost" label="总金额(元)">
            </el-table-column>
            <el-table-column prop="realCost" label="实际费用(元)">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">近6个月短信信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.smsInfo" style="width:100%;" highlight-current-row border>
            <el-table-column prop="mobileNo" label="本机号码" width='300px'>
            </el-table-column>
            <el-table-column prop="sendSmsToTelCode" label="与本机通话手机号码" width="160">
            </el-table-column>
            <el-table-column prop="sendSmsAddress" label="发送地" >
            </el-table-column>
            <el-table-column prop="sendSmsTime" label="发送时间" min-width="180">
            </el-table-column>
            <el-table-column prop="sendType" label="发送类型" min-width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">近6个月上网信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.netInfo" style="width:100%;" highlight-current-row border>
            <el-table-column prop="mobileNo" label="本机号码" width='300px'>
            </el-table-column>
            <el-table-column prop="place" label="上网地点">
            </el-table-column>
            <el-table-column prop="netTime" label="上网时间">
            </el-table-column>
            <el-table-column prop="onlineTime" label="上网时长(秒)">
            </el-table-column>
            <el-table-column prop="netType" label="上网类型">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">近6个月办理业务信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.businessInfo" style="width:100%;" highlight-current-row border>
            <el-table-column prop="mobileNo" label="本机号码" width='300px'>
            </el-table-column>
            <el-table-column prop="businessName" label="业务名称">
            </el-table-column>
            <el-table-column prop="beginTime" label="业务开始时间">
            </el-table-column>
            <el-table-column prop="cost" label="业务消费(元)">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">数据分析</span>
        </template>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <span class="collapse_title_text margin_left_30">1.用户画像</span>
        </template>
        <div class="margin_left_5 margin_bottom_10">
          <p class="margin_top_15">风险概况</p>
          <div class="picture  clearFix">
            <span class='taskWattingContain'> 风险通话次数：{{Inf.riskCallCnt }}</span>
          </div>
          <p class="margin_top_15">社交概况</p>
          <div class="picture  clearFix">
            <span class="width_33Per"> 最常联系人区域：{{Inf.freContactArea }}</span>
            <span class="width_33Per"> 联系人号码总数：{{Inf.contactNumCnt }}</span>
            <span class="width_33Per"> 互通号码数：{{Inf.interflowContactCnt }}</span>
          </div>
          <p class="margin_top_15">通话概况</p>
          <div class="picture  clearFix">
            <span class="width_20Per"> 日均通话次数：{{Inf.avgCallCnt }}</span>
            <span class="width_20Per"> 日均通话时长(分)：{{Inf.avgCallTime }}</span>
            <span class="width_20Per"> 静默次数：{{Inf.silenceCnt }}</span>
            <span class="width_20Per"> 夜间通话次数：{{Inf.nightCallCnt }}</span>
            <span class="width_20Per"> 夜间平均通话时长 (分)：{{Inf.nightCallTime }}</span>
          </div>
          <p class="margin_top_15">消费概况</p>
          <div class="picture  clearFix">
            <span class='taskWattingContain'> 月均消费(元)：{{Inf.avgFeeMonth }}</span>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name='10'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">2.风险通话检测</span>
        </template>
        <div v-for="(item,ind) in Inf.riskCallCheck" :key="ind">
          <div class="margin_left_5 margin_bottom_10">
            <p class="margin_top_15">检查项:{{item.desc}}</p>
            <div class="picture  clearFix">
              <span class="width_33Per"> 命中描述：{{item.hitDesc }}</span>
              <span class="width_33Per"> 命中次数：{{item.cnt }}</span>
              <span class="width_33Per"> 时长(秒)：{{item.duration }}</span>
            </div>
          </div>
          <div class="height_auto">
            <el-table :data="item.details" style="width:100%;" highlight-current-row border>
              <el-table-column prop="callTag" label="通话标记"  width='300px'>
              </el-table-column>
              <el-table-column prop="callType" label="通话类型">
              </el-table-column>
              <el-table-column prop="callCnt" label="通话次数">
              </el-table-column>
              <el-table-column prop="callTime" label="通话时长(秒)">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name='11'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">3.通话概况</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.callAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="avgCallCnt" label="日均通话次数"  width='160px'>
            </el-table-column>
            <el-table-column prop="avgCallTime" label="日均通话时长(秒)">
            </el-table-column>
            <el-table-column prop="avgCallingCnt" label="日均主叫次数">
            </el-table-column>
            <el-table-column prop="avgCallingTime" label="日均主叫时长(秒)">
            </el-table-column>
            <el-table-column prop="locCallPct" label="日均被叫次数">
            </el-table-column>
            <el-table-column prop="avgCalledCnt" label="日均被叫时长(秒)">
            </el-table-column>
            <el-table-column prop="avgCalledTime" label="本地通话占比">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='12'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">4.活跃情况</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.activeCallAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="desc" label="项目"  width='300px'>
            </el-table-column>
            <el-table-column prop="lately1m" label="近1月">
            </el-table-column>
            <el-table-column prop="lately3m" label="近3月">
            </el-table-column>
            <el-table-column prop="lately6m" label="近6月">
            </el-table-column>
            <el-table-column prop="avgMonth" label="月均">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='13'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">5.静默情况</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.silenceAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="silenceCnt" label="静默次数"  width='160px'>
            </el-table-column>
            <el-table-column prop="silenceTime" label="静默总时长(秒)">
            </el-table-column>
            <el-table-column prop="longestSilenceStart" label="最长一次静默开始时间">
            </el-table-column>
            <el-table-column prop="longestSilenceTime" label="最长一次静默时长(秒)">
            </el-table-column>
            <el-table-column prop="lastSilenceStart" label="最长一次静默时长(秒)">
            </el-table-column>
            <el-table-column prop="lastSilenceTime" label="最近一次静默时长(秒)">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='14'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">6.通话时间段分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.callDurationAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="desc" label="项目">
            </el-table-column>
            <el-table-column prop="callCnt" label="通话次数"  width='120px'>
            </el-table-column>
            <el-table-column prop="callNumCnt" label="通话号码数">
            </el-table-column>
            <el-table-column prop="freqContactNum" label="最常联系号码">
            </el-table-column>
            <el-table-column prop="freqContactNumCnt" label="	最常联系号码次数">
            </el-table-column>
            <el-table-column prop="avgCallTime" label="平均通话时长(秒)">
            </el-table-column>
            <el-table-column prop="callingCnt" label="主叫次数">
            </el-table-column>
            <el-table-column prop="callingTime" label="主叫时长(秒)">
            </el-table-column>
            <el-table-column prop="calledCnt" label="被叫次数">
            </el-table-column>
            <el-table-column prop="calledTime" label="被叫时长(秒)">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='15'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">7.消费能力分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.consumptionAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="desc" label="项目"  width='260px'>
            </el-table-column>
            <el-table-column prop="lately1m" label="近1月">
            </el-table-column>
            <el-table-column prop="lately3m" label="近3月">
            </el-table-column>
            <el-table-column prop="lately6m" label="近6月">
            </el-table-column>
            <el-table-column prop="avgMonth" label="月均">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='16'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">8.出行信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.tripAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="departureDate" label="出发时间" width='260px'>
            </el-table-column>
            <el-table-column prop="returnDate" label="回程时间">
            </el-table-column>
            <el-table-column prop="departurePlace" label="出发地">
            </el-table-column>
            <el-table-column prop="destinationPlace" label="目的地">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='17'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">9.社交关系概况</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.socialContactAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="desc" label="项目" width='300px'>
            </el-table-column>
            <el-table-column prop="content" label="内容">
            </el-table-column>
            <el-table-column prop="contentDesc" label="内容描述">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='18'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">10.通话区域分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.callAreaAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="attribution" label="通话地">
            </el-table-column>
            <el-table-column prop="callCnt" label="通话次数" width='160px'>
            </el-table-column>
            <el-table-column prop="callNumCnt" label="通话号码数">
            </el-table-column>
            <el-table-column prop="callTime" label="通话时长(秒)">
            </el-table-column>
            <el-table-column prop="callingCnt" label="主叫次数">
            </el-table-column>
            <el-table-column prop="callingTime" label="主叫时长(秒)">
            </el-table-column>
            <el-table-column prop="calledCnt" label="主叫时长(秒)">
            </el-table-column>
            <el-table-column prop="calledTime" label="被叫时长(秒)">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='19'>
        <template slot="title">
          <span class="collapse_title_text margin_left_30">11.通话联系人分析</span>
        </template>
        <div class="height_auto">
          <el-table :data="Inf.contactAnalysis" style="width:100%;" highlight-current-row border>
            <el-table-column prop="callNum" label="号码" width='110px'>
            </el-table-column>
            <el-table-column prop="callTag" label="电话标记">
            </el-table-column>
            <el-table-column prop="attribution" label="归属地">
            </el-table-column>
            <el-table-column prop="callCnt" label="通话次数"  width='75px'>
            </el-table-column>
            <el-table-column prop="callTime" label="通话时长(秒)" width='100px'>
            </el-table-column>
            <el-table-column prop="callingCnt" label="主叫次数" width='75px'>
            </el-table-column>
            <el-table-column prop="callingTime" label="主叫时长(秒)" width='100px'>
            </el-table-column>
            <el-table-column prop="calledCnt" label="被叫次数"  width='75px'>
            </el-table-column>
            <el-table-column prop="calledTime" label="被叫时长(秒)" width='100px'>
            </el-table-column>
            <el-table-column prop="lastStart" label="最近一次通话时间" width='150px'>
            </el-table-column>
            <el-table-column prop="lastTime" label="最近一次通话时时长(秒)" width='170px'>
            </el-table-column>
            <el-table-column prop="callCntPct" label="通话次数占比" width='105px'>
            </el-table-column>
            <el-table-column prop="callTimePct" label="通话时长占比" width='105px'>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
          '19'
        ],
      }
    },
    props: {
       Inf: {
        default: function () {
          return { }
        },
        type: Object,
        required: true
      },

    },
  }
</script>
<style scoped>
  .picture span {
    border: 1px solid #ebeef5;
    padding: 5px;
    float: left;
    color: #333;
  }

  p {
    font-weight: 800;
    color: #000;
  }

</style>
