// pages/my/my.js
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
    },],
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
  onClickItem:function(event) {
    var ID = event.currentTarget.dataset.id;
    switch (ID) {
      case 1:
        {
          wx.showShareMenu({
            withShareTicket:true
          });
        }
        break;
      case 3:
      {
        this.chooseAddress();
      }
      break;
      default:break;
    }
  },


// 获取地址
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        console.log('获取地址成功：',res);
        this.setData({
          addressInfo: res
          
        })
      },
      fail: function (err) {
        console.log('获取地址失败：',err)
      }
    })
  },

  // 设置
  onClickSetting() {
    wx.openSetting({
      success(res) {
        console.log( '获取设置权限',res);
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  }
})