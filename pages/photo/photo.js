Page({
  data:{
    pitcure: []
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var page = this;
    wx.getStorage({
      key: 'photo',
      success: function(res){
        page.setData({pitcure: res.data});
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  
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

  //点击上传
  uploadImage: function(res){
    var page = this;
    var pitcure = this.data.pitcure;
    //选择图片
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        console.log(res);
        var tempFilePaths = res.tempFilePaths["0"]// 上传相片后得到的临时地址
        // 保存
        wx.saveFile({
          tempFilePath: tempFilePaths,
          success: function(res){
            console.log(res);
            pitcure.push(res.savedFilePath);
            page.setData({pitcure: pitcure});
            // 缓存数据
            wx.setStorageSync('photo', pitcure);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        });
        //缓存数据
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