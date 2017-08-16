'use strict'
import util from "../../utils/util";
import config from "../../config";

Page({
  data: {
    text: "This is back book data.",
    book:new Object()
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
      self.setData({
        book : bookList[0]
      });
    });
    //(book.3000/100).toFixed(2)
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