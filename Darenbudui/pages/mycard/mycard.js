// pages/mycard/mycard.js
var netUtil = require("../../common/netutil/netutil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goldcardList: [{
      id: 0,
      image: '../../res/sign-in/sign-in-card-2.png',
      num: 0,
    }, {
      id: 1,
      image: '../../res/sign-in/sign-in-card-3.png',
      num: 0,
    }, {
      id: 2,
      image: '../../res/sign-in/sign-in-card-3.png',
      num: 0,
    }, {
      id: 3,
      image: '../../res/sign-in/sign-in-card-4.png',
      num: 0,
    }],
    silvercardList: [{
      id: 0,
      image: '../../res/sign-in/sign-in-card-0.png',
      num: 0,
    }, {
      id: 1,
      image: '../../res/sign-in/sign-in-card-1.png',
      num: 0,
    }, {
      id: 2,
      image: '../../res/sign-in/sign-in-card-6.png',
      num: 0,
    }, {
      id: 3,
      image: '../../res/sign-in/sign-in-card-7.png',
      num: 0,
    }, {
      id: 4,
      image: '../../res/sign-in/sign-in-card-8.png',
      num: 0,
    }, {
      id: 5,
      image: '../../res/sign-in/sign-in-card-9.png',
      num: 0,
    }, ],
    note: '卡牌兑换说明',
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
  http(){
    netUtil.request_get('my-card',res=>{
      
    })
  },
  onClickCardToFriend() {
    wx.navigateTo({
      url: '../../pages/cardtofriendRecord/cardtofriendRecord',
    })
  },
  onClickCardToMoney(){
    wx.navigateTo({
      url: '../../pages/cardtomoney/cardtomoney',
    })
  }
})