// pages/home/home.js

var netUtil = require("../../common/netutil/netutil.js");
var API = require(getApp().globalData.api);
//require引入
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFit",
    indicatorDots: true,
    autoplay: true,
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
    this.getBannerList();
    // this.updateUserInfo();
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
  // 四个按钮点击
  onclickitem: function(event) {
    var id = event.currentTarget.dataset.id;
    switch (id) {
      case 0:
        this.toSignIn();
        break;
      case 1:
        this.toRankinglist();
        break;
      case 2:
        wx.showToast({
          title: '邀好友',
        })
        break;
      case 3:
        this.toShare();
        break;
      default:
        wx.showToast({
          title: event.currentTarget.dataset.id + '',
        })
        break;
    }

  },
  toSignIn() {
    wx.navigateTo({
      url: '../../pages/sign-in/sign-in',
    })
  },
  toRankinglist() {
    wx.navigateTo({
      url: '../../pages/rankinglist/rankinglist',

    })
  },
  toShare() {
    wx.navigateTo({
      url: '../../pages/share/share',
    })
  },

  // 下拉刷新
  refreshData() {
    var currentPage = 0;
    this.http();
  },
  // 网络请求
  http() {
    netUtil.request_param("pointgoodslist", {
      type: 1,
      page: this.currentPage,
      position: 2,
    }, res => {
      this.setData({
        tradeList: res.data
      })

    })
  },

  getBannerList() {
    netUtil.request("banners", res => {

      console.log('请求成功' + res.data);
      console.log('请求成功' + res.data.data);
      this.setData({
        bannerArr: res.data
      })

    } )

    // API.getBanner(res => {
    //   this.setData({
    //     bannerArr: res.data
    //   })
    // });

  },
  onClickItem: function(event) {
    var id = event.currentTarget.dataset.item.id;
    var goods_type = event.currentTarget.dataset.item.goods_type;
    console.log(event);
    wx.navigateTo({
      url: getApp().globalData.routes.exchangedetail + '?id=' + id + '&goods_type=' + goods_type,
    })
  },


})