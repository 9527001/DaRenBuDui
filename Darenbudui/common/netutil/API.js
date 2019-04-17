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
// 我的卡牌
function getMyCard(onSuccess) {
  netTill.request_get(path.my_card, onSuccess);
}

// 赠送卡牌验证手机号
function checkPhone(phone,onSuccess) {
  var params = { 'phone':phone};
  netTill.request_post_param(path.check_phone, params, onSuccess);
}

// 赠送卡牌
function send_card(user_id,card,  onSuccess) {
  var params = { 'user_id': user_id,'card':card};
  netTill.request_post_param(path.send_card, params, onSuccess);
}

//兑换卡牌
function card_change(change_count, onSuccess) {
  var params = { 'change_count': change_count };//要兑换的数量 1,2 逗号分隔
  netTill.request_post_param(path.card_change, params, onSuccess);
}

//兑换商品
function change_goods(params, onSuccess) {
  
  netTill.request_post_param(path.change_goods + '/' + params['id'] + '/' + params['number'], params, onSuccess);
}
// 获取积分订单列表
function getMyExchangeOrder(onSuccess) {
  netTill.request_get(path.pointorders, onSuccess);
}

//活动列表
function getActivityList(onSuccess) {
  netTill.request_get(path.activity_list, onSuccess);
}
//幸运抽奖列表
function getLuckList(type,onSuccess) {
  var params = { 'type': type };//抽奖类型 1:2达人币 2:5达人币 3:10达人币
  netTill.request_get_param(path.luck, params, onSuccess);
}
//幸运抽奖详情
function getLuckInfo(id, onSuccess) {
  var params = { 'id': id };//id	number	幸运抽奖id
  netTill.request_get_param(path.luck_info, params, onSuccess);
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
  my_card: 'my-card',
  check_phone: 'check-phone',
  send_card: 'send-card',
  card_change:'card-change',
  change_goods:'change-goods',
  pointorders: 'pointorders',
  activity_list: 'activity-list',
  luck:'luck',
  luck_info:'luck-info',
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
  getMyCard: getMyCard,
  checkPhone: checkPhone,
  send_card: send_card,
  card_change: card_change,
  change_goods: change_goods,
  getMyExchangeOrder: getMyExchangeOrder,
  getActivityList: getActivityList,
  getLuckList: getLuckList,
  getLuckInfo: getLuckInfo,
}

