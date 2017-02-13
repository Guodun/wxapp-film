var douban = require('../../utils/fetch');
var config = require('../../utils/config');
var timedata = require('../../utils/getDate');

Page({
  data:{
    filmDetailData:{}, //电影数据
    directors: [], //导演
    casts: "", //演员
    filmCollectData: {}, //收藏数据
    // isCollectFilm: false //判断电影是否收藏过
  },
  onLoad:function(options){
    var page = this;
    // 加载数据时显示加载弹框
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 4000
    })
    //请求电影详情api, 获取数据
    var moviesId = Object.keys(options).toString(); //电影id
    douban.fetchFilmDetail.call(page, config.apiList.filmDetail, moviesId, function cb(data){
      var time = timedata.getTime();
      data.time = time;
      page.setData({ filmDetailData: data })
      page.processFilmData(data);
      page.filmHistory();
    });
    // 判断是否收藏
    wx.getStorage({
      key: 'filmCollectData',
      success: function(res){
        console.log(res);
        for(let i=0; i<res.data.length; i++){
          if( res.data[i].movieId == moviesId){
            page.setData({isCollectFilm:true});
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
    // this.filmHistory();
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    wx.hideToast();
  },
  onShow:function(){

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
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },

  //点击人物图片跳转至电影人物页面
  toPersonDetail: function(res){
    var personId = res.currentTarget.id;
    wx.navigateTo({
      url: '../personDetail/personDetail?' + personId,
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
  },

  //处理电影数据
  processFilmData: function(filmData){
    var page = this;
    var directors =""; 
    var casts = ""; 
    for(var i = 0; i < filmData.directors.length; i++){
      directors += filmData.directors[i].name + '/';
    };
    for(var i = 0; i < filmData.casts.length; i++){
      casts += filmData.casts[i].name + '/';
    };
    var casts = casts.slice(0, casts.length-1);//导演
    var directors = directors.slice(0, directors.length-1);//演员
    var rating = filmData.rating.average; //评分
    var year = filmData.year; //上映年份
    var title = filmData.title;//电影名字
    var imageUrl = filmData.images.large//海报
    var movieId = filmData.id// 电影id
    var time = timedata.getTime(); //浏览时间
    //收藏的电影数据
    var filmCollectData ={
      directors: directors,
      casts: casts,
      rating: rating,
      year: year,
      imageUrl: imageUrl,
      title: title,
      movieId: movieId,
      time: time,
    };
    page.setData({
      directors: directors,
      casts: casts,
      filmCollectData: filmCollectData
    })
  },
  //收藏电影按钮
  collectButton: function(){
    var page = this;
    //判断是否收藏过，有则删除，没有则添加
    wx.getStorage({
      key: 'filmCollectData',
      success: function(res){
        console.log('------------alreadycollect------------');
        var filmStorage = res.data;
        //已经收藏，删除
        if (page.data.isCollectFilm){
          for( let i = 0; i < res.data.length; i++){
              if( res.data[i].movieId == page.data.filmDetailData.id ){
                filmStorage.splice(i,1);
              }
          };
          wx.setStorage({
            key: 'filmCollectData',
            data: filmStorage,
            success: function(res){
              page.setData({isCollectFilm: false})
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }else{ //没有收藏，添加
          console.log('------------no collect------------');
          console.log(res);
          filmStorage.push(page.data.filmCollectData);
          wx.setStorage({
            key: 'filmCollectData',
            data: filmStorage,
            success: function(res){
              page.setData({ isCollectFilm: true });
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          });
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

  //电影浏览记录
  filmHistory: function(){
    console.log('----------------getFilmHistory-------------')
    var page = this;
    wx.getStorage({
      key: 'filmHistory',
      success: function(res){
        console.log(res)
        var filmHistoryStorage = res.data;
        //已浏览，更新数据
        for( let i = 0; i < res.data.length; i++){
          if( res.data[i].movieId == page.data.filmDetailData.id ){
            console.log('----------alreadySee----------')
            filmHistoryStorage.splice(i,1);
            wx.setStorage({
              key: 'filmHistory',
              data: filmHistoryStorage,
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
        };
        //未浏览，添加数据
        filmHistoryStorage.unshift(page.data.filmCollectData);
        wx.setStorage({
          key: 'filmHistory',
          data: filmHistoryStorage,
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
        // debugger;
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})