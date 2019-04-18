function get_simple(url, onSuccess) {
  request(url, null, "GET", null, onSuccess, null);
}
function get_simple_nojwt(url, onSuccess) {
  request_noJWT(url, null, "GET", null, onSuccess, null);
}

function get_param(url, param, onSuccess) {
  request(url, param, "GET", null, onSuccess, null);
}



function post_simple(url, onSuccess) {
  request(url, null, "POST", null, onSuccess, null);
}
function post_param(url, param, onSuccess) {
  request(url, param, "POST", null, onSuccess, null);
}




function post(url, param, onStart, onSuccess, onFailed) {
  request(url, params, "POST", onStart, onSuccess, onFailed);
}

/**
 * 供外部get请求调用
 */
function get(url, param, onStart, onSuccess, onFailed) {
  request(url, params, "GET", onStart, onSuccess, onFailed);
}

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onStart 开始请求,初始加载loading等处理
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */
function request(url, params, method, onStart, onSuccess, onFailed) {
  if (onStart) {
    onStart(); //request start
  }
  var token = getApp().globalData.userInfo.token;
  wx.showLoading({
    title: '加载中...',
  });
  wx.request({

    url: getApp().globalData.baseUrl + '/api/base/' + url,
    data: dealParams(params),
    method: method,
    header: {
      'content-type': 'application/json',
      'Authorization': "Bearer" + token,
    },
    success: function(res) {
      var status_code = res.statusCode;
      if(status_code == 200 ||
        status_code == 201) {
        onSuccess(res.data); 
      }else{
        wx.showToast({
          icon: 'none',
          title: res.data.message,
        });
        
      }
      
    },

    fail: function(error) {
      onFailed("请求失败"); //failure for other reasons
      wx.showToast({
        title: error.message,
      });
    },
    complete: function(res) {
      console.log('请求结束' + getApp().globalData.baseUrl + '/' + url + '\n' + 'token\n' + token + '\n param \n',params,res 
      // JSON.stringify(res.data)
      );
      wx.hideLoading();

    },

  })
}

function request_noJWT(url, params, method, onStart, onSuccess, onFailed) {
  if (onStart) {
    onStart(); //request start
  }

  wx.request({
    data: dealParams(params),
    method: method,
    header: {
      'content-type': 'application/json',
    },
    success: function (res) {
      var status_code = res.status_code;
      if (status_code == 200) {
        onSuccess(res.data);
      } else {
        wx.showToast({
          icon: 'none',
          title: res.data.message,
        })
        
      }

    },

    fail: function (error) {
      onFailed("请求失败"); //failure for other reasons
      wx.showToast({
        title: error.message,
      })
    },
    complete: function (res) {
      console.log('请求结束' + getApp().globalData.baseUrl + '/' + url  + '\n param \n', params, res
        // JSON.stringify(res.data)
      );

    },

  })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
  return params;
}

function isBlank(str) {
  if (Object.prototype.toString.call(str) === '[object Undefined]') {//空
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' ||
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length == 0 ? true : false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str) == '{}' ? true : false
  } else {
    return true
  }

}


module.exports = {
  request: get_simple,
  request_get: get_simple,
  request_get_nojwt: get_simple_nojwt,

  request_param: get_param,
  request_get_param: get_param,

  request_post: post_simple,
  reqest_post_param: post_param,
  request_post_param: post_param,
}