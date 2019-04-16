// pages/cardtofriend/cardtofriend.js
// 送卡牌给朋友
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 0,
      image: '../../res/sign-in/sign-in-card-1.png',
      name: '白银卡1张',
      num: '共1张',
      card_name: 2,
      number: 0
    }, ],

    info: {
      header: "",
      phone: "****",
      user_id: 45,
      username: "unkown",
    },
    uploadList: [],
    toFriendCardNumber: 0,
    startNumber: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if(options.info) {

      var info = options.info;
      this.data.info = JSON.parse(info);
      this.setData({
        info: JSON.parse(info)
      });
    }
    if(options.phone) {
      
      this.getFriendInfo(options.phone);
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getMyCard();
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
  // 点击赠送按钮
  onClickCardTo() {
    var uploadListTmp = [];
    for (var index in this.data.uploadList) {
      var item = this.data.uploadList[index];
      if (item.count > 0) {
        uploadListTmp.push(item);
      }

    }
    API.send_card(this.data.info.user_id, JSON.stringify(uploadListTmp), res => {
      this.showCardtosuccess();
      this.getMyCard();


    });
  },
  showCardtosuccess() {
    this.cardtosuccess = this.selectComponent('#cardtosuccess');
    this.cardtosuccess.show();
  },
  clickConfirm() {

    var pages = getCurrentPages(); //当前页面栈
    if (pages.length > 2) {
      var beforePage = pages[pages.length - 3]; //获取上一个页面实例对象
      beforePage.http(); //触发父页面中的方法
    }
    wx.navigateBack({
      delta: 2 //返回上上级
    })
  },
  // 获取卡牌
  getMyCard() {
    API.getMyCard(res => {
      var arr = res.member_card.first;
      arr = arr.concat(res.member_card.end);
      // 初始化上传数据
      var uploadListTmp = [];
      for (var index in arr) {
        var item = arr[index];
        var itemTmp = {};
        itemTmp.card_name = item.card_name;
        itemTmp.count = 0;
        uploadListTmp.push(itemTmp);
      }
      // 处理显示数据
      for (var index in arr) {
        var item = arr[index];
        if (item.card_name == 2 ||
          item.card_name == 3 ||
          item.card_name == 4 ||
          item.card_name == 5) {
          item.name = '黄金卡牌' + item.card_name;

        } else {
          item.name = '白银卡牌' + item.card_name;
        }
        item.image = '../../res/sign-in/sign-in-card-' + item.card_name + '.png'
        item.num = '共' + item.number + '张';
      }


      this.setData({
        list: arr,
        history: res.history,
        uploadList: uploadListTmp,
        startNumber: 0

      })
    });
  },
  // 更新卡牌数量
  onChange: function(e) {

    var currentvalue = e.detail;
    var item = e.currentTarget.dataset.item;
    var arr = this.data.uploadList;
    var currindex = 0;
    for (var index in arr) {
      var itemTmp = arr[index];
      if (itemTmp.card_name == item.card_name) {
        currindex = index;
        itemTmp.count = currentvalue;
      }
    }
    let currentitemStr = 'uploadList[' + currindex + '].count';
    this.setData({
      [currentitemStr]: currentvalue,
      // toFriendCardNumber: this.data.toFriendCardNumber
    });

  },
  // 更新卡牌数量  +
  onChangeAtPlus: function(e) {


    this.data.toFriendCardNumber = this.data.toFriendCardNumber + 1;
    this.setData({
      // [currentitemStr]: currentvalue,
      toFriendCardNumber: this.data.toFriendCardNumber
    });

  },
  // 更新卡牌数量  -
  onChangeAtMinus: function(e) {

    this.data.toFriendCardNumber = this.data.toFriendCardNumber - 1;
    this.setData({
      // [currentitemStr]: currentvalue,
      toFriendCardNumber: this.data.toFriendCardNumber
    });
  },
  // 获取用户信息
  getFriendInfo: function(phone) {
    API.checkPhone(phone, res => {
      var info = res.data;
      this.setData({
        info: res.data
      });
    });
  },


})