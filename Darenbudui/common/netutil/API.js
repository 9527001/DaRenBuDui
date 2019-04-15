// 网路请求路径 mvp的p

var netTill = require(getApp().globalData.routes.netutil);

// 获取签到页数据
function getSignData(onSuccess) {
  netTill.request_post(path.sign_data, onSuccess);
}
// 签到
function signin(onSuccess) {
  netTill.request_post(path.signin, onSuccess);
}
// 补签
function repair_sign(params,onSuccess) {
  netTill.request_post_param(path.repair_sign, params, onSuccess);
   
}

// 规则 签到+规则说明
function getRule(onSuccess) {
  netTill.request_get(path.get_step_rule, onSuccess);
}
// 获取广告
function getBanner(onSuccess) {
  netTill.request_get_nojwt(path.banners, onSuccess);
}

// 获取商品列表
function getGoodsList(params,onSuccess) {
  netTill.request_get_param(path.goodslist, params, onSuccess);
}

// 规则 签到+规则说明
function getRankList(onSuccess) {
  netTill.request_get(path.rank_list, onSuccess);
}
 

// 请求路径
var path={
  signin :'sign',
  sign_data: 'sign-data',
  get_step_rule: 'get-step-rule',
  banners: 'banners',
  goodslist: 'pointgoodslist',
  repair_sign: 'repair-sign',
  rank_list: 'rank-list',
}

// 暴露方法
module.exports = {
  signin: signin,
  getSignData: getSignData,
  getRule: getRule,
  getBanner: getBanner,
  getGoodsList: getGoodsList,
  repair_sign: repair_sign,
  getRankList: getRankList,
}

