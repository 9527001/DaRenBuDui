// pages/my/my.js
var netUtil = require("../../common/netutil/netutil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [{
      id: 0,
      img: '../../res/my-sign-in.png',
      name: '每日签到'
    }, {
      id: 1,
      img: '../../res/my-invite-friends.png',
      name: '邀请好友'
    }, {
      id: 2,
      img: '../../res/my-orderlist.png',
      name: '我的订单'
    }, {
      id: 3,
      img: '../../res/my-shopping-address.png',
      name: '收货地址'
    }, {
      id: 4,
      img: '../../res/my-list.png',
      name: '排行榜'
    }, {
      id: 5,
      img: '../../res/my-lucky-draw.png',
      name: '我的抽奖'
    }, {
      id: 6,
      img: '../../res/my-mutual-record.png',
      name: '互助记录'
    }, {
      id: 7,
      img: '../../res/my-rule-description.png',
      name: '规则说明'
    }, ],
    setttingList: [{
      id: 0,
      img: '../../res/my-setting.png',
      name: '设置',
    }, ],

    //用户个人信息
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户昵称
      phoneNumber: "", //用户手机号
      point: '0', //达人币余额
      time: '0', //累计天数
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var header = getApp().globalData.userInfo.header;
    var username = getApp().globalData.userInfo.username;
    var phone = getApp().globalData.userInfo.phone;
    var point = getApp().globalData.userInfo.point;
    this.setData({
      'userInfo.avatarUrl': header,
      'userInfo.nickName': username,
      'userInfo.phoneNumber': phone,
      'userInfo.point': point
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
  onClickItem: function(event) {
    var ID = event.currentTarget.dataset.id;
    switch (ID) {
      case 0: //签到
        wx.navigateTo({
          url: getApp().globalData.routes.signIn,
        })
        break;
      case 1: //邀请好友
        {
          wx.showShareMenu({
            withShareTicket: true
          });
        }
        break;
      case 2: //我的订单
        {
          wx.navigateTo({
            url: getApp().globalData.routes.orderlist,
          })
        }
        break;
      case 3: //收货地址
        {
          this.chooseAddress();
        }
        break;
      case 4: //排行榜
        wx.navigateTo({
          url: getApp().globalData.routes.rankinglist,
        })
        break;
      case 5: //我的抽奖
        wx.navigateTo({
          url: getApp().globalData.routes.myprize,
        })
        break;
      case 6: //互助记录
        wx.navigateTo({
          url: getApp().globalData.routes.helpEachOtherRecord,
        })
        break;
      case 7: //规则说明
        wx.navigateTo({
          url: getApp().globalData.routes.rules,
        })
        break;
      default:
        break;
    }
  },


  // 获取地址
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        console.log('获取地址成功：', res);
        this.setData({
          addressInfo: res

        })
      },
      fail: function(err) {
        console.log('获取地址失败：', err)
      }
    })
  },

  // 设置
  onClickSetting() {
    wx.openSetting({
      success(res) {
        console.log('获取设置权限', res);
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  // 获取手机号
  getPhoneNumber: function(e) {
    console.log(e);
    // session	string
    // iv	string
    // encryptData	string	
    var iv = encodeURIComponent(e.detail.iv);
    var encryptData = encodeURIComponent(e.detail.encryptedData);
    var info = getApp().globalData.userInfo;
    var session = getApp().globalData.userInfo.session;
    console.log(info);
    netUtil.reqest_post_param("get-user-phone", {
      session: session,
      iv: iv,
      encryptData: encryptData,
    }, res => {
      this.setData({
        'userInfo.phoneNumber': res.phone_number
      })
    })
  },
  onGotUserInfo(e) {
    var info = e.detail.userInfo;
    console.log(e);
    this.setData({
      'userInfo.avatarUrl': e.detail.userInfo.avatarUrl,
      'userInfo.nickName': e.detail.userInfo.nickName
    });

    this.updateUserInfo(e.detail.userInfo.avatarUrl, e.detail.userInfo.nickName);

  },
  updateUserInfo: function(avatarUrl, nickName) {
    var data = {
      uid: getApp().globalData.userInfo.uid,
      nickName: nickName,
      avatarUrl: avatarUrl,
    }
    netUtil.reqest_post_param('update-user-info',
      data, res => {

      })
  },

})