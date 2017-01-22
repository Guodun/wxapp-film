Page({
  data:{
    indicatorDots: true,
    autoplay: true,
    imagUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    movieImag:'https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2403049086.jpg',
    moviesData:[] //
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.getMoviesData();
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
  getMoviesData: function(){
      var page = this;
      wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
            'Content-Type': 'json'
        }, // 设置请求的 header
        success: function(res){
          // success
          wx.showToast({
            title: '玩命加载中..',
            icon: 'loading',
            duration: 5000
          }),
          console.log(res);
          page.setData({
              moviesData: res.data.subjects
          })
          wx.hideToast();
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  tofilmDetail: function(){
    wx.redirectTo({
      url: '../filmDetail/filmDetail',
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