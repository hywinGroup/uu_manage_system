/*入口主页面*/
'use strict'
import util from "../../utils/util";
import config from "../../config";
import ES6Promise from "../../utils/es6-promise";

Page({
  data: {
    loading:true,
    text: "This is index page data.",
    storeName:null,
    storeLatitude :null,
    storeLongitude :null,
    isSuper:false,
    isOpeningMap:false
  },
  onLoad: function(options) {
    // options 中的 scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
    //TODO，邀请码应该是放在这里面的
    //var scene = decodeURIComponent(options.scene)

    var self = this;
    // setTimeout(function(){
    //    self.setData({
    //     loading : false
    //    });
    // },20000);
    var scene = options.scene ? decodeURIComponent(options.scene) : null,code = "";
    self.getJsCode().then(function(res){
        console.log("login success*****"+res.code);
        code = res.code;
        //self.checkUser(code,scene);
        self.setData({
          loading : false
        });
    },function(res){
        console.log("login fail*****"+res);
    });
  },
  getJsCode:function(){
    return new ES6Promise.Promise(function(resolve, reject) {
        wx.login({
          success:function(res){
            resolve(res);
          },
          fail:function(res){
            reject(res);
          }
        });
    });
  },
  checkUser:function(jsCode,inviteCode){
    /*TODO 
    验证用户信息，去服务端请求查看 用户身份
    1，普通管理员
    2，超级管理员
    3，新注册管理员
    4，不是管理员且邀请码非法
    */

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
  },
  addBook:function(){
    //扫码加书
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  manageBook:function() {
    //管理绘本
    wx.navigateTo({
      url: '../manage/manage'
    })
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
    if(self.data.isOpeningMap) return false;
    self.setData({
      isOpeningMap : true
    });
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
      //console.log("***********authorize");
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
    //获取当前位置
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
    var v = util.trim(e.detail.value);
    if(this.data.storeName != v){    
      this.setData({
        storeName:v
      });
      console.log(v);
    }
  },
  chooseLocation:function(){
    var self = this;
    wx.chooseLocation({
      cancel:function(){
        console.log("取消");
        self.setData({
          isOpeningMap : false
        });
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
          storeLongitude :res.longitude,
          isOpeningMap : false
        });
      },
      fail:function(){
        console.log("fail");
        self.setData({
          isOpeningMap : false
        });
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
  },
  createInviteCode:function(){
     //TODO,获取小程序二维码，包含邀请码
     //在首页执行返回操作，会关闭小程序
     //wx.navigateBack();
  }
})