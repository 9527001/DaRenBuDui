// pages/share/share.js

var netUtil = require("../../common/netutil/netutil.js");
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerArr: [],
    headericon: '../../res/activity-2.png',
    name: '加载中..',
    appname: '达人步兑',
    stepsalltoday: '加载中..', //今日步数
    rank: '加载中..', //排名
    linkimage: '../../res/qr_code_test.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http();
    this.setData({
      headericon: getApp().globalData.userInfo.header,
      name: getApp().globalData.userInfo.username
    });
    this.create_qr_code();
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
    var result = API.share_for_step(getApp().globalData.userInfo.open_id);
    return result;
  },
  // 当前页数据
  http: function() {
    var path = 'get-share-back/1';
    netUtil.request_get(path, res => {
      this.setData({
        bannerArr: res.data,
        rank: res.sort,
        stepsalltoday: res.step
      })

    })
  },

  // 制作小程序二维码 接口有问题
  create_qr_code() {

    API.create_qr_code(res => {
      this.setData({
        ['linkimage']: res.data
      })

    })
  }
})