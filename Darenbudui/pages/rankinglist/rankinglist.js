// pages/rankinglist/rankinglist.js

const app = getApp();
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 自己排名
    myinfo: {
      "username": "该用户暂未授权",
      "header": "https://clock.yunpaas.cn/appLetImg/default-head.png",
      "rank": 1,
      "num": 9999999
    },
// 排名列表
    list: [
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
    ],
    prizelist: [{
        id: 1,
        rank: 2,
        hat: '../../res/rankinglist/rankinglist-silver.png',
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: '银牌',
        num: 9999,
      }, {
        id: 0,
        rank: 1,
        hat: '../../res/rankinglist/rankinglist-gold.png',
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: '金牌',
        num: 99999,
      },
      {
        id: 2,
        rank: 3,
        hat: '../../res/rankinglist/rankinglist-copper.png',
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: '铜牌',
        num: 999,
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
  // 活动规则
  onClickRule() {
    wx.navigateTo({
      url: '../../pages/rankinglistrule/rankinglistrule',
    })
  },
  http() {
    
    API.getRankList(res => {
      var data = res.data;
      this.setData({
        myinfo: data.pointSelfRank,
        list: data.pointRankList,
        'prizelist[0]': data.pointRankList[1],
        'prizelist[1]': data.pointRankList[0],
        'prizelist[2]': data.pointRankList[2],
        'prizelist[0].hat': '../../res/rankinglist/rankinglist-silver.png',
        'prizelist[1].hat': '../../res/rankinglist/rankinglist-gold.png',
        'prizelist[2].hat': '../../res/rankinglist/rankinglist-copper.png',

      });

      // 去除前三名
      this.data.list.splice(0, 3);
      this.setData({
        list: this.data.list
      })
    });
  },

})