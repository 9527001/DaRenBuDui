// pages/activitydetail/activitydetail.js
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "info": {
      "id": "1",
      "gift_name": "123",
      "gift_img": "https://clockadmin.yunpaas.cn/uploads/2019-03-05/201903051602075959.png",
      "gift_type": 2,
      "gift_type_text": "5",
      "active_desc": "<p>567</p>",
      "gift_desc": "<p>678</p>",
      "total_people": 10,
      "ceil_people": 0,
      "is_join": true,
      "status": 3,
      "status_text": "已开奖",
      "is_win": 2, // 1：已中奖 2：未中奖 3：未开奖,
         "win_header": "djsakldjsa",
      "win_name": "dasdas",
      "is_receive": true
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.http(options.id)
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
  http(id){
    
    API.getLuckInfo(id,res=>{
      var item = res.info;
      if (item.status == "进行中") {
        item.statusimage = '../../res/activity/activity-underway.png';
      } else if (item.status == "已开奖") {
        item.statusimage = '../../res/activity/activity-done.png';
      } else {
        item.statusimage = '../../res/activity/activity-underway.png';
      }
      this.setData({
        info: item
      });
    });
  }
})