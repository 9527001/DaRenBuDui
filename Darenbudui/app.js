//app.js


App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

        console.log('获取微信信息', res, res.code);
        var code = res.code.toString();
        wx.request({
          url: this.globalData.baseUrl + '/api/base/minicode',
          data: {
            code: code,
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            'content-type': 'application/json'
          }, // 设置请求的 header
          success: res => {
            console.log('登录服务器返回数据', res)
            let data = res.data.data;
            wx.setStorage({
              key: 'token',
              data: data['token'],
            })
            this.globalData.userInfo = data;
            console.log(this.globalData.userInfo);

            //微信运动数据
            var that = this;
            wx.getWeRunData({
              success(res) {
                const encryptedData = res.encryptedData
                console.log('微信运动数据',res);
                that.globalData.userInfo.iv = res.iv;
                that.globalData.userInfo.encryptedData = res.encryptedData;
                if (that.userInfoReadyCallback) {
                  that.userInfoReadyCallback(res)
                }
              }
            })

           
          },
          fail: function(res) {
            console.log("登录失败", res);
          },
          complete: function(res) {
            console.log("登录完成", res);
          },
        })
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   success: res => {
          //     // 可以将 res 发送给后台解码出 unionId
          //     this.globalData.userInfo = res.userInfo

          //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          //     // 所以此处加入 callback 以防止这种情况
          //     if (this.userInfoReadyCallback) {
          //       this.userInfoReadyCallback(res)
          //     }
          //   }
          // })
        }
      }
    })
  },
  globalData: {
    userInfo: {
      point: '0.00', //达人币余额
      iv:'',
      encryptedData: '',

    },
    baseUrl: "http://daka.weiyingjia.org", // 网络接口全局变量
    routes: {
      home: "../../pages/home/home",
      share: '../../pages/share/share',
      signIn: "../../pages/sign-in/sign-in",
      rankinglist: "../../pages/rankinglist/rankinglist",
      helpEachOtherRecord: "../../pages/helpeachotherrecord/helpeachotherrecord",
      orderlist: "../../pages/orderlist/orderlist",
      exchangedetail: "../../pages/exchangedetail/exchangedetail",
      netutil: "../../common/netutil/netutil.js",
      rules: "../../pages/rules/rules",
      success: "../../pages/success/suceess",
      activitylist: "../../pages/activitylist/activitylist",
      activitydetail: "../../pages/activitydetail/activitydetail",
      getprizesuccess: "../../pages/getprizesuccess/getprizesuccess",
      myprize: "../../pages/myprize/myprize",
      sharesteps:"../../pages/sharesteps/sharestep",
      webview:"../../pages/webview/webview",
      rankinglistrule: "../../pages/rankinglistrule/rankinglistrule",

    },
    api: '../../common/netutil/API.js',
    invitefriend:{
      title: '人生没有白走的路，每一步都是必经之路',
      imageUrl: "http://dakadmin.weiyingjia.org/uploads/2018-10-11/201810111425124222.png",//图片地址
      path: "pages/home/home",// 用户点击首先进入的当前页面
    },
    invitefriendfor_step: {
      title: '人生没有白走的路，每一步都是必经之路',
      imageUrl: "http://dakadmin.weiyingjia.org/uploads/2018-10-11/201810111425124222.png",//图片地址
      path: "pages/home/home?type=1",// 用户点击首先进入的当前页面
    }

  },
})

// wx.login 获得code