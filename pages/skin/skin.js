var url = 'https://static.sesine.com/wechat-weapp-movie'
Page({
  data:{
    skinList: [
        {title: '公路', imgUrl: url + '/images/user_bg_1.jpg'},
        {title: '黑夜森林', imgUrl: url + '/images/user_bg_2.jpg'},
        {title: '鱼与水', imgUrl: url + '/images/user_bg_3.jpg'},
        {title: '山之剪影', imgUrl: url + '/images/user_bg_4.jpg'},
        {title: '火山', imgUrl: url + '/images/user_bg_5.jpg'},
        {title: '科技', imgUrl: url + '/images/user_bg_6.jpg'},
        {title: '沙漠', imgUrl: url + '/images/user_bg_7.jpg'},
        {title: '叶子', imgUrl: url + '/images/user_bg_8.jpg'},
        {title: '早餐', imgUrl: url + '/images/user_bg_9.jpg'},
        {title: '英伦骑车', imgUrl: url + '/images/user_bg_10.jpg'},
        {title: '草原', imgUrl: url + '/images/user_bg_11.jpg'},
        {title: '城市', imgUrl: url + '/images/user_bg_12.jpg'}
    ],
    nowImage: "https://static.sesine.com/wechat-weapp-movie/images/user_bg_1.jpg"
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    var bgImage = wx.getStorageSync('bgImage');
    this.setData({nowImage: bgImage});
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
  changeSkin: function(res){
    console.log(res.currentTarget.dataset.image);
    // 获取背景图片路径
    var bgImage = res.currentTarget.dataset.image
    wx.setStorageSync('bgImage', bgImage);
    wx.switchTab({
      url: '../my/my' ,
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