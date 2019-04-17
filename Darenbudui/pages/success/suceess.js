// pages/success/suceess.js
var netUtil = require("../../common/netutil/netutil.js");
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tradeList:[],
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
  // 网络请求
  http() {
    netUtil.request_param("pointgoodslist", {
      type: 1,
      page: 1,
      position: 2,
    }, res => {
      this.setData({
        tradeList: res.data
      })

    })
  },
  // 商品详情
  onClickItem: function (event) {
    var id = event.currentTarget.dataset.item.id;
    var goods_type = event.currentTarget.dataset.item.status;
    console.log(event);
    wx.navigateTo({
      url: getApp().globalData.routes.exchangedetail + '?id=' + id + '&goods_type=' + goods_type,
    })
  },
})