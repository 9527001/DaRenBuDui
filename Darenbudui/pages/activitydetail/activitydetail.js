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
      "gift_type": 2, //抽奖类型
      "gift_type_text": "5", //抽奖所需达人币
      "active_desc": "<p>567</p>",
      "gift_desc": "<p>678</p>",
      "total_people": 10,
      "ceil_people": 0,
      join_id:1,//加入抽奖活动分配的id
      "is_join": true, //是否参与 
      "status": 3, //抽奖状态 1.进行中 2.未知（暂时认为关闭） 3.已开奖
      "status_text": "已开奖",
      "is_win": 2, //状态 1：已中奖 2：未中奖 3：未开奖,
      "prize_type": 1, //参与总状态 1.进行中，未参与-10  2.进行中，已参与-11  3.已开奖，未中奖-32 4.已开奖，中奖了-31 5.已开奖，已领奖-33
      "win_header": "djsakldjsa",
      "win_name": "dasdas",
      "is_receive": true,
      success: true, //是否已获奖
    },
    control: {
      receive_enable: false, //可以领取
    },
    // 收货人信息
    addressInfo: {
      name: '',
      phone: '',
      address: '',
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.http(options.id)
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
  // 抽奖详情
  http(id) {

    API.getLuckInfo(id, res => {
      var item = res.info;
      if (item.status == 1) {
        item.statusimage = '../../res/activity/activity-underway.png';
      } else if (item.status == 3) {
        item.statusimage = '../../res/activity/activity-done.png';
      } else {
        item.statusimage = '../../res/activity/activity-underway.png';
      }
      //参与总状态 1.进行中，未参与-10  2.进行中，已参与-11  3.已开奖，未中奖-32 4.已开奖，中奖了-31(+未领取) 5.已开奖，已领奖-33   0.其他
      if (item.status == 1 && !item.is_join) {
        item.prize_type = 1;

      } else if (item.status == 1 && item.is_join) {
        item.prize_type = 2;
      } else if (item.status == 3 && item.is_win == 2) {
        item.prize_type = 3;
        this.showPrizeToast();
      } else if (item.status == 3 && item.is_win == 1 && !item.is_receive) {
        item.prize_type = 4;
        this.showPrizeToast();
      } else if (item.status == 3 && item.is_receive) {
        item.prize_type = 5;
      } else {
        item.prize_type = 0;
      }

      // 状态 1：已中奖 2：未中奖 3：未开奖,
      if (item.is_win == 1) {
        item.success = true;
      } else {
        item.success = false;
      }
      this.setData({
        info: item
      });
    });
  },
  // 分享
  onClickShare: function(event) {
    wx.showToast({
      title: '分享',
    })
  },
  // 我要抽奖
  onClickToGetPrize: function(event) {
    this.showMoneytoprize();
  },
  //消费达人币弹窗
  showMoneytoprize: function() {
    this.moneytoprize = this.selectComponent('#moneytoprize');
    this.moneytoprize.show();
  },
  // 确认抽奖
  onClickConfirm: function(e) {
    wx.showToast({
      icon: 'none',
      title: '我要抽奖',
    });
    API.getLuckJoin(this.data.info.id, res => {
      this.http(this.data.info.id);
      // this.setData({
      //   ['info.is_join']: true,
      //   ['info.prize_type']: 2
      // });
    });
  },

  //中奖弹窗
  showPrizeToast: function() {
    this.prizenote = this.selectComponent('#prizenote');
    this.prizenote.show();
  },
  // 中奖与否确认
  onClickConirmAtPrize: function(e) {
    // wx.showToast({
    //   icon: 'none',
    //   title: this.data.info.success ? '中奖' : 'fail',
    // });
  },

  // 收货人信息监听
  onMonitorName: function(e) {
    const value = e.detail.value;
    this.data.addressInfo.name = value;

    this.setData({
      ['addressInfo.name']: value,
      ['control.receive_enable']: this.receive_enable_status()
    });



  },
  onMonitorPhone: function(e) {
    const value = e.detail.value;
    this.data.addressInfo.phone = value;
    this.setData({
      ['addressInfo.phone']: value,
      ['control.receive_enable']: this.receive_enable_status()
    })
  },
  onMonitorAddress: function(e) {
    const value = e.detail.value;
    this.data.addressInfo.address = value;
    this.setData({
      ['addressInfo.address']: value,
      ['control.receive_enable']: this.receive_enable_status()
    })
  },
  receive_enable_status() {
    if (this.data.addressInfo.name.length > 0 &&
      this.data.addressInfo.phone.length == 11 &&
      this.data.addressInfo.address.length > 0) {
      return true;
    }
    return false;
  },

  // 立即领取
  onClickToReceivePrize: function() {

    API.get_rize(this.data.info.join_id, this.data.addressInfo.name, this.data.addressInfo.phone, this.data.addressInfo.address, res => {
      wx.navigateTo({
        url: getApp().globalData.routes.getprizesuccess,
      })
    });
  },
})