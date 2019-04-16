// pages/mycard/mycard.js
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goldcardList: [{
      card_name: 2,
      number: 0
    }, {
      card_name: 3,
      number: 0
    }, {
      card_name: 4,
      number: 0
    }, {
      card_name: 5,
      number: 0
    }, ],
    silvercardList: [{
        card_name: 0,
        number: 0
      }, {
        card_name: 1,
        number: 0
      },
      {
        card_name: 6,
        number: 0
      },
      {
        card_name: 7,
        number: 0
      },
      {
        card_name: 8,
        number: 0
      },
      {
        card_name: 9,
        number: 0
      },
    ],
    history:[],
    note: '卡牌兑换说明',
    note_content: '1.每日签到成功可随机获得一-张卡牌，相同数字卡牌最多收集\
5张，超出部分将自动丢弃。\n \
    2.集齐第一排四种黄金卡牌，可兑换2达人币。\n\
    3.集齐第二排六种白银卡牌，可兑换1达人币。',
    note_note: '温馨提示: 和朋友相互送卡片更容易集齐哦!',

    //     card_1：黄金卡牌兑换达人币数
    // card_2：白银卡牌兑换达人币数
    // end_count：白银卡牌兑换次数
    // first_count：黄金卡牌兑换次数
    // member_card:
    //     end: 白银卡牌信息
    // first黄金卡牌信息
    // card_name: 卡牌号
    //   number: 拥有数量
    rules: {
      "status_code": 200,
      "data": "规则",
      "sign": "签到规则",

    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 我的卡牌
  http() {

    API.getMyCard(res => {
      this.setData({
        goldcardList: res.member_card.first,
        silvercardList: res.member_card.end,
        history:res.history

      })
    });
    API.getRule(res => {
      this.setData({
        rules: res

      })
    });

  },
  onClickCardToFriend() {
    var history = this.data.history;
    wx.navigateTo({
      url: '../../pages/cardtofriendRecord/cardtofriendRecord?history=' + JSON.stringify(history),
    })
  },
  onClickCardToMoney() {
    wx.navigateTo({
      url: '../../pages/cardtomoney/cardtomoney',
    })
  }
})