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
function repair_sign(params, onSuccess) {
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
function getGoodsList(params, onSuccess) {
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
function checkPhone(phone, onSuccess) {
  var params = {
    'phone': phone
  };
  netTill.request_post_param(path.check_phone, params, onSuccess);
}

// 赠送卡牌
function send_card(user_id, card, onSuccess) {
  var params = {
    'user_id': user_id,
    'card': card
  };
  netTill.request_post_param(path.send_card, params, onSuccess);
}

//兑换卡牌
function card_change(change_count, onSuccess) {
  var params = {
    'change_count': change_count
  }; //要兑换的数量 1,2 逗号分隔
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
function getLuckList(type, onSuccess) {
  var params = {
    'type': type
  }; //抽奖类型 1:2达人币 2:5达人币 3:10达人币
  netTill.request_get_param(path.luck, params, onSuccess);
}
//幸运抽奖详情
function getLuckInfo(id, onSuccess) {
  var params = {
    'id': id
  }; //id	number	幸运抽奖id
  netTill.request_get_param(path.luck_info, params, onSuccess);
}

//幸运抽奖参加
function getLuckJoin(id, onSuccess) {
  var params = {
    'id': id, //id	number	幸运抽奖id
    'form_id': '1' // 随意设值 
  };
  netTill.request_post_param(path.luck_join, params, onSuccess);
}
//幸运抽奖填写中奖信息 领取奖励
function get_rize(id, real_name, phone, address, onSuccess) {
  var params = {
    'id': id, //id	number	幸运抽奖id
    'real_name': real_name,
    'phone': phone,
    'address': address,
  };
  netTill.request_post_param(path.get_prize, params, onSuccess);
}
//我的抽奖
function getMyLuck(type, onSuccess) {
  var params = {
    'type': type //类型 1进行中 3未中奖 2已中奖
  };
  netTill.request_get_param(path.my_luck, params, onSuccess);
}

//获取交换步数信息
function get_share_info(open_id, onSuccess) {
  var params = {
    'open_id': open_id //open_id	string	请求赠送人open_id
  };
  netTill.request_get_param(path.get_send_step_data, params, onSuccess);
}

//赠送步数
function share_step(step, send_user_id, onSuccess) {
  var params = {
    'step': step, //step	number	要赠送的步数
    'send_user_id': send_user_id, //send_user_id	number	受益人id
  };
  netTill.request_post_param(path.send_step, params, onSuccess);
}

// 分享出去的信息
function share_for_step(selfID) {
  return {
    title: '人生没有白走的路，每一步都是必经之路',
    imageUrl: "http://dakadmin.weiyingjia.org/uploads/2018-10-11/201810111425124222.png", //图片地址
    path: "/pages/home/home?type=1&userid=" + selfID, // 用户点击首先进入的当前页面
  };
}

//生成二维码图片
function create_qr_code(onSuccess) {

  netTill.request_post(path.create_qr_code, onSuccess);
}

//互助记录
function send_step_history(onSuccess) {

  netTill.request_get(path.send_step_history, onSuccess);
}

// 获取用户步数信息
function get_user_step(uid, session, iv, encryptData,onSuccess) {
  var params = {
    'uid': uid, 
    'session': session, 
    'iv': iv, 
    'encryptData': encryptData, 
  };
  netTill.request_post_param(path.get_user_step, params, onSuccess);
}

// 点击气泡
function receive_bubble(type, onSuccess) {
  var params = {
    'point_type': type,//气泡类型：step(步数) sign(签到) send(受赠) point(跬步生财)
  };
  netTill.request_post_param(path.receive_bubble, params, onSuccess);
}

// 请求路径
var path = {
  signin: 'sign',
  sign_data: 'sign-data',
  get_step_rule: 'get-step-rule',
  banners: 'banners',
  goodslist: 'pointgoodslist',
  repair_sign: 'repair-sign',
  rank_list: 'rank-list',
  my_card: 'my-card',
  check_phone: 'check-phone',
  send_card: 'send-card',
  card_change: 'card-change',
  change_goods: 'change-goods',
  pointorders: 'pointorders',
  activity_list: 'activity-list',
  luck: 'luck',
  luck_info: 'luck-info',
  luck_join: 'luck-join',
  get_prize: "write-luck",
  my_luck: "my-luck",
  get_send_step_data: "get-send-step-data",
  send_step: "send-step",
  create_qr_code: "create-qr-code",
  send_step_history: "send-step-history",
  get_user_step:"get-user-step",
  receive_bubble:"receive-bubble",
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
  getLuckJoin: getLuckJoin,
  get_rize: get_rize,
  getMyLuck: getMyLuck,
  get_share_info: get_share_info,
  share_step: share_step,
  share_for_step: share_for_step,
  create_qr_code: create_qr_code,
  send_step_history: send_step_history,
  get_user_step: get_user_step,
  receive_bubble: receive_bubble,
}