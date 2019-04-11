// component/stepcount/stepcount.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    

    headerimage: {
      type: String,
      value: ''
    },
    goodsname: {
      type: String,
      value: '达人步兑'
    },
    money: {
      type: String,
      value: '1000'
    },
    currentmoney: {
      type: String,
      value: '349'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    info: {
      cancleimage: '../../res/general/general-cancle.png',
      buttontile: '请好友凑步数集币',
      moneyicon: '../../res/icons_06.png',

    },
    
    isHiddenMask: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /// 显示 actionsheet
    show: function() {
      this.setData({
        isHiddenMask: false
      });

    },
    /// 隐藏 actionsheet
    hidden: function() {
      this.setData({
        isHiddenMask: true
      });
    },
    // 点击取消按钮
    onClickCancle: function() {
      this.hidden();
    },
    // 点击背景
    onClickMask: function() {
      this.hidden();
    },
    // 点击凑步数按钮
    onClickAdd: function(e) {
      this.triggerEvent('onclickAdd', '12331', {});
    },
  }
})