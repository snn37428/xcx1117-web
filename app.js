//app.js
App({
  onLaunch: function() {
    this.login();
  },
  login: function() {
    var that = this;
    wx.login({
      success: function(res) {
        console.log(res);
        wx.request({
          // url: "http://ty.com" + '/login/in?code',
          url: "http://127.0.0.1:8080/login/in?code=",
          data: {
            code: res.code
          },
          success: function(res) {
            console.log(res.data);
            // if (res.data.data.success) {
            //   // 登录错误 
            //   wx.hideLoading();
            //   wx.showModal({
            //     title: '提示',
            //     content: '无法登录，请重试',
            //     showCancel: false
            //   })
            //   return;
            // }
            wx.setStorage({
              key: "token",
              data: res.data.token,
            });
            wx.setStorage({
              key: "auth",
              data: res.data.auth,
            })
          },
          // fail: function () {
          //   wx.showModal({
          //     title: '提示',
          //     content: '无法登录，请重试',
          //     showCancel: false
          //   })
          //   return;
          // }
        })
      }
    })


  },
  globalData: {
    token: 1,
    auth: false,
    fromId:0
  }
});