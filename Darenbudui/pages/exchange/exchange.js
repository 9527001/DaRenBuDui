// pages/exchange/exchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tradeList: [{
      img: '../../res/activity-3.png',
      name: '晴雨伞',
      stock: '10',
      price: '111',
    }, {
      img: '../../res/activity-2.png',
      name: '纸巾/箱',
      stock: '10',
      price: '111',
    }],

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