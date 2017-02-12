//app.js
App({
  onLaunch: function () {
    this.getUserInfo();
    this.initStorage();
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
    //初始化数据
  initStorage: function(){
    wx.getStorageInfo({
      key: 'filmCollectData',
      success: function(res){
        //电影收藏
        if(!('filmCollectData' in res.keys)){
          wx.setStorage({
            key: 'filmCollectData',
            data: [],
            success: function(res){
              console.log('----------setinitStorage--------')
            }
          })
        }
      }
    });

    wx.getStorageInfo({
      key: 'filmHistory',
      success: function(res){
        //电影浏览记录
        if(!('filmHistory' in res.keys)){
          wx.setStorage({
            key: 'filmHistory',
            data: [],
            success: function(res){
              console.log('----------setinitStorage--------')
            }
          })
        }
      }
    });

    wx.getStorageInfo({
      key: 'personCollectData',
      success: function(res){
        //人物收藏
        if(!('personCollectData' in res.keys)){
          wx.setStorage({
            key: 'personCollectData',
            data: [],
            success: function(res){
              console.log('----------setinitStorage--------')
            }
          })
        }
      }
    });

    wx.getStorageInfo({
      key: 'filmHistory',
      success: function(res){
        //人物浏览记录
        if(!('filmHistory' in res.keys)){
          wx.setStorage({
            key: 'filmHistory',
            data: [],
            success: function(res){
              console.log('----------setinitStorage--------')
            }
          })
        }
      }
    });
  }
})