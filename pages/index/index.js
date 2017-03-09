Page({
  playPiano: function() {
    wx.navigateTo({
      url: '../piano/index'
    })
  },
  playCadulator:function(){
      wx.navigateTo({
        url:'../calculator/index'
      })
    }
})