// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    index1: 0,
    index2: 0,
    index3: 0,
    languages: ['中文', '英文'],
    age: ['0-2岁', '3-6岁', '7-9岁', '9岁以上'],
    theme: ['交通工具', '情绪管理', '友情', '亲情', '入园', '性教育', '无字书', '音乐', '古诗词', '儿歌', '建筑', '幽默', '科普'],
    statu: ['借出中', '展出中','已下架'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindPickerLanguages: function(e) {
    var that = this;
    that.setData({
      index: e.detail.value
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