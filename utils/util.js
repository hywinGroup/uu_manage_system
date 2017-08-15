'use strict'

function doPost(url,data,success,fail,complete){
	wx.request({
	  url: url, 
	  data: data,
	  header: {
	      'content-type': 'application/json'
	  },
	  method:"POST",
	  success: function(res) {
	    console.log(res.data)
	    if(success){
	    	success(res);
	    }
	  },
	  fail:function(error){
	  	console.log(error);
	  	if(fail){
	  		fail(error);
	  	}else{
	      wx.showModal({
	        content: error,
	        showCancel: false,
	        confirmText: "确定"
	      })
	  	}
	  },
	  complete:function(){
	  	if(complete)complete();
	  }
	})
}
function doGet(url,success,fail,complete){
	wx.request({
	  url: url, 
	  header: {
	      'content-type': 'application/json'
	  },
	  method:"GET",
	  success: function(res) {
	    console.log(res.data)
	    if(success){
	    	success(res);
	    }
	  },
	  fail:function(error){
	  	console.log(error);
	  	if(fail){
	  		fail(error);
	  	}else{
	      wx.showModal({
	        content: error,
	        showCancel: false,
	        confirmText: "确定"
	      })
	  	}
	  },
	  complete:function(){
	  	if(complete)complete();
	  }
	})
}
// function get(url, params) {
// 	var options = {
// 	      method:'GET',
// 	      headers : {            
// 	      	'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           }
// 	}
// 	let stringParam = "";
// 	for (let key in params) {
//         let _requestData = params[key] ? params[key] : '';
//         stringParam += '&' + key + '=' + _requestData
//     }
//     stringParam = stringParam.slice(1); //处理请求参数

//     if (stringParam && stringParam != "") url += '?' + stringParam;

//     return fetch(url,options)
//       .then(response => response.json())
//       .then(json => json)
//       .catch(error => {
//         console.warn(error)
//       })
// };
module.exports  = {
	doPost,
	doGet
}