// pages/exchange/exchange.js
var netUtil = require("../../common/netutil/netutil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tradeList: [{
    //   img: '../../res/activity-3.png',
    //   name: '晴雨伞',
    //   stock: '10',
    //   price: '111',
    // }, {
    //   img: '../../res/activity-2.png',
    //   name: '纸巾/箱',
    //   stock: '10',
    //   price: '111',
    // }],

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


    this.refreshData();
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

    this.refreshData();
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.loadmoreData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 免费兑换按钮
  clickOnExchange: function(event) {
    wx.showToast('hello world');

  },

// 下拉加载 未实现
  loadmoreData() {

    var currentPage = this.currentPage;
    currentPage++;
    this.http();
  },

// 下拉刷新
  refreshData() {
    var currentPage = 0;
    this.http();
  },
  // 网络请求
  http() {

    netUtil.request_param("pointgoodslist", {
      type: 1,
      page: this.currentPage,
      position: 2,
    }, res => {
      this.setData({
        tradeList: res.data
      })

    })
   
  }
})