// pages/activity/activity.js

var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList: [
      {
        active_img: "http://f_clockadmin.weiyingjia.org/uploads/2019-03-13/201903131801118839.png",
        active_name: "幸运抽奖",
        active_page: "/my-lotto/index",
      },
    ],
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

  onclickAd: function(event) {
    var indx = event.currentTarget.dataset.index;
    var name = event.currentTarget.dataset.cell.active_name;
    if (name == '幸运抽奖'){
      wx.navigateTo({
        url: getApp().globalData.routes.activitylist,
      })
    }

  },
  http() {
    API.getActivityList(res => {

    });
  },
})