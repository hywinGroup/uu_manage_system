//用户列表
'use strict'

Page({
  data: {
    text: "This is customers page data.",
    list:[{
      userName:"张 三",
      userId : "100001",
      totalNum:10,
      backNum:4
    }, {
      userName: "张某峰",
      userId: "100002",
      totalNum: 20,
      backNum: 5
      }, {
        userName: "刘某柯",
        userId: "100003",
        totalNum: 15,
        backNum: 8
      }]
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})