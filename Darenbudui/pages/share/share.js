// pages/share/share.js

var netUtil = require("../../common/netutil/netutil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerArr: [
      "../../res/activity-2.png",
      "../../res/activity-2.png",
      "../../res/activity-2.png",
    ],
    headericon: '../../res/activity-2.png',
    name: 'test',
    appname: '达人步兑',
    stepsalltoday: '今日总步数8698步',
    rank: 23,
    linkimage: '../../res/activity-2.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http();
    this.setData({
      headericon: getApp().globalData.userInfo.header,
      name: getApp().globalData.userInfo.username
    })
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
 
  http: function () {
    var path = 'get-share-back/1';
    netUtil.request_get(path, res => {
      this.setData({
        bannerArr: res.data
      })

    })

  },
})