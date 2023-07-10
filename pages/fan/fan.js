// pages/fan/fan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    speed:'0',
    fanWorkAudioContext:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.fanWorkAudioContext = wx.createInnerAudioContext({
        useWebAudioImplement: true,
      })
      this.data.fanWorkAudioContext.src = 'pages/static/sound/fan-work.mp3'
      this.data.fanWorkAudioContext.loop =true
  },
  onHide(){

    this.data.fanWorkAudioContext.stop() // 播放
  },

  onShareAppMessage() {
    return{
        title:'送你一台小风扇',
        imageUrl:'../static/img/sharefan.jpg'
    }
  },
  onShareTimeline:function(){
    return{
        title: "朋友圈已安装空调",
        imageUrl:"../static/img/fs1.png"
        }
    },
  onChangeSpeed(e){
    console.log(e);
    const speed = e.currentTarget.dataset.speed
    this.data.fanWorkAudioContext.stop() // 播放
    this._playKaSound()
    wx.vibrateShort();
    if(speed != 0){
        this.data.fanWorkAudioContext.play() // 播放
    }
    this.setData({
      speed
    })
  },
  
  _playKaSound(){
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: true 
    })
    innerAudioContext.src = 'pages/static/sound/ka.mp3'
    innerAudioContext.play() // 播放
  },


})