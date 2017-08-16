'use strict'
import util from "../../utils/util";
import config from "../../config";

Page({
  data: {
    text: "This is index page data.",
    storeName:null,
    storeLatitude :null,
    storeLongitude :null
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  backBook:function(){
    //扫码还书

    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        var bookId = res.result;
        wx.navigateTo({
            url: '../back/back?bookId='+bookId
        })
      }
    })
        // wx.navigateTo({
        //     url: '../back/back?bookId='+"1000001"
        // })
  },
  addBook:function(){
    //扫码加书
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  manageBook:function() {
    //管理绘本
  },
  setAddress:function(event,obj){
    //设置位置，有参数设置参数值{}，无参设置当前
    var self = this;
    //debugger;
    if(obj){
      self.setData({
        storeLatitude:obj.latitude,
        storeLongitude:obj.longitude
      });
    }else{
      wx.getSetting({
          success(res) {
              if (!res.authSetting['scope.userLocation']) {
                //授权
                console.log("no");
                self.authSet(self.getLocation);
              }else{
                console.log("yes");
                self.getLocation();
              }
          }
      })
    }
  },
  openMap:function(){
    //打开地图，标注当前位置
    var self = this;
    wx.getSetting({
        success(res) {
            if (!res.authSetting['scope.userLocation']) {
              //授权
              console.log("no");
              self.authSet(self.chooseLocation);
            }else{
              console.log("yes");
              self.chooseLocation();
            }
        }
    })
  },
  authSet:function(callback){
      var self = this;
      console.log("***********authorize");
      wx.authorize({
          scope: 'scope.userLocation',
          success() {
            console.log("authorize   success");
            //self.getLocation();
            callback();
          }
      })
  },
  getLocation:function(){
      var self = this;
      console.log("*********getLocation*****");
      wx.getLocation({
          type: 'gcj02',
          success: function(res) {
              console.log("success");
              var latitude = res.latitude
              var longitude = res.longitude
              // var speed = res.speed
              // var accuracy = res.accuracy
              self.setData({
                storeLatitude:latitude,
                storeLongitude:longitude
              });
              //console.log(res);
          }
      })
  },
  changeName:function(e){
    //console.log(e.detail.value);
    this.setData({
      storeName:e.detail.value
    });
  },
  chooseLocation:function(){
    var self = this;
    wx.chooseLocation({
      cancel:function(){
        console.log("取消");
      },
      success:function(res){
        /*
        name  位置名称
        address 详细地址
        latitude  纬度，浮点数，范围为-90~90，负数表示南纬
        longitude 经度，浮点数，范围为-180~180，负数表示西经
        */
        console.log(res);
        //storeName:res.name,
        self.setData({
          storeLatitude :res.latitude,
          storeLongitude :res.longitude
        });
      },
      fail:function(){
        console.log("fail");
      } 
    });
  },
  submitAddress:function(){
    /*
    storeName:null,
    storeLatitude :null,
    storeLongitude :null
    */
    console.log("name:"+this.data.storeName);
    console.log("storeLatitude:"+this.data.storeLatitude);
    console.log("storeLongitude:"+this.data.storeLongitude);
    let url = config.setAddress;
    //TODO 这里参数不是openId,应该是3rd_session
    /* util.doPost(url,data,success);*/
  }
})