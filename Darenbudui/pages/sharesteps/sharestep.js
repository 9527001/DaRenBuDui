// pages/sharesteps/sharestep.js
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 推荐商品列表
    tradeList: [],
    info: {
      // "this_user": {
      //   "step": 6633,
      //   "name": "💋 时顷.",
      //   "header": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK9Nz2ju9ABPV4vLNdAfzb8ZnHBPT6pQzXicJKibK6DCib8ibc8xw3nmlVuWw3TTJiaezd0rxZl81pmuzw/132",
      //   "user_id": 1
      // },
      // "send_user": {
      //   "step": 3576,
      //   "name": "ヒューイヾ",
      //   "header": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJiciaKhsMOxBicuhkI4wbv2ccfVRm3IwdW0icg6p5tYTAusL0kPIibngNYOmCEzwnSuhcpY9AZ106qQlQ/132",
      //   "user_id": 2
      // }
    },
    share_step_number: 0,
    open_id: '', //受赠人ID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http();
    this.httpForShareInfo(options.open_id);
    this.setData({
      open_id: options.open_id
    })

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
  // 网络请求
  http() {
    API.getGoodsList({
      type: 1,
      page: 1,
      position: 2,
    }, res => {
      this.setData({
        tradeList: res.data
      })

    })
  },
  // 商品详情
  onClickItem: function(event) {
    var id = event.currentTarget.dataset.item.id;
    var goods_type = event.currentTarget.dataset.item.status;
    console.log(event);
    wx.navigateTo({
      url: getApp().globalData.routes.exchangedetail + '?id=' + id + '&goods_type=' + goods_type,
    })
  },

  // 获取用户信息
  httpForShareInfo(open_id) {
    API.get_share_info(open_id, res => {
      this.setData({
        ['info.this_user']: res.this_user,
        ['info.send_user']: res.send_user
      })
    })
  },
  bindinputvalue: function(e) {
    const value = e.detail.value;
    this.setData({
      share_step_number: value
    })
  },

  // 赠送按钮
  onClickAtConfirm() {
    console.log('发送消息', this.data.info.send_user.user_id);
    this.share_step(this.data.share_step_number, this.data.info.send_user.user_id);

  },
  // 赠送步数
  share_step(step, send_user_id) {
    API.share_step(step, send_user_id, res => {
      
      var url = getApp().globalData.routes.success + '?type=1';
      wx.navigateTo({
        url: url,
      })
    })
  }

})