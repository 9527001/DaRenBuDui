// component/prizenote/prizenote.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    type: {
      type: Boolean,
      value: false
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
      this.triggerEvent('onClickConfirm', this.properties.type, {});

    },
  }
})