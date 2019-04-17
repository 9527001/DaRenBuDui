// component/addressconfirm/addressconfirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    // 收货人
    consignee: {
      type: String,
      value: '1'
    },
    phone: {
      type: String,
      value: '18513119750'
    },
    address: {
      type: String,
      value: '北京市北京市北京市北京市北京市北京市北京市北京市北京市北京市北京市北京市北京市'
    },
    money: {
      type: String,
      value: '349'
    },
    // 组件类型
    alertType:{
      type:Number,
      value: 0,//0 实物弹窗 1 虚拟弹窗 默认为0
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
  // 手机号码
    phone:'0',

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
    onClickConfirm: function(e) {
      if(this.properties.alertType == 0){//实物
        this.triggerEvent('onClickConfirm', '12331', {});
      } else if (this.properties.alertType == 1){//输入手机号
        if(this.data.phone.length <11){
          wx.showToast({
            title: '请输入正确的手机号',
            icon: 'none',
          })
        }else{
          this.triggerEvent('onClickConfirm', this.data.phone, {});
        }
      }else{
        //
      }
      
    },
    // 输入框监听
    bindKeyInput:function(e){
      var value = e.detail.value;
      this.setData({
        ['phone']: value
      });
    },
  }
})