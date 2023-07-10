// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    oppn: false,
    num: 17,
    showFeng: false,
    mode:'❄️',
    top:'20%',
    mobyle: "自动扫风",
    showTime: false,
    winColor:'#1976d2',
    firstOpen:true
  },
  onLoad(){
    let firstOpen = wx.getStorageSync("loadOpen")    
    if (firstOpen == undefined || firstOpen == '') { // 根据缓存周期决定是否显示新手引导      
      this.setData({ isTiptrue: true })    
    } 
    else {      
      this.setData({ isTiptrue: false })    
    }
  },
  // 事件处理函数
  btnClose: function() {
    const that = this
    wx.vibrateShort();
    this.playDiSound()
    // this.playWorkSound()
    var oppn = this.data.oppn
    if(oppn === false){
      this.playWorkSound()
      // setTimeout(()=>{
      //   wx.showToast({
      //     title: '进入静音模式~',
      //     icon:'none'
      //   })
      // },8000)
    }
    this.setData({
      oppn: !oppn,
      showFeng: false,
      showTime: false
    })
  },
  saofeng() {
    if(this.data.oppn === false) { 
      return
    }
    var showFeng = this.data.showFeng
    this.setData({
      showFeng: !showFeng,
    })
  },
  zhileng() {

    if(this.data.oppn === false) { 
      return
    }
    this.playDiSound()
    wx.vibrateShort();
    this.setData({
      mode:'❄️',
      winColor:'#1976d2'
    })
  },
  zhire() {
    if(this.data.oppn === false) { 
      return
    }
    this.playDiSound()
    wx.vibrateShort();
    this.setData({
      mode:'☀️',
      winColor:'#ffa500'
    })
  },
  zidongguanbi() {
    if(this.data.oppn === false) { 
      return
    }
    var showTime = this.data.showTime
    this.setData({
      showTime: !showTime,
    })
  },
  up() {
    if(this.data.oppn == true) {
      this.playDiSound()
      wx.vibrateShort();
    if(this.data.num > 29) {
      this.data.num = 30
      return
    } else {
     var num = this.data.num
     this.setData({
      num: num + 1,
    })
    }
  }
    return
  },
  down() {
    if(this.data.oppn == true) {
      this.playDiSound()
      wx.vibrateShort();
    if(this.data.num < 17) {
      this.data.num = 16
      return
    } else {
     var num = this.data.num
     this.setData({
      num: num - 1,
    })
    }
  }
  return
  },
  playDiSound(){
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: true 
    })
    innerAudioContext.src = 'pages/static/sound/di.m4a'
    innerAudioContext.play() // 播放
  },
  playWorkSound(){
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: true 
    })
    innerAudioContext.src = 'pages/static/sound/ac-work.m4a'
    innerAudioContext.play() // 播放
  },
  onShareAppMessage(){
    return{
      title:'本群已安装空调'
    }
  },
  onShareTimeline:function(){
    return{
        title: "朋友圈已安装空调",
        imageUrl:"../static/img/fs1.png"
        }
    },
    closeGuide: function (e) {    
      wx.setStorage({      
        key: 'loadOpen',      
        data: 'OpenTwo'    
      })    
      this.setData({ isTiptrue: false }) 
    },

})
