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
module.exports = {
	doPost,
	doGet
}