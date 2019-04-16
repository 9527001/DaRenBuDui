// pages/cardtofriendRecord/cardtofriendRecord.js
// 送卡牌给朋友及历史记录
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: '请输入好友手机号（需要好友的达人步兑账号已绑定手机，若未绑定，需要对方先进行手机号绑定）',
    title: '请输入好友手机号',
    buttonTitle: '下一步',
    buttonEnalble: false,
    detailTitle: '最近记录',
    giving: '赠送',
    recordList: [
      // {
      //   "phone": "15131587975",
      //   "created_at": "2018-11-08 11:25:06"
      // },

    ],
    phone: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var history = options.history;
    // this.data.recordList = JSON.parse(history);
    this.getMyCard();
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
  // 赠送卡牌给朋友
  didSelectedIitem: function(e) {
    var phone = e.currentTarget.dataset.phone;
    wx.navigateTo({
      url: '../../pages/cardtofriend/cardtofriend?phone=' + phone,
    })
  },
  // input实时监听
  bindKeyInput(e) {
    var value = e.detail.value;
    if (value.length == 11) {
      this.setData({
        buttonEnalble: true,
        ['phone']: value
      });
    } else {
      this.setData({
        buttonEnalble: false
      });
    }
  },
  //  点击下一步 赠送卡牌页面
  onClickNext: function(e) {
    API.checkPhone(this.data.phone, res => {
      var info = res.data;
      wx.navigateTo({
        url: '../../pages/cardtofriend/cardtofriend?info=' + JSON.stringify(info),
      })
    });
  },
  // 获取卡牌
  getMyCard() {
    API.getMyCard(res => {
      this.setData({
        recordList: res.history,

      })
    });
  },


})