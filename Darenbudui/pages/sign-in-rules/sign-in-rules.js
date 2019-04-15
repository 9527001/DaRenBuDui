// pages/sign-in-rules/sign-in-rules.js
var netUtil = require(getApp().globalData.routes.netutil);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'签到规则说明',//签到标题 默认
    content:'',//签到规则
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.http();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  http() {
    netUtil.request_get('get-step-rule', res => {
      this.setData({
        'content': res.sign
      })
    })
  },
  
})