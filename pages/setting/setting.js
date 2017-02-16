Page({
  data:{
    cells: [
      [{title: '个人资料', access: true, urlName: 'userInfo'}],
      [{title: '手机信息', access: false, urlName: 'phoneInfo'},{title:'清除缓存', access: false, urlName: 'clearStorage'}],
      [{title: '更新位置', access: true, urlName: 'position'}],
      [{title: '关于', access: true, urlName: 'about'}]
      ]
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
  toViews: function(res){
    var page = this;
    switch(res.currentTarget.dataset.url){
      case "userInfo":
        console.log('------userInfo-----');
        page.navigate('userInfo');
        break;
      case "phoneInfo":
        console.log('------phoneInfo-----');
        page.navigate('phoneInfo');
        break;
      case "clearStorage":
        console.log('------clearStorage-----');
        page.navigate('clearStorage');
        break;
      case "position":
        console.log('------position-----');
        page.navigate('position');
        break;
      case "about":
        console.log('------about-----');
        page.navigate('about');
        break;
      default:
        console.log('-----about-----');
    }
  },
  navigate: function(url){
    wx.navigateTo({
      url: 'settingView/' + url +'/' +url,
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