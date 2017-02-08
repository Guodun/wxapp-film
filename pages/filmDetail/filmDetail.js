var douban = require('../../utils/fetch');
var config = require('../../utils/config');

Page({
  data:{
    filmDetailData:{}, //电影数据
    directors: [], //导演
    casts: "", //演员
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 4000
    })
    var moviesId = Object.keys(options).toString();
    var page = this;
    douban.fetchFilmDetail.call(page, config.apiList.filmDetail, moviesId, function cb(data){
      page.setData({
        filmDetailData: data
      })
      page.processFilmData(data);
    });
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    wx.hideToast();
  },
  onShow:function(){
    // 生命周期函数--监听页面显示

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
    var casts = casts.slice(0, casts.length-1);
    var directors = directors.slice(0, directors.length-1);
    page.setData({
      directors: directors,
      casts: casts
    })
  }
})