'use strict'
App({
  onLaunch: function(options) { 
     wx.login({
      success:function(res){
        //debugger;
        console.log("res code****"+res.code);
        //TODO 请求我们的服务端，将code发送到后台，获取到3rd_Session
      },
      fail:function(){

      }
     });
  },
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})