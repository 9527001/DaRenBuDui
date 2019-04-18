// pages/activitylist/activitylist.js
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
    //   {
    //   ceil_people: 0,//实际还需参与人数
    //   gift_img: "http://f_clockadmin.weiyingjia.org/uploads/2019-04-17/201904171535508812.png",
    //   gift_name: "测试5达人",
    //   id: 23,
    //   is_join: false,//  是否参与
    //   status: "已开奖",
    //   statusimage: "../../res/activity/activity-done.png",
    //   total_people: 3
      // join_text: '参与抽奖' ,//is_join ？已参与： 参与抽奖
    // }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http(1);
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
  http(type) {
    API.getLuckList(type, res => {
      var arr = res.list;
      for (var index in arr) {
        var item = arr[index];
        if (item.status == "进行中") {
          item.statusimage = '../../res/activity/activity-underway.png';
        } else if (item.status == "已开奖") {
          item.statusimage = '../../res/activity/activity-done.png';
        } else {
          item.statusimage = '../../res/activity/activity-underway.png';
        }
        if (item.is_join){
          item.join_text = '已参加';
        }else{
          item.join_text = '参与抽奖';
        }
        item.all_participate_people = item.total_people - item.ceil_people; 
      }
      this.setData({
        list: arr
      })
    });
  },
  // 标签切换
  onChange(event) {
    this.http(event.detail.index + 1);
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.index + 1}`,
    //   icon: 'none'
    // });
  },
  // item点击
  onClickItem: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: getApp().globalData.routes.activitydetail + '?id=' + id,
    });
  },
})