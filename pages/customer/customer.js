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
    //TODO 获取用户列表信息
  },
  showRecords:function(e){
  	//点击跳转交易记录，传入用户id
  	var userId = e.currentTarget.dataset.id;
    wx.navigateTo({
    	url: '../records/records?userid='+userId
	})
  }
})