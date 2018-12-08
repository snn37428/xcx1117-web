Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: [],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      // url: 'https://tianyuanfarm.com/product/al4',
      url: 'http://127.0.0.1:8080/product/al4',
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
      }, 2000)
    })
  },

  intervalMonit: function() {
    var that = this;
    wx.request({
      // url: 'https://tianyuanfarm.com/product/al4',
      url: 'http://127.0.0.1:8080/product/al4',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(r) {
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

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
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showToast({
      title: '已经到底了',
      duration: 1000
    })
  },

  onShow: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

})