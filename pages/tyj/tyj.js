
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

    // console.log('index Launching ...');

    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
           "imgurl": "../../images/tyj/w1.png",
          "useDate": "温湿度计09湿度",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 2,
          "imgurl": "../../images/tyj/s1.png",
          "useDate": "温湿度计09湿度",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 3,
          "imgurl": "../../images/tyj/w2.png",
          "useDate": "温湿度计09湿度",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 4,
          "imgurl": "../../images/tyj/s2.png",
          "useDate": "温湿度计09湿度",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 5,
          "imgurl": "../../images/tyj/s3.png",
          "useDate": "温湿度计09湿度",
          "time": "37.22 摄氏度",
          "cx": "2018-11-12 23:56:10"
        },
        {
          "id": 6,
          "imgurl": "../../images/tyj/s3.png",
          "useDate": "温湿度计09湿度",
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
      url: 'https://tianyuanfarm.com/product/al4',
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
      // url: 'https://tianyuanfarm.com/product/i',
      url: 'http://127.0.0.1:8080/product/i',
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
      //  url: 'https://tianyuanfarm.com/product/i',
     url: 'http://127.0.0.1:8080/product/i',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (r) {
      //  console.log(r);
        that.setData({
          infoData: r.data,
          xin:1
        });
      },
      fail: function(r){
        that.setData({
          xin: 0
        });
      }
    });
  },

  intervalMonit: function () {
    var that = this;
    wx.request({
  //  url: 'https://tianyuanfarm.com/product/al4',
      url: 'http://127.0.0.1:8080/product/al4',
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

  }
})