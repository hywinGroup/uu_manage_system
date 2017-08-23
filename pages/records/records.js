'use strict'
import util from "../../utils/util";
import config from "../../config";

Page({
  data: {
    text: "This is records  page data.",
    titles: ["在借中", "已还"],
    tabs: [{
      type: "0",
      list: []
    }, {
      type: "1",
      list: []
    }],
    currentIndex: 0,
    wHeight: null,
    userId : ""
  },
  onLoad: function(options) {
    var self = this;
    //var h = document.getElementById('titles').offsetHeight;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          wHeight: res.windowHeight - 40
        });
      }
    });
    // Do some initialize when page load.
    console.log("userId*********" + options.userid);
    self.getListData("0",options.userid);
  },
  getListData:function(type,userid,isFirst){
    var self = this;
    util.doPost(config.orderByUserid, {
      useId: userid,
      type: type
    }, function(res) {
      let i = self.data.currentIndex,
        arr = self.data.tabs;
      arr[i].list = res.data.data;
      for(let j =0;j<arr[i].list.length;j++){
         let obj = arr[i].list[j];
         obj = Object.assign(obj,{
            depositFormat : util.formatMoney(obj.deposit),
            dailyRentFormat : util.formatMoney(obj.dailyRent),
            payAmount:self.getPayAmount(obj)
         });
      }
      self.setData({
        tabs: arr,
        userId: userid
      });
    });
  },
  getPayAmount:function(obj){
    var v0 = obj.dailyRent * obj.day;
    var v =  v0 <= obj.deposit?v0:obj.deposit;
    return util.formatMoney(v);
  },
  processSwipe: function(e) {
    //debugger;
    var self = this,
      arr = self.data.tabs,
      currentIndex = e.detail.current;
    self.setData({
      currentIndex: currentIndex
    });
    if (arr[e.detail.current].list.length == 0) {
        var type = currentIndex === 1 ? "1" : "0";
        this.getListData(type, self.data.userId);
    }
  }
})