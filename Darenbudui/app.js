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
        console.log('获取微信信息' + res.code);
        wx.request({
          url: 'http://base.weiyingjia.org/api/base/minicode',
          data: {
            code: res.code
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
            'content-type': 'application/json'
          }, // 设置请求的 header
          success: function(res) {
            if (res.statusCode == 200) {
              console.log(res);
            } else {
              console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);

            }

            let data = res.data.data;
            wx.setStorage({
              key: 'token',
              data: data['token'],
            })
          },
          fail: function() {
            console.log("index.js wx.request CheckCallUser fail");
          },
          complete: function() {
            // complete
          },
        })
      },
      fail: function() {
        console.log('登录时网络错误');
      },
      complete: function() {
        console.log('登录完成');
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})