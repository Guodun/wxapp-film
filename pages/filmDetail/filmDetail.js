Page({
  data:{
    imgeUrl: "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2403049086.jpg",
    introduce: "这是一个战火频燃、纷争不断的动荡时代，一群有志之士集结在一起，计划盗走帝国大规模杀伤性武器“死星”的设计图。这个在《星球大战》系列里非常著名的重点事件 ，让一群平凡普通人结成了同盟，决定为世界的改变做出贡献；而在绝密行动的进行中，他们也逐渐成长为顶天立地的英雄。",
    pepleImages: [
      "https://img3.doubanio.com/img/celebrity/large/42373.jpg",
      "https://img3.doubanio.com/img/celebrity/large/36123.jpg",
      "https://img3.doubanio.com/img/celebrity/large/10695.jpg",
      "https://img3.doubanio.com/img/celebrity/large/5681.jpg",
      "https://img3.doubanio.com/img/celebrity/large/10695.jpg",
      "https://img3.doubanio.com/img/celebrity/large/5681.jpg"
    ],
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成

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
  toPersonDetail: function(){
    wx.redirectTo({
      url: '../personDetail/personDetail',
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