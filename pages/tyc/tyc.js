
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/tyc/wzlk.png",
          "useDate": "外遮阳展开",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 2,
          "imgurl": "../../images/tyc/wzlg.png",
          "useDate": "外遮阳合拢",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 3,
          "imgurl": "../../images/tyc/nzlk.png",
          "useDate": "内遮阳展开",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 4,
          "imgurl": "../../images/tyc/nzlg.png",
          "useDate": "内遮阳合拢",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 5,
          "imgurl": "../../images/tyc/tck.png",
          "useDate": "顶天窗打开",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 6,
          "imgurl": "../../images/tyc/sltcg2.png",
          "useDate": "顶天窗打开",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
      ]
    };
    that.setData({
      carInfoData: data.datas
    })
    var that = this;
    wx.request({
      url: 'https://tianyuanfarm.com/product/al1',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (r) {
        // console.log(r);
        that.setData({
          carInfoData: r.data
        });
      }
    });

    wx.request({
      url: 'https://tianyuanfarm.com/product/i',
      //  url: 'http://127.0.0.1:8080/product/i',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (r) {
  
        that.setData({
          infoData: r.data,
          xin: 1
        });
      },
      fail: function (r) {
        that.setData({
          xin: 1
        });
      }
    });

  },
  onShow: function () {
    var that = this;
    setInterval(function () {
      that.intervalMonit();
    }, 3000);

    setInterval(function () {
      that.intervalMonit2();
    }, 2000);
  },

  intervalMonit2: function () {
    var that = this;
    wx.request({
       url: 'https://tianyuanfarm.com/product/i',
      //  url: 'http://127.0.0.1:8080/product/i',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (r) {
        // console.log(r);
        that.setData({
          infoData: r.data, 
          xin: 1
        });
      },
      fail: function (r) {
        that.setData({
          xin: 0
        });
      }
    });
  },

  intervalMonit: function () {
    var that = this;
    wx.request({
      url: 'https://tianyuanfarm.com/product/al1',
      //  url: 'http://127.0.0.1:8080/product/al1',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (r) {
      //  console.log(r);
        that.setData({
          carInfoData: r.data
        });
      }
    });
  },
  //切换隐藏和显示 
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
  },

  // login: function () {
  //   if (wx.getStorageSync("token")) {
  //     return;
  //   }
  //   var that = this;
  //   wx.login({
  //     success: function (res) {
  //       wx.request({
  //         url: "http://ty.com" + '/login/in?code',
  //         data: {
  //           code: res.code
  //         },
  //         success: function (res) {
  //           // console.log(res.data.code + "343214");
  //           if (res.data.code != 0) {
  //             // 登录错误 
  //             wx.hideLoading();
  //             wx.showModal({
  //               title: '提示',
  //               content: '无法登录，请重试',
  //               showCancel: false
  //             })
  //             return;
  //           }
  //           wx.setStorage({
  //             key: "token",
  //             data: res.data.data.token
  //           })
  //         },
  //         fail: function () {
  //           wx.showModal({
  //             title: '提示',
  //             content: '无法登录，请重试',
  //             showCancel: false
  //           })
  //           return;
  //         }
  //       })
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

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
    wx.showToast({
      title: '已经到底了',
      duration: 1000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  listenerSwitch: function (e) {
    var sd ;
    var value = e.detail.value;
    // console.log(value);
    if (value>80) {
      sd = 1;
    } else if (value<20){
      sd =0;
    } else {
      wx.showModal({
        showCancel: false,
        title: '提示',
        content: '滑至最左侧，或最右侧生效',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      });
      return;
    }
    var idd = e.currentTarget.dataset.idd;
    var idm = e.currentTarget.dataset.idm;
    var idv = e.currentTarget.dataset.idv;
    var st = '控制位置：' + idd + '\r\n控制地址：' + idm + '\r\n控制状态：' + sd +'\r\n';
    wx.showModal({
      title: '是否确定下发指令',
      content: st,
      success: function (res) {
        if (res.confirm) {
          wx.request({
          // url: 'https://tianyuanfarm.com/c/c',
           url: 'http://127.0.0.1:8080/c/c',
            data: {
              idm : idm,
              sd : sd
            },
            success: function (res) {
      
            },
            fail: function () {
              wx.showModal({
                showCancel: false,
                title: '提示',
                content: '指令下发失败，请联系管理员!',
                success: function (res) {
                  if (res.confirm) {
                
                  } else if (res.cancel) {
                  
                  }
                }
              });
              return;
            }
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
})