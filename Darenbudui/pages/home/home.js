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

    // 更多按钮
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
    info: {
      point: 0,
    },
    stepinfo: {
      "status_code": 200,
      "point": 0, //达人币
      "step": 0, //当前步数
      "send_num": 123,
      "today_num": 345,
      "phone": 18513199372,
      "ceilChangePoint": 1,
      "bubble": {
        "step": 0.01, //行走
        "use_step": 0,
        "send": 0, //赠送
        "sign": 0, //签到
        "point": 0, //跬步生财
      },


    },
    // 点击气泡的动画
    popanimation: null,
    flag: false,
    peopleisHidden: false, //跑步运动员gif显示
    bg_animation: null, //背景动画
    marquee: 0,
    signinalertisHidden: false,

    // 签到数据
    list: {
      "status_code": 200,
      "today": 1, //今天所获卡牌号，未签到or数字
      today_real: '未签', //  today = '未签到' ? '未签' :  today
      isSignin: true, //是否签到 true 已签到 false 未签到
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
    // 签到成功返回数据
    signininfo: {
      "message": "签到成功",
      "card_name": "4",
      "sign_step": 100,
    },
  },


  // 平移加缩放动画
  ani_smallbigOut: function() {
    let that = this;
    console.log("animate")
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease-in',
    })

    animation.translate(-100, -100).scale(0, 0).step();
    that.setData({
      popanimation: animation.export(),

    })

  },


  //背景动画开始
  bg_animation_lefttoright: function() {
    console.log('开始');
    let animationAction = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear'
    });
    animationAction.translate(-wx.getSystemInfoSync().windowWidth).step();
    this.setData({
      bg_animation: animationAction.export()
    })
  },
  scrolltxt: function() {
    var w = wx.getSystemInfoSync().windowWidth;
    var t = this;
    var d = t.data;
    var interval = setInterval(function() {
      var next = d.marquee - 0.1; //每次移动距离
      if (next < -w) {
        next = 0;
        clearInterval(interval);
        t.scrolltxt();
      }
      t.setData({
        marquee: next
      });
    }, 0.1);

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

    this.setData({
      marquee: 0
    });
    // this.bg_animation_lefttoright();
    this.scrolltxt();

    if (getApp().globalData.userInfo.token &&
      getApp().globalData.userInfo.iv) {
      this.refreshData();
      this.getBannerList();
      this.setData({
        'info.point': getApp().globalData.userInfo.point
      });
      if (options.type == 1) { //凑步数
        wx.navigateTo({
          url: getApp().globalData.routes.sharesteps + '?open_id=' + options.userid,
        })
      }
      this.getUserStep();
      this.getSigninInfo();

    } else {
      getApp().userInfoReadyCallback = res => {
        this.refreshData();
        this.getBannerList();
        this.setData({
          'info.point': getApp().globalData.userInfo.point
        });

        this.getUserStep();

        //分享出去的跳转
        console.log('生命周期函数--监听页面加载', options);
        if (options.type == 1) { //凑步数
          wx.navigateTo({
            url: getApp().globalData.routes.sharesteps + '?open_id=' + options.userid,
          })
        }
        this.getSigninInfo();
      };
    }
  },
  // 获取用户信息
  getUserStep() {
    var encryptData = encodeURIComponent(getApp().globalData.userInfo.encryptedData);
    var iv = encodeURIComponent(getApp().globalData.userInfo.iv);
    API.get_user_step(getApp().globalData.userInfo.uid, getApp().globalData.userInfo.session, iv, encryptData, res => {
      this.setData({
        stepinfo: res
      })
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
    var result = API.share_for_step(getApp().globalData.userInfo.open_id);
    return result;
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

    })

    // API.getBanner(res => {
    //   this.setData({
    //     bannerArr: res.data
    //   })
    // });

  },
  // 商品跳转
  onClickItem: function(event) {
    var id = event.currentTarget.dataset.item.id;
    var goods_type = event.currentTarget.dataset.item.status;
    console.log(event);
    wx.navigateTo({
      url: getApp().globalData.routes.exchangedetail + '?id=' + id + '&goods_type=' + goods_type,
    })
  },
  // banner跳转
  onClickBannerAtItem: function(event) {
    var item = event.currentTarget.dataset.item;
    if (item.type == 1) { //小程序
      wx.navigateToMiniProgram({
        appId: item.appid,
      })
    } else if (item.type == 2) { //网页
      wx.navigateTo({
        url: getApp().globalData.routes.webview + '?title=' + item.name + '&url=' + item.url,
      })
    }
  },
  // 气泡点击事件
  onClickInStep() {
    this.receiveBubble('step', this.data.stepinfo.bubble.step);
  },
  onClickInSign() {
    this.receiveBubble('sign', this.data.stepinfo.bubble.sign);
  },
  onClickInSend() {

    this.receiveBubble('send', this.data.stepinfo.bubble.send);
  },
  receiveBubble(type, number) {
    this.ani_smallbigOut();
    API.receive_bubble(type, res => {
      var result = parseFloat(this.data.stepinfo.point) + number;
      this.setData({
        ['stepinfo.point']: result
      })
    })
  },
  // 点击人物动画
  onclickPeople() {

    this.setData({
      peopleisHidden: true
    })
    var that = this;
    setTimeout(function() {
      that.setData({
        peopleisHidden: false
      })
    }, 500);
    if (this.data.stepinfo.bubble.step > 0) {
      this.receiveBubble('step', this.data.stepinfo.bubble.step);
    }

    if (this.data.stepinfo.bubble.sign > 0) {
      this.receiveBubble('sign', this.data.stepinfo.bubble.sign);
    }

    if (this.data.stepinfo.bubble.send > 0) {
      this.receiveBubble('send', this.data.stepinfo.bubble.send);
    }

  },
  // 模板点击事件-取消
  onClickCancle: function(e) {
    this.setData({
      ['list.isSignin']: true,
    })
  },
  // 模板点击事件-立即签到
  onClickAtSignin: function(e) {

    this.onClickSignin();
  },

  // 签到数据
  getSigninInfo() {
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
        repairDays: repairDays,
        ['list.repairDays']: repairDays,
      })
    })
  },

  //点击签到按钮 
  onClickSignin: function(event) {
    API.signin(res => {
      this.setData({
        signininfo: res.data,
        ['list.isSignin']: true,
      });
      //签到成功刷新数据
      this.showSignSuccess();
    })
  },
  //签到成功的弹窗
  showSignSuccess: function() {
    this.signinsuccess = this.selectComponent('#signinsuccess');
    this.signinsuccess.show();
  },

  //签到成功--确认收到
  onClickSignSuccess: function(event) {
    console.log('签到成功--确认收到');
  },

})