//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    judge: true,
    oldImageUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1607527980&di=7f9f343af66d05743d2e629a62b1ac58&src=http://a0.att.hudong.com/52/62/31300542679117141195629117826.jpg',
    newImageUrl: 'http://b128.photo.store.qq.com/psb?/V12Zb85j0TVxiE/5WYHl5ghikb2PN53rwqJIWdWX4xbnCqu8XzUTruKvpY!/b/dJmPV0zyDwAA&bo=IANYAgAAAAABJ3k!&rf=viewer_4',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      // app.userInfoReadyCallback = res => {
      var _this = this;
      app.userInfoReadyCallback = function(res) {
        console.log(res)
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changeText: function() {
    this.setData({judge: !this.data.judge, motto: !this.data.judge?'Hello World':'ssssss'})
  }
})
