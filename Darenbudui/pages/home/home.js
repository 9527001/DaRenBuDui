// pages/home/home.js
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFit",
    bannerArr: [{
        url: '../../res/activity-2.png'
      },
      {
        url: '../../res/activity-2.png'
      }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    // circular:true,

    // 更过按钮
    itemArr: [{
        id: 0,
        img: '../../res/sign-in.png',
        title: '去签到'
      },
      {
        id: 1,
        img: '../../res/list.png',
        title: '排行榜'
      },
      {
        id: 2,
        img: '../../res/invite-friends.png',
        title: '邀好友'
      },
      {
        id: 3,
        img: '../../res/steps-up.png',
        title: '凑步数'
      },
    ],

  },

  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onclickitem: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.showToast({

      title: event.currentTarget.dataset.id+ '',
    })
  },

  // 下拉刷新
  refreshData() {
    var currentPage = 0;
    this.http();
  },
  // 网络请求
  http() {

    wx.request({
      url: 'http://base.weiyingjia.org/api/base/pointgoodslist',
      data: {
        type: 1,
        page: this.currentPage,
        position: 2,
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: res => {

        console.log('请求成功' + res.data.data);
        this.setData({
          tradeList: res.data.data
        })

      },
      fail: function() {
        console.log('请求失败');
      },
      complete: function() {
        // complete
        console.log('请求完成');
      },
    })
  }
})