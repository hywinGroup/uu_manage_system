'use strict'
import util from "../../utils/util.js";
import config from "../../config.js";

Page({
  data: {
    index:0,
    index1: 0,
    index2: 0,
    index3: 0,
    languages: ['中文', '英文'],
    age: ['0-2岁', '3-6岁', '7-9岁', '9岁以上'],
    theme: ['交通工具', '情绪管理', '友情', '亲情', '入园', '性教育', '无字书', '音乐', '古诗词', '儿歌', '建筑', '幽默', '科普'],
    status: ['借出中', '展出中','已下架'],
    indexs:{
      languages:0,
      age : 0,
      theme: 0,
      status : 0
    },
    book:{
      
    },
    isbn:""
  },
  onLoad: function (options) {
    //options.isbn;
    //options.bookid;
    // let url = config.getBooksList;
    // let successFuc = function (res) {
    //   self.setData({
    //     book: res.data.data
    //   })
    //   console.log(res.data.data);
    // };
    // util.doPost(url, {}, successFuc);

    var self = this;
    let books = {
      'name': '小王子',
      'bookId': '绘本ID',
      'author': '作者',
      'images': {
        'small': 'https://img1.doubanio.com/spic/s3390077.jpg',
        'large': 'https://img1.doubanio.com/lpic/s3390077.jpg',
        'medium': 'https://img1.doubanio.com/mpic/s3390077.jpg'
      },
      'language':'CN',
      'rightAge':'',
      'grade':'',
      'intro':'',
      'recommend':'',
      'theme':'',
      'keyword':'',
      'type':'',
      'bookNum':'',
      'deposit':'',
      'dailyRent':'',
    }
    self.setData({
      book: books,
      isbn: options.isbn
    })
  },
  bindNewBookInfo:function(e){

  },
  bindPickerValue:function(e){
    var self = this;
    var keyname = e.target.dataset.name;
    var indexs  = self.data.indexs;
    indexs[keyname] = parseInt(e.detail.value);
    this.setData({
      indexs:indexs
    })
  },
  bindTextAreaBlur:function(e){
    console.log(e.detail.value)
  },
  bindPickerTheme: function (e) {
    var that = this;
    that.setData({
      index1: e.detail.value
    })
  },
  bindPickerAge: function (e) {
    var that = this;
    that.setData({
      index2: e.detail.value
    })
  },
  bindPickerStatu:function(e){
    var that = this;
    that.setData({
      index3: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})