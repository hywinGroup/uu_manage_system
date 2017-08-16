'use strict'

var host = "https://www.easy-mock.com/mock/5993afeba1d30433d8631685/store";

var appId = "wxdecafe98251c1548";
//为了安全，appSecret 维护在后端
//var appSecret = "28c57a55cd120c7c3835a1c5c3e39b2a";

module.exports = {
	appId : `${appId}`,
	setAddress:`${host}`+"/setLocation"
}