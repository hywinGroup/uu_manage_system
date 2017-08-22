//根据isbn码查询到的书籍列表页面
'use strict'
import util from "../../utils/util";
import config from "../../config";

Page({
  data: {
    text: "管理绘本列表.",
    list: [],
    allSelected: false
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log("isbn:" + options.id);
    var self = this,
      url = config.seachListByIsbn;
    var data = {
      isbn: options.id
    }
    util.doPost(url, data, function(res) {
      //console.log(res.data.data);
      if (res && res.data && res.data.data) {
        for (var i = 0; i < res.data.data.length; i++) {
          //添加状态
          let obj = res.data.data[i];
          obj = Object.assign(obj, {
            selected: false,
            dailyRentF:(obj.dailyRent/100).toFixed(2),
            depositF:(obj.deposit/100).toFixed(2)
          });
          res.data.data[i] = obj;
        }
      }
      self.setData({
        list: res.data.data
      });
    });
  },
  toggleStatus: function(e) {
    var self = this,
      index = e.currentTarget.dataset.index,
      list = self.data.list,
      status = !list[index].selected;
    list[index].selected = status;
    var allSelected = true;
    for(let j =0;j<list.length;j++){
      if(!list[j].selected){
        allSelected = false;
        break;
      }
    }
    self.setData({
      list: list,
      allSelected:allSelected
    });
  },
  toggleAllStatus: function() {
    var self = this,
      currentStatus = !self.data.allSelected,
      list = self.data.list;
    for(let i=0;i<list.length;i++){
      list[i].selected = currentStatus;
    }
    self.setData({
      list:list,
      allSelected:currentStatus
    });
  },
  addBook:function(){ //TODO 上架处理

  },
  goToDetail:function(){//TODO 进入详情页面

  }
})