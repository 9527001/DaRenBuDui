// pages/exchangedetail/exchangedetail.js

var netUtil = require("../../common/netutil/netutil.js");
var API = require(getApp().globalData.api);
var WxParse = require('../../common/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    share: {
      image: '../../res/share/share-logo.png',
      title: '筹步海报',
    },
    id: '',
    goods_type: '',
    banner: {
      indicator: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      indicatoractivecolor: '#000000',
      indicatorcolor: 'white',
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
      detail: '', //图文混排
      "image": [
        "http://clockadmin.weiyingjia.org/uploads/2018-08-14/201808141717285662.jpg"
      ],
      "price_format": 0,
      "img": [{
        "id": 87,
        "goods_id": 9,
        "path": "/uploads/2018-08-14/201808141717285662.jpg",
        "created_at": "2018-08-14 17:17:28",
        "updated_at": null
      }]
    },
    list: [{
      header: "https://wx.qlogo.cn/mmopen/vi_32/y43DNhbNQhzQicEC7cVU555TPtZ7z2q6HO83Yrq9E9HpsoJ1puuIdgkNZ7zUOARtibxT7HNrYK3zgiaZcCkzAw52Q/132",
      username: "Live_123?",
      goods_name: "Text步数兑换积分-01",
      created_at: "6小时前",
    }, ],
    // 个人信息同步
    selfInfo: {
      points: 0,
    },
    // 实物地址信息
    addressInfo: {
      cityName: "广州市",
      countyName: "海珠区",
      detailInfo: "新港中路397号",
      errMsg: "chooseAddress:ok",
      nationalCode: "510000",
      postalCode: "510000",
      provinceName: "广东省",
      telNumber: "020-81167888",
      userName: "张三",
      address: ''
    },


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var str = options.id.toString();
    this.setData({
      id: str,
      goods_type: options.goods_type,
      'selfInfo.points': getApp().globalData.userInfo.point
    })

    this.http(options.id, options.goods_type);

    // var article = '<div>我是HTML代码</div>';
    // /**
    // * WxParse.wxParse(bindName , type, data, target,imagePadding)
    // * 1.bindName绑定的数据名(必填)
    // * 2.type可以为html或者md(必填)
    // * 3.data为传入的具体数据(必填)
    // * 4.target为Page对象,一般为this(必填)
    // * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    // */
    // var that = this;
    // WxParse.wxParse('article', 'html', article, that, 5);

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
      var article = res.data.detail;
      /**
      * WxParse.wxParse(bindName , type, data, target,imagePadding)
      * 1.bindName绑定的数据名(必填)
      * 2.type可以为html或者md(必填)
      * 3.data为传入的具体数据(必填)
      * 4.target为Page对象,一般为this(必填)
      * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
      */
      var that = this;
      WxParse.wxParse('article', 'html', article, that, 5);
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

    if (this.data.selfInfo.points < this.data.info.price) { //如果达人币不够，凑步数 否则
      this.showStepCount();
      return;
    }

    if (this.data.info.is_recharge == 0) { //实物
      wx.chooseAddress({
        success: (res) => {
          this.setData({
            addressInfo: res,
            'addressInfo.address': res.provinceName + res.cityName + res.countyName + res.detailInfo
            

          })
          this.showAddressconfirm();
        },
        fail: function(err) {
          console.log('获取地址失败：', err)
        }
      })
    } else { //虚拟 充值产品
      this.showAddressconfirm();
    }



  },
  // 显示凑步数提示
  showStepCount() {
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

  //确认地址信息
  showAddressconfirm() {
    this.addressconfirm = this.selectComponent('#addressconfirm');
    this.addressconfirm.show();
  },
  // 地址信息确认
  onClickConfirmAtAddress: function(e) {
    var params = {
      'id': this.data.info.id,
      'number': 1,
      'real_name':this.data.addressInfo.userName,
      'phone': parseInt(this.data.addressInfo.telNumber),
      'address': this.data.addressInfo.address,
      'goods_type': this.data.info.goods_type,
      'recharge_number': parseInt(e.detail),//虚拟手机号
    };
    API.change_goods(params, res => {
        // 兑换成功
        wx.navigateTo({
          url: getApp().globalData.routes.success,
        }) 
    });

  },

})