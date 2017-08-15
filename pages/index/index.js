//index.js
Page({
  data: {
    text: "This is index page data."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  backBook:function(){
    //扫码还书
  },
  addBook:function(){
    //扫码加书
  },
  manageBook:function() {
    //管理绘本
  },
  setAddress:function(){
    //设置位置，有参数设置参数值{}，无参设置当前
  },
  openMap:function(){
    //打开地图，标注当前位置
  }
})