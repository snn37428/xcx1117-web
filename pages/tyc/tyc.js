Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: [],
    status: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      // url: 'https://tianyuanfarm.com/product/al1',
      url: 'http://127.0.0.1:8080/product/al1',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(r) {
        that.setData({
          carInfoData: r.data.cells,
          infoData: r.data.xin,
          xin: 1
        });
      }
    });

    var that = this;
    that.setData({
      carInfoData: setInterval(function() {
        that.intervalMonit();
        // that.intervalMonit2();
      }, 2000)
    })
  },

  // 定时方法
  intervalMonit: function() {
    var that = this;
    wx.request({
       url: 'https://tianyuanfarm.com/product/al1',
      // url: 'http://127.0.0.1:8080/product/al1',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(r) {
        //  console.log(r);
        that.setData({
          carInfoData: r.data.cells,
          infoData: r.data.xin,
          xin: 1
        });
      },
      fail: function(r) {
        that.setData({
          xin: 0
        });
      }
    });
  },

  //切换隐藏和显示 
  toggleBtn: function(event) {
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

  // 监听滚动条事件
  listenerSwitch: function(e) {
    var that = this;
    that.instructions(e);

  },

  // 指令下发
  instructions: function(e) {
    var that = this;
    var sd;
    var value = e.detail.value;
    // console.log(value);
    if (value > 80) {
      sd = 1;
    } else if (value < 20) {
      sd = 0;
    } else {
      wx.showModal({
        showCancel: false,
        title: '提示',
        content: '滑至最左侧，或最右侧生效\r\n最左端侧指令：0\r\n最右端侧指令：1',
        success: function(res) {
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
    var st = '控制位置：' + idd + '\r\n控制地址：' + idm + '\r\n控制状态：' + sd + '\r\n';
    wx.showModal({
      title: '是否确定下发指令',
      content: st,
      success: function(res) {
        var cauth = wx.getStorageSync("auth");
        var ctoken = wx.getStorageSync("token");
        var cfromId = wx.getStorageSync("fromId");
        // if (!cauth) {
        //   wx.showModal({
        //     title: '提示',
        //     content: '没有此项控制权限，请联系管理员',
        //     showCancel: false
        //   })
        //   return;
        // }
        if (res.confirm) {
          wx.request({
            url: 'https://tianyuanfarm.com/c/c',
              // url: 'http://127.0.0.1:8081/c/c',
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            data: {
              idm: idm,
              sd: sd,
              token: ctoken,
              fromId: cfromId,
              idd: idd,
            },
            success: function(res) {

            },
            fail: function() {
              wx.showModal({
                showCancel: false,
                title: '提示',
                content: '指令下发失败，请联系管理员!',
                success: function(res) {
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

  formSubmit: function (e) {
    var that = this
    var formid = e.detail.formId;//在参数中获取formid
    console.log(formid)
    wx.setStorage({
      key: "fromId",
      data: formid,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    let loadings = this.data.carInfoData;
    let that = this;
    clearInterval(loadings)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    let loadings = this.data.carInfoData;
    let that = this;
    clearInterval(loadings)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showToast({
      title: '已经到底了',
      duration: 1000
    })
  },
  onShow: function() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})