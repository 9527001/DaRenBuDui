// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList: [{
      id: 0,
      img: '../../res/activity-3.png',
      name: '大转盘',
    }, {
      id: 1,
      img: '../../res/activity-2.png',
      name: '幸运抽奖',
    }],
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

  onclickAd: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.showToast({

      title: event.currentTarget.dataset.item.name,
    })
    
 
  }
})