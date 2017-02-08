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
    douban.fetchPersonDetail.call(page, config.apiList.personDetail, personId, function cb(data){
      page.setData({filmPersonData: data});
      console.log(data);
    })    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   s
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
    })
  }
})