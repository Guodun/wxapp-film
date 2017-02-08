var douban = require('../../utils/fetch');
var config = require('../../utils/config');
var url = 'https://static.sesine.com/wechat-weapp-movie'

Page({
  data:{
    indicatorDots: true,
    autoplay: true,
    bannerList: [
        {type:'film', id: '26683290', imgUrl: url + '/images/banner_1.jpg'},
        {type:'film', id: '25793398', imgUrl: url + '/images/banner_2.jpg'},
        {type:'film', id: '26630781', imgUrl: url + '/images/banner_3.jpg'},
        {type:'film', id: '26415200', imgUrl: url + '/images/banner_4.jpg'},
        {type:'film', id: '3025375', imgUrl: url + '/images/banner_5.jpg'}
    ],
    moviesData:[], 
    start: 0
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 4000
    })
    douban.getMoviesData.call(this, config.apiList.popular, this.data.start, config.count);
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
    var page = this;
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 4000
    })
    console.log('-----------------onReachBottom----------------')
    douban.getMoviesData.call(page, config.apiList.popular, page.data.start, config.count);
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  //跳转到电影详情页面
  tofilmDetail: function(res){
    var movieId = res.currentTarget.id
    wx.navigateTo({
      url: '../filmDetail/filmDetail?' + movieId,
      success: function(res){
        console.log(res)
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {
        console.log('complate')
      }
    })
  },
  toSearchView: function(){
    wx.navigateTo({
      url: '../search/search',
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
})