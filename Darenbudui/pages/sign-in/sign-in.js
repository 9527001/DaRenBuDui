// pages/sign-in/sign-in.js

var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: {
      "status_code": 200,
      "today": 1, //今天所获卡牌号，未签到or数字
      today_real: '未签', //  today = '未签到' ? '未签' :  today
      isSignin: false, //是否签到 true 已签到 false 未签到
      "count": 1, //连续签到天数
      'repair': 100, //补签所需步数
      "repairDays": 1, //可以补签的天数
      "data": [{
        "date": "2018-10-07",
        value: '07',
        "sign": 1, //当天是否签到，1签到2未签到
        "count": 1,
        "today": 2, //是否为今天，1今天2不是
        status: 0, // 0.nomal  1.补卡 2.已签到   补卡规则：当天的前两天可以补卡
      }, ]
    },

    signininfo: {
      "message": "签到成功",
      "card_name": "4",
      "sign_step": 100,
    },

    // 补签数额
    supplementMoney: 300,
    currentIndex: 0,
    currentItem: {}, //当前选中的补签item
    repairDays: 0, //可以补签的天数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http();
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

  //点击签到按钮 
  onClickSignin: function(event) {
    API.signin(res => {
      this.setData({
        signininfo: res.data
      });
      //签到成功刷新数据
      this.http();
      this.showSignSuccess();
    })
  },

  //已签到 点击事件  
  onClickSignined() {
    // 不作操作
  },


  //签到成功的弹窗
  showSignSuccess: function() {
    this.signinsuccess = this.selectComponent('#signinsuccess');
    this.signinsuccess.show();
  },

  //签到成功--确认收到
  onClickSignSuccess: function(event) {
    wx.showToast({
      title: '已确定',
    })
  },

  // 点击补签
  onClickCalendar: function(event) {
    var item = event.currentTarget.dataset.item;
    this.onSupplement();
    //确定当前点击目标
    var currentIndexTmp = 0;
    for (var index in this.data.list.data) {
      var itemTmp = this.data.list.data[index];
      if (itemTmp.date == item.date) {
        currentIndexTmp = index;
      }
    }
    this.setData({
      currentItem: item,
      currentIndex: currentIndexTmp
    })

    console.log(item, this.data.currentItem);

  },

  // 确认补签
  clickConfirm: function(e) {

    API.repair_sign({
      date: this.data.currentItem.date,
    }, res => {
      wx.showToast({
        title: '补签成功',
      });
      // this.setData 怎么给对象动态赋值   'list.data[${index}].status' 错误，'list.data[' + index+'].status' 正确
      var index = this.data.currentIndex;
      let currentValue = 'list.data[' + index + '].status';
      console.log(this.data.repairDays, this.data.list.repairDays);
      var repairDaysTmp = this.data.repairDays;
      repairDaysTmp = repairDaysTmp - 1;
      this.setData({
        [currentValue]: 2,
        ['repairDays']: repairDaysTmp,

      })
    })

  },

  //签到规则
  onClickSignInRules: function() {
    wx.navigateTo({
      url: '../../pages/sign-in-rules/sign-in-rules',
    })
  },
  // 我的卡牌
  onClickMyCard() {
    wx.navigateTo({
      url: '../../pages/mycard/mycard',
    })
  },
  // 签到数据
  http() {
    API.getSignData(res => {
      var arr = res.data;
      var repairDays = 0;
      for (var index in arr) {
        var item = arr[index];
        item.value = item.date.substring(item.date.length - 2);
        item.status = (item.sign == 1) ? 2 : 0;
        if (item.today == 1) { //如果是当前，前两天判断

          if (index >= 0) {
            var yesterdayItem = arr[index - 1];
            if (yesterdayItem.sign == 2) {
              yesterdayItem.status = 1;
              repairDays++;
            }
          }
          if (index > 1) {
            var theDayBeforeYesterdayItem = arr[index - 2];
            if (theDayBeforeYesterdayItem.sign == 2) {
              theDayBeforeYesterdayItem.status = 1;
              repairDays++;

            }
          }

        }
      }

      this.setData({
        list: res,
        ['list.today_real']: (res.today == '未签到') ? '未签' : res.today,
        ['list.isSignin']: (res.today == '未签到') ? false : true,
        ['list.isSignin']: (res.today == '未签到') ? false : true,
        repairDays: repairDays,
        ['list.repairDays']: repairDays,
      })
    })
  },


})