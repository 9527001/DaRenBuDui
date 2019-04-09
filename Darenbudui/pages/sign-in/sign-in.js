// pages/sign-in/sign-in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // status 0 normal 1 signed 2可以补卡
    calendarList: [{
        value: 31,
        status: 2,
      },
      {
        value: 1,
        status: 2,
      },
      {
        value: 2,
        status: 0,
      },
      {
        value: 3,
        status: 0,
      },
      {
        value: 4,
        status: 2,
      },
      {
        value: 5,
        status: 2,
      },
      {
        value: 6,
        status: 1,
      },
      {
        value: 7,
        status: 1,
      },
      {
        value: 8,
        status: 0,
      },
      {
        value: 9,
        status: 0,
      },
      {
        value: 10,
        status: 0,
      },
      {
        value: 11,
        status: 0,
      },
      {
        value: 12,
        status: 0,
      },
      {
        value: 13,
        status: 0,
      },
    ],
    // 补签数额
    supplementMoney: 300,
    currentIndex:0,
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
  // 弹窗
  onSupplement: function() {
    this.supplement = this.selectComponent('#supplement');
    this.supplement.show();
  },

  onClickCalendar: function(event) {
    var item = event.currentTarget.dataset.item;
    var index = 0;
    for (let i = 0; i < this.data.calendarList.length; i++) {
      var itemTmp = this.data.calendarList[i];
      if (itemTmp.value == item.value) {

        index = i;
        break;
      }
    }


    var temp_str = 'calendarList[' + index + '].status';

    if (item.status == 2) {
      this.onSupplement();
      this.setData({
        currentIndex:index
      })

    }
  },

  // 确认补签
  clickConfirm: function(e) {
    console.log('e.currentTarget.dataset', e.detail);
    var temp_str = 'calendarList[' + this.data.currentIndex + '].status';
    this.setData({
      [temp_str]: 1
    })
  },
   
  //签到规则
   onClickSignInRules: function() {
     wx.navigateTo({
       url: '../../pages/sign-in-rules/sign-in-rules',
     })
   },

  onClickMyCard(){
    wx.navigateTo({
      url: '../../pages/mycard/mycard',
    })
  },
   

})