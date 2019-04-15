// pages/rules/rules.js

var API = require(getApp().globalData.api);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      "status_code": 200,
      "data": "请求失败，下拉重试",//达人步兑小程序的说明
      "sign": "签到规则",//签到规则
    },
  
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
    this.http();
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
  // 数据请求
  http(){
    API.getRule(res=> {
      this.setData({
        info:res
      })
    });
  },

})