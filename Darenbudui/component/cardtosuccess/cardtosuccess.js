// component/cardtosuccess/cardtosuccess.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '卡牌赠送成功'
    },
    content: {
      type: String,
      value: ''
    },
    cancletext: {
      type: String,
      value: '取消'
    },
    confirmtext: {
      type: String,
      value: '确认'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHiddenMask: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /// 显示 actionsheet
    show: function () {
      this.setData({
        isHiddenMask: false
      });

    },

    /// 隐藏 actionsheet
    hidden: function () {
      this.setData({
        isHiddenMask: true
      });
    },



    /// 占位事件，不用管理
    // prev: function () {
    //   // 截取蒙层下的滑动事件，蒙层下的view不能滑动
    // }

    // 点击底部灰色框
    onMaskClick: function () {
      this.hidden();
    },
    onClickCanCle: function () {
      this.hidden();
    },
    onClickConfirm: function (e) {
      this.hidden();
      this.triggerEvent('onclickConfirm', '12331', {});

    },
  }
})
