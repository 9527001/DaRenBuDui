function get_simple(url, onSuccess) {
  request(url, null, "GET", null, onSuccess, null);
}

function get_param(url, param, onSuccess) {
  request(url, param, "GET", null, onSuccess, null);
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
var token = wx.getStorageInfo({
  success: function(res) {
    token =  res.token;
  },
})
  wx.request({

    url: 'http://clock.weiyingjia.org/api/base/' + url,
    data: dealParams(params),
    method: method,
    header: {
      'content-type': 'application/json',
      'Authorization': "Bearer" + token,
    },
    success: function(res) {
      if (res.data) {
        onSuccess(res.data); //request success
      }
    },

    fail: function(error) {
      onFailed(""); //failure for other reasons
    },
    complete: function(res) {
      // complete
      console.log('http://clock.weiyingjia.org/api/base/' + url + '  请求结束', res.data, JSON.stringify(res.data));

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

module.exports = {
  request: get_simple,
  request_param: get_param,
  postRequest: post,
  getRequest: get,
}