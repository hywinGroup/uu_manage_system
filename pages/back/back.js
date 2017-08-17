'use strict'
import util from "../../utils/util";
import config from "../../config";

Page({
  data: {
    text: "This is back book data.",
    book:new Object(),
    btnStatus:true
  },
  onLoad: function(option) {
    //console.log(option.bookId);
    this.setData({
      text:option.bookId
    });
    // Do some initialize when page load.
    var self = this;
    let url = config.searchBook,
    data = {
      bookId : option.bookId?option.bookId:""
    };
    util.doPost(url,data,function(res){
      //console.log(res);
      let bookList = [];
      if(res && res.data && res.data.data){
        bookList = res.data.data;
      }
      var obj = bookList[0];
      if(obj && obj.deposit && obj.dailyRent && obj.day){
        obj = Object.assign(obj,{
          backMoney : 0
        });
        let backMoney = obj.deposit - obj.dailyRent*obj.day;
        if(backMoney >= 0){
          obj.backMoney = (backMoney/100).toFixed(2);
        }
      }
      if(obj && obj.deposit){
        obj.deposit = (obj.deposit/100).toFixed(2);
      }
      if(obj && obj.dailyRent){
        obj.dailyRent = (obj.dailyRent/100).toFixed(2);
      }
      self.setData({
        book : obj
      });
    });
    //(book.3000/100).toFixed(2)
  },
  submitOrder:function(){
    var self = this;
      self.setData({
        btnStatus:false
      });
      //提交成功处理
      // wx.showModal({
      //   title: "操作成功",
      //   showCancel: false,
      //   confirmText: "确定",
      //   confirmColor:"#0696f5",
      //   success:function(res){
      //     wx.navigateBack();
      //   }
      // })
      //提交失败处理
      var error = "显示后台返回的错误信息";
      wx.showModal({
        title: "操作失败",
        content:error,
        showCancel: false,
        confirmText: "确定",
        confirmColor:"#0696f5",
        success:function(res){
          self.setData({
            btnStatus:true
          });
        }
      })
  }
})