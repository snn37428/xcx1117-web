//index.js
//获取应用实例
var app = getApp();
Page({
   data:{
     plist: []
   },
   onLaunch: function(){
     console.log('index Launching ...');
   },
   onShow: function(){
     var that = this;

     setInterval(function(){
       that.intervalMonit();
     }, 5000);
   },
  //  go: function(e){
  //    wx.navigateTo({
  //      url: '../detail/detail?index=' + e.currentTarget.id
  //    });
  //  },
   intervalMonit: function(){
     var that = this;

     wx.request({
       url: 'http://localhost:8080/product/all',
       header: {
         'Content-Type': 'application/json'
       },
       success: function(r){
         console.log(r);
         app.globalData.plist = r.data;
          that.setData({
            plist: r.data
          });
       }
     });
   }
});
