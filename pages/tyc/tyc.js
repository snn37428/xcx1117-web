
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

    console.log('index Launching ...');

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
      ]
    };
    that.setData({
      carInfoData: data.datas
    })
  },


  onShow: function () {
    var that = this;
    setInterval(function () {
      that.intervalMonit();
    }, 1000);
  },

  intervalMonit: function () {
    var that = this;
    wx.request({
      url: 'http://tianyuanfarm.com:8080/product/al1',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (r) {
        console.log(r);
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