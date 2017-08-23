'use strict'

function doPost(url, data, success, fail, complete) {
	wx.request({
		url: url,
		data: data,
		header: {
			'content-type': 'application/json'
		},
		method: "POST",
		success: function(res) {
			console.log(res.data)
			if (success) {
				success(res);
			}
		},
		fail: function(error) {
			console.log(error);
			if (fail) {
				fail(error);
			} else {
				wx.showModal({
					content: error,
					showCancel: false,
					confirmText: "确定"
				})
			}
		},
		complete: function() {
			if (complete) complete();
		}
	})
}

function doGet(url, success, fail, complete) {
	wx.request({
		url: url,
		header: {
			'content-type': 'application/json'
		},
		method: "GET",
		success: function(res) {
			console.log(res.data)
			if (success) {
				success(res);
			}
		},
		fail: function(error) {
			console.log(error);
			if (fail) {
				fail(error);
			} else {
				wx.showModal({
					content: error,
					showCancel: false,
					confirmText: "确定"
				})
			}
		},
		complete: function() {
			if (complete) complete();
		}
	})
}
//存储3rd_Session
function set3rdSession(v) {
	try {
		wx.setStorageSync('3rdSession', v)
	} catch (e) {

	}
}
//获取3rd_Session
function get3rdSession() {
	//从本地缓存中异步获取指定 key 对应的内容。
	var session = "";
	try {
		session = wx.getStorageSync('3rdSession')
	} catch (e) {
		// Do something when catch error
	}
	return session;
}
function trim(s){
	if (typeof s != "string") return s;
	var partern = /^(\s)*|(\s)*$/g;
	return s.replace(partern,"");
}
function formatMoney(n,fixednum){ // 传入整数，分为单位，输出元为单位的小数。fixednum 小数位。默认2位
	if(!Number.isInteger(parseInt(n))) return n;
	let fixedv = fixednum?fixednum:2;
	return (parseInt(n)/100).toFixed(fixedv);
}
// var getQueryStringByName = function(name,url) {
// 	if(!url) url = location.href;
// 	var search = "?" + url.split("?")[1];
// 	var result = search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
// 	if (result == null || result.length < 1) {
// 		return "";
// 	}
// 	return result[1];
// };
// var setQueryString =  function(key,value,url){
// 	if(!url) url = location.href;
// 	var result = url,arr = url.split("?");
//   var search = "?" + url.split("?")[1];
// 	if(arr.length == 1 && key && value){
// 		result = result + "?"+key+"="+value;
// 	}else if(key && value){
//     var currentKeyStr = search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
//     if (currentKeyStr == null || currentKeyStr.length < 1){
//       result = result + "&" + key + "=" + value;
//     }else{
//       let newStr = currentKeyStr.substr(0,1)+key+"&"+value;
//       result.replace(currentKeyStr, newStr);
//     }	
// 	}
// 	return result;
// }
module.exports = {
	doPost,
	doGet,
	trim,
	set3rdSession,
	get3rdSession,
	formatMoney
}