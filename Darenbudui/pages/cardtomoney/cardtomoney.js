// pages/cardtomoney/cardtomoney.js
// 卡牌兑换达人币
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goldcard: 2,
    silvercard: 3,
    note: '你已集齐x组黄金卡牌,y组白银卡牌。每组黄金卡牌兑换2个达人币，每组白银卡牌兑换1个达人币',
    list: [{
      id: 0,
      image: '../../res/sign-in/sign-in-card-x1.png',
      name: '黄金卡牌',
      num: '共1张',
    },
    {
      id: 0,
      image: '../../res/sign-in/sign-in-card-x2.png',
      name: '白银卡牌',
      num: '共1张',
    },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})