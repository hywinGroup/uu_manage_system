'use strict'
import ES6Promise from "utils/es6-promise";

/*测试
      //appid : wxdecafe98251c1548
      //secret : 210381001bad25c14274822fe0b57072
      //https://api.weixin.qq.com/sns/jscode2session?appid=wxdecafe98251c1548&secret=210381001bad25c14274822fe0b57072&js_code=081rPAo128Sws11Wwxo12PLpo12rPAo-&grant_type=authorization_code
      //{"session_key":"RoWfYbO3t3TsQZobZGyDow==","expires_in":7200,"openid":"oEgoZ0Qwwt9_U05o5Q-04H9urAVM"}
      //{"session_key":"dc2RqUvdF9NeaYqlQlwz5A==","expires_in":7200,"openid":"oEgoZ0Qwwt9_U05o5Q-04H9urAVM"}

      //access_token : YKe-s2mMTN5_zp7Q9PSjtgaP92Aq8ZdNrSz_uRf27XEr-R6O-QZkVSv4g8iKnEn2j2LEm8_JNNzD2bKkhVCOJw98VI4DRzxKKyXxvLcp5xSC6mmwMoN4MfTaHg4aczQaKAIjAEABRZ
      //https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=YKe-s2mMTN5_zp7Q9PSjtgaP92Aq8ZdNrSz_uRf27XEr-R6O-QZkVSv4g8iKnEn2j2LEm8_JNNzD2bKkhVCOJw98VI4DRzxKKyXxvLcp5xSC6mmwMoN4MfTaHg4aczQaKAIjAEABRZ
     //授权处理
*/
App({
  onLaunch: function(options) {
     //  var self = this;
     //  var code = "",userInfo = {};
     // //获取code
     // var p1 = new ES6Promise.Promise(function(resolve, reject) {
     //    wx.login({
     //      success:function(res){
     //        resolve(res);
     //      },
     //      fail:function(res){
     //        reject(res);
     //      }
     //    });
     // }).then(function(res){
     //    console.log("login success*****"+res);
     //    code = res.code;
     // },function(res){
     //    console.log("login fail*****"+res);
     // });
     // //授权获取用户信息
     // var p2 = new ES6Promise.Promise(function(resolve, reject){
     //    wx.getSetting({
     //      success(res) {
     //          if (!res.authSetting['scope.userInfo']) {
     //              wx.authorize({
     //                  scope: 'scope.userInfo',
     //                  success() {
     //                    //获取用户信息
     //                    wx.getUserInfo({
     //                      success:function(res){
     //                        resolve(res);
     //                      },
     //                      fali:function(res){
     //                        reject(res)
     //                      }
     //                    });
     //                  }
     //              })
     //          }else{
     //              wx.getUserInfo({
     //                  success:function(res){
     //                    resolve(res);
     //                  },
     //                  fali:function(res){
     //                    reject(res)
     //                  }
     //              }); 
     //          }
     //      }
     //    })
     // }).then(function(res){
     //      console.log("getUserInfo success *****"+res);
     //      userInfo = res.userInfo;
     // },function(res){
     //      console.log("getUserInfo fail *****"+res);
     // });
     // ES6Promise.Promise.all([p1,p2]).then(function (posts) {
     //    console.log("code **********"+code);
     //    console.log("useInfo ********"+userInfo.nickName);
     // }).catch(function(reason){
     //    console.log("some one error");
     // });
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