var douban = require('../../utils/fetch');
var config = require('../../utils/config');

Page({
  data:{
    moviesData:[],
    start: 0,
    hasMore: true,
    showLoading: true
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.showToast({
        title: '玩命加载中..',
        icon: 'loading',
        duration: 10000,
        success: function(){
            console.log('--------loadingsuccess-------')
        },
        fail: function() {
            console.log('----loadingfail-----')
        },
        complete: function() {
            console.log('-----loadingcomplete-----')
            wx.hideToast();
        }
    })  
    douban.getMoviesData.call(this, config.apiList.coming, this.data.start, config.count);
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
  }
})