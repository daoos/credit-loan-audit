// 一些全局公用变量

var appConstantUser = {};

// url 配置
var host = location.hostname,
  port = 80,
  developmentEnv = "http://testplatform.nuoyuan.com.cn/", // 开发环境
  testEnv = "http://testplatform.nuoyuan.com.cn/", // 测试环境
  releaseEnv = "http://preplatform.nuoyuan.com.cn/", // 准生产环境
  productionEnv = "riskmgt.nuoyuan.com.cn"; // 生产环境

if (host === productionEnv) {
  host = productionEnv;
} else if (host === releaseEnv) {
  host = releaseEnv;
} else if (host === testEnv) {
  host = testEnv;
} else {
  host = developmentEnv;

}

appConstantUser.path=host;

export default appConstantUser.path

