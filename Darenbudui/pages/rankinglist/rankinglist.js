// pages/rankinglist/rankinglist.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranking: 1005,
    avtarurl: '../../res/activity-2.png',
    name: '吴文西东',
    money: '10.32',

    list: [{
        id: 1,
        rank: 4,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test',
        num: 999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
      {
        id: 2,
        rank: 5,
        header: 'https://clock.yunpaas.cn/appLetImg/default-head.png',
        username: 'test1',
        num: 9999,
      },
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

})