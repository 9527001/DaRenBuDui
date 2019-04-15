// pages/exchangedetail/exchangedetail.js

var netUtil = require("../../common/netutil/netutil.js");
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    share:{
      image:'../../res/share/share-logo.png',
      title:'筹步海报',
    },
    id: '',
    goods_type: '',
    banner:{
      indicator: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      indicatoractivecolor: '#000000',
      indicatorcolor:'white',
      circular: false,
    },
    info: {
      "id": 4,
      "name": "",
      "description": "test",
      "spec": "小猪佩奇圆形挎包",
      "price": 0,
      "stock": 0,
      "type": 1, //兑换类别 1计步兑换 2积分兑换
        "change_point": 0,
      "status": 1, // 商品上架
      "send_point": null,
      "send_type": 1, // 包邮
      "is_recharge": 0, // 充值类型 0没有充值 1话费 2腾讯视频 3爱奇艺 4优酷 5QQ音乐
      "go_top": 0,
      "created_at": "2018-07-31 10:07:13",
      "updated_at": null,
      "image": [
        "http://clockadmin.weiyingjia.org/uploads/2018-08-14/201808141717285662.jpg"
      ],
      "price_format": 0,
      "img": [
        {
          "id": 87,
          "goods_id": 9,
          "path": "/uploads/2018-08-14/201808141717285662.jpg",
          "created_at": "2018-08-14 17:17:28",
          "updated_at": null
        }
      ]
    },
    list: [{
      header: "https://wx.qlogo.cn/mmopen/vi_32/y43DNhbNQhzQicEC7cVU555TPtZ7z2q6HO83Yrq9E9HpsoJ1puuIdgkNZ7zUOARtibxT7HNrYK3zgiaZcCkzAw52Q/132",
      username: "Live_123?",
      goods_name: "Text步数兑换积分-01",
      created_at: "6小时前",
    },  ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var str = options.id.toString();
    this.setData({
      id: str,
      goods_type: options.goods_type
    })

    this.http(options.id,options.goods_type);

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
  // 当前页面数据
  http: function(id, type) {
    var path = 'pointgoods/' + id + '/' + type;
    netUtil.request_get(path, res => {
      this.setData({
        list: res.order,
        info: res.data
      })

    })

  },
  // 分享
  onclickshare() {
    wx.navigateTo({
      url: getApp().globalData.routes.share,
    })
  },
  // 兑换商品
  onClickExchange() {
    this.stepcount = this.selectComponent('#stepcount');
    this.stepcount.show();
  },
  // 请好友凑步数
  onclickAdd: function(e) {
     wx.showToast({
       title: '请好友凑步数',
     }),
    wx.showShareMenu({
      withShareTicket: true
    });
  },

})