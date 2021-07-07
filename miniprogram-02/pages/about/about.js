// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '关于',
    arr: [123,456,789],
    list: [
      {
        "name" : "mahesh",
        "password" : "password1",
        "profession" : "teacher",
        "id": 1
     },
     {
        "name" : "suresh",
        "password" : "password2",
        "profession" : "librarian",
        "id": 2
     },
     {
        "name" : "ramesh",
        "password" : "password3",
        "profession" : "clerk",
        "id": 3
     }
    ],
    x: 0,
    y: 0,
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const ctx = wx.createCanvasContext('myCanvas')
    // ctx.setFillStyle('red')
    // ctx.fillRect(10, 10, 150, 75)
    // ctx.draw()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  start (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end (e) {
    this.setData({
      hidden: true
    })
  }
})