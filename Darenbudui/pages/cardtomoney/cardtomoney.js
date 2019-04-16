// pages/cardtomoney/cardtomoney.js
// 卡牌兑换达人币
var API = require(getApp().globalData.api);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goldcard: 2,
    silvercard: 3,
    note: '你已集齐x组黄金卡牌,y组白银卡牌。每组黄金卡牌兑换2个达人币，每组白银卡牌兑换1个达人币',
    list: [{
        id: 0,
        image: '../../res/sign-in/sign-in-card-x1.png',
        name: '黄金卡牌',
        num: '共1组',
        number: 0,
        cardtomoneyNumber: 0, //卡牌选择数量
      },
      {
        id: 1,
        image: '../../res/sign-in/sign-in-card-x2.png',
        name: '白银卡牌',
        num: '共1组',
        number: 0,
        cardtomoneyNumber: 0,
      },
    ],
    info: {
      "card_1": "20", // 黄金卡牌和达人币兑换率
      "card_2": "10", // 白银卡牌和达人币兑换率
      "first_count": 3, //黄金卡牌组合数量
      "end_count": 1, //白银卡牌组合数量
      "member_card": {
        "first": [{
            "card_name": 2,
            "number": 2
          },
          {
            "card_name": 3,
            "number": 0
          },
          {
            "card_name": 4,
            "number": 5
          },
          {
            "card_name": 9,
            "number": 0
          }
        ],
        "end": [{
            "card_name": 5,
            "number": 0
          },
          {
            "card_name": 0,
            "number": 0
          },
          {
            "card_name": 1,
            "number": 2
          },
          {
            "card_name": 6,
            "number": 0
          },
          {
            "card_name": 7,
            "number": 0
          },
          {
            "card_name": 8,
            "number": 0
          }
        ]
      },
    },

    contorlInfo: {
      startNumber: 0, //默认初始值
      cardNumber: 0, //需要兑换的数量
      cardToMoneyResult: 0, //卡牌兑换达人币总数
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.http();
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
  // 我的卡牌
  http() {

    API.getMyCard(res => {

      var noteTmp = '你已集齐' + res.first_count + '组黄金卡牌,' + res.end_count + '组白银卡牌。每组黄金卡牌兑换' + res.card_1 + '个达人币，每组白银卡牌兑换' + res.card_2 + '个达人币';
      var gold = 'list[0].num';
      var goldResult = '共' + res.first_count + '组';
      var siliver = 'list[1].num';
      var siliverResult = '共' + res.end_count + '组';
      this.setData({
        info: res,
        note: noteTmp,
        [gold]: goldResult,
        [siliver]: siliverResult,
        ['list[0].number']: res.first_count,
        ['list[1].number']: res.end_count

      })
    });
  },
  // 更新卡牌数量
  onChange: function(e) {

    var currentvalue = e.detail;
    var item = e.currentTarget.dataset.item;
    var arr = this.data.list;
    var currindex = 0;
    for (var index in arr) {
      var itemTmp = arr[index];
      if (itemTmp.id == item.id) {
        currindex = index;
        itemTmp.cardtomoneyNumber = currentvalue;
      }
    }
    let currentitemStr = 'list[' + currindex + '].cardtomoneyNumber';
  console.log(e);
    var result = this.data.list[0].cardtomoneyNumber * parseInt(this.data.info.card_1) + this.data.list[1].cardtomoneyNumber * parseInt(this.data.info.card_2);
    let moneyResult = 'contorlInfo.cardToMoneyResult';
    this.setData({
      [currentitemStr]: currentvalue,
      [moneyResult]:result

    });

  },
  // 更新卡牌数量  +
  onChangeAtPlus: function(e) {


    this.data.contorlInfo.cardNumber = this.data.contorlInfo.cardNumber + 1;
    this.setData({
      ['contorlInfo.cardNumber']: this.data.contorlInfo.cardNumber
    });

  },
  // 更新卡牌数量  -
  onChangeAtMinus: function(e) {

    this.data.contorlInfo.cardNumber = this.data.contorlInfo.cardNumber - 1;
    this.setData({
      ['contorlInfo.cardNumber']: this.data.contorlInfo.cardNumber
    });
  },

  onClickCardTo() {
  
    var params = this.data.list[0].cardtomoneyNumber + ',' + this.data.list[1].cardtomoneyNumber;
    API.card_change(params,res=>{
        this.showCardtosuccess();
        this.http();

    })
  },

  showCardtosuccess() {
    this.cardtosuccess = this.selectComponent('#cardtosuccess');
    this.cardtosuccess.show();
  },
  clickConfirm() {

    var pages = getCurrentPages(); //当前页面栈
    if (pages.length > 1) {
      var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象
      beforePage.http(); //触发父页面中的方法
    }
    wx.navigateBack({
      delta: 1 //返回上级
    })
  },

})