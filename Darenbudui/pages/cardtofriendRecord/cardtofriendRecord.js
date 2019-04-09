// pages/cardtofriendRecord/cardtofriendRecord.js
// 送卡牌给朋友及历史记录
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: '请输入好友手机号（需要好友的达人步兑账号已绑定手机，若未绑定，需要对方先进行手机号绑定）',
    title: '请输入好友手机号',
    buttonTitle: '下一步',
    detailTitle: '最近记录',
    giving: '赠送',
    recordList: [{
        id: 1,
        phone: 1851311970,
        time: '2019-08-09 22:29:21',
      },
      {
        id: 2,
        phone: 1851311971,
        time: '2019-08-07 22:29:21',
      }
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
  didSelectedIitem:function(e) {
    var ID = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/cardtofriend/cardtofriend',
    })
  },
})