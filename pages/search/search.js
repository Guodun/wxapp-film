Page({
  data:{
    hotSearch: [
      "功夫熊猫","摆渡人","长城","我不是潘金莲","这个杀手不太冷","卢德水","我在故宫修文物","你的名字","功夫熊猫"
    ],
    hotTips: ["动作","喜剧","爱情","悬疑"],
    searchId:""
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
  formSubmit: function(e){
    console.log(e);
    this.setData({
      searchId: e.detail.value.input
    })
  },
  toSearchReasultView: function(){
    var id = this.data.searchId;
    wx.navigateTo({
      url: '../searchReasult/searchReasult?'+ id,
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