Page({
  data: {    
    // data中添加变量
    isTiptrue: true
  },

  onLoad: function () {
  // onLoad中添加以下代码
  var firstOpen = wx.getStorageSync("loadOpen")    
  console.log(123);
  if (firstOpen == undefined || firstOpen == '') { // 根据缓存周期决定是否显示新手引导      
    console.log(firstOpen == undefined || firstOpen == '');
    this.setData({ isTiptrue: true })    
  } 
  else {      
    console.log(firstOpen == undefined || firstOpen == '');
    this.setData({ isTiptrue: false })    
  }
  },
  // Page中添加关闭引导
  closeGuide: function (e) {    
    wx.setStorage({      
      key: 'loadOpen',      
      data: 'OpenTwo'    
    })    
    this.setData({ isTiptrue: false }) 
  },
  
})