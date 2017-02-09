var url = 'https://static.sesine.com/wechat-weapp-movie'
var app = getApp();
Page({
  data:{
    bgImage: 'https://static.sesine.com/wechat-weapp-movie/images/user_bg_1.jpg',
    viewList:[
      {znName: '收藏', name: 'collect'},
      {znName: '浏览记录', name: 'browse'},
      {znName: '摇一摇', name: 'shake'},
      {znName: '相册', name: 'photo' },
      {znName: '设置', name: 'setting'}
    ],
    avatarUrl: '',//用户头像
    nickName: '' //用户名称
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log(app);
    var avatarUrl = app.globalData.userInfo.avatarUrl;
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName
      })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    var bgImage = wx.getStorageSync('bgImage');
    if(bgImage){
      console.log('----haveStorage-----');
      this.setData({bgImage: bgImage});
    }else{
      console.log('------NoStorage------')
    }
    // this.setData({bgImage: bgImage});
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
  toSkinList: function(){
    wx.navigateTo({
      url: '../skin/skin',
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
  toViews: function(res){
    var page = this;
    switch(res.currentTarget.dataset.url){
      case "collect":
        console.log('------collect-----');
        page.navigate('collect');
        break;
      case "browse":
        console.log('------tobrowse-----');
        page.navigate('collect');
        break;
      case "shake":
        console.log('------shake-----');
        page.navigate('shake');
        break;
      case "photo":
        console.log('------photo-----');
        page.navigate('photo');
        break;
      case "setting":
        console.log('------setting-----');
        page.navigate('setting');
        break;
      default:
        console.log('-----defualt-----');
    }
  },
  navigate: function(url){
    wx.navigateTo({
      url: '../' + url +'/' +url,
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