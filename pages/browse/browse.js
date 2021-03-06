Page({
  data:{
    navTab: ['电影','人物'],
    currentTab: '0',
    currentView: 'browse'
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.getHistoryData();
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
  switchTap: function(res){
    console.log(res);
    this.setData({currentTab: res.currentTarget.dataset.index})
  },
  // 获取浏览过的数据
  getHistoryData: function(){
    //浏览电影日期
    wx.getStorage({
      key: 'date',
      success: function(res){
        page.setData({date: res.data});
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    //电影数据
    var page = this;
    wx.getStorage({
      key: 'filmHistory',
      success: function(res){
         page.setData({moviesData: res.data});
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
    //任务数据
    wx.getStorage({
      key: 'personHistory',
      success: function(res){
        page.setData({personsData: res.data})
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