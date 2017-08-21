/*
生成书本二维码页面
*/
'use strict'
import QR from "../../utils/qrcode.js";

Page({
  data: {
    maskHidden:true,
    text: "This is index page data.",
    imagePath:'',
    placeholder:'http://wxapp-union.com',//默认二维码生成文本
    codeList : [ //数据由上一个页面生成，带到这个页面，这里只做demo
    	"uubook000001000001",
    	"uubook000001000002", 
    	"uubook000001000003", 
    	"uubook000001000004", 
    	"uubook000001000005",
    	"uubook000001000006", 
    	"uubook000001000007", 
    	"uubook000001000008", 
    	"uubook000001000009", 
    	"uubook00000100000a"	
	],
	currentIndex:0
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  }, 
  onReady: function() {
    // Do something when page ready.
    this.getCurrentCanvas();
  },
  getCurrentCanvas:function(){
  	let codeList = this.data.codeList,currentIndex=this.data.currentIndex;
    var url = codeList[currentIndex];
    var size = this.setCanvasSize();
    var canvasId = "canvas-"+currentIndex;
    //绘制二维码
    this.createQrCode(url,canvasId,size.w,size.h);
  },
  setCanvasSize:function(){ 
  	//适配不同屏幕大小的canvas
    var size={};
    try {
        var res = wx.getSystemInfoSync();
        var scale = 750/686;//不同屏幕下canvas的适配比例；设计稿是750宽
        var width = res.windowWidth/scale;
        var height = width;//canvas画布为正方形
        size.w = width;
        size.h = height;
      } catch (e) {
        // Do something when catch error
        console.log("获取设备信息失败"+e);
      } 
    return size;
  },
  createQrCode:function(url,canvasId,cavW,cavH){
    //调用插件中的draw方法，绘制二维码图片
    QR.qrApi.draw(url,canvasId,cavW,cavH);
  },
  nextCode:function(){
  	//下一个
  	let v = ++this.data.currentIndex;
  	this.setData({
  		currentIndex:v
  	});
  	this.getCurrentCanvas();
  },
  preCode:function(){
  	//上一个
  	let v = --this.data.currentIndex;
  	this.setData({
  		currentIndex:v
  	});
  	//this.getCurrentCanvas();
  }
})