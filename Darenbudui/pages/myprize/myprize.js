// pages/myprize/myprize.js
// 我的抽奖
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.http(1);
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
  http(type){
    API.getMyLuck(type,res=>{
        this.setData({
          list: res.list
        })
    });
  },
  onChange(event) { 
    var index = event.detail.index;
    this.http(index +1);
  },
  // item点击
  onClickItem: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: getApp().globalData.routes.activitydetail + '?id=' + id,
    });
  },

})