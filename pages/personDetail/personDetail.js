var douban = require('../../utils/fetch');
var config = require('../../utils/config');

Page({
  data:{
    filmPersonData: {}
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var page = this;
    var personId = Object.keys(options).toString();
    //获取api数据
    douban.fetchPersonDetail.call(page, config.apiList.personDetail, personId, function cb(data){
      page.setData({filmPersonData: data});
      console.log(data);
    });
    //判断是否收藏
    page.isCollect();

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 4000
    })
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏

  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  tofilmDetail: function(res){
    var moviesId = res.currentTarget.id;
    wx.navigateTo({
      url: '../filmDetail/filmDetail?' + moviesId,
      success: function(res){
        console.log(res)
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {
        console.log('complate')
      }
    });
  },
  //收藏按钮
  collectButton: function(res){
    console.log('----------collectButton---------------');
    var page = this;
    //判断是否收藏，是则删除，没有则增加
    wx.getStorage({
      key: 'personCollectData',
      success: function(res){
        var collectData = res.data
        //删除
        if(page.data.isCollect){
          console.log('-------------alreadyCollect-----------');
          for( let i = 0; i < res.data.length; i++){
            if( res.data[i].id == page.data.filmPersonData.id){
              collectData.splice(i,1);
            }
          }
          wx.setStorage({
            key: 'personCollectData',
            data: collectData,
            success: function(res){
              page.setData({isCollect: true});
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          });
        }else{// 添加
          console.log('-------------notCollect-----------');
          collectData.push(page.data.filmPersonData);
          wx.setStorage({
            key: 'personCollectData',
            data: collectData,
            success: function(res){
              // success
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  isCollect: function(){
    var page = this;
    wx.getStorage({
      key: 'personCollectData',
      success: function(res){
        for( let i = 0; i < res.data.length; i++){
          if(res.data[i].id == page.data.filmPersonData.id){
            page.setData({isCollect: true});
          }
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
  },
  // getCollectData: function(){
  //   console.log()
  //   wx.getStorage({
  //     key: 'personCollectData',
  //     success: function(res){
  //       debugger;
  //       wx.setStorage({
  //         key: 'personCollectData',
  //         data: page.data.filmPersonData,
  //         success: function(res){
  //           // success
  //         },
  //         fail: function() {
  //           // fail
  //         },
  //         complete: function() {
  //           // complete
  //         }
  //       })
  //     },
  //     fail: function() {
  //       // fail
  //     },
  //     complete: function() {
  //       // complete
  //     }
  //   })
  // }
})