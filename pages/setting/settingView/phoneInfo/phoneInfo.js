Page({
  data:{
    cells: [
      [
        {title: '手机型号', info: 'iPhone 6'},
        {title: '分辨率', info: '750*1250'},
        {title: '系统语言', info: 'zh_CH'},
        {title: '微信版本', info: '6.3.9'},
        {title: '小程序版本', info: 'v2.0'},
        ]
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
  editInfo: function(){
    
  }
})