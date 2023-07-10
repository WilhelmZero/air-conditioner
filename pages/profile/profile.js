// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
        avatarUrl:'../static/img/avatar.jpeg',
        nickname:'神秘用户'
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return{
        title:'送你一台小空调',
        imageUrl:'../static/img/sharefan.jpg'
    }
  },
  onShareTimeline:function(){
    return{
        title: "朋友圈已安装空调",
        imageUrl:"../static/img/fs1.png"
        }
    },

  
  onClickAbout(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  
  onClickSubscribe(){
    wx.navigateTo({
      url: '../webpage/webpage',
    })
    // wx.showToast({
    //   title: '开发中...',
    //   icon:'none'
    // })
}
})