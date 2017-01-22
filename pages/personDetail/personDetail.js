Page({
  data:{
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

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})