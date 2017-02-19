Page({
  data:{
    cells: [
      [
        {title: '姓名', access: true, urlName: 'userInfo'},
        {title: '性别', access: true, urlName: 'userInfo'},
        {title: '年龄', access: true, urlName: 'userInfo'},
        {title: '生日', access: true, urlName: 'userInfo'},
        {title: '星座', access: true, urlName: 'userInfo'}
        ],
      [
        {title: '公司', access: false, urlName: 'phoneInfo'},
        {title:'学校', access: false, urlName: 'clearStorage'},
        {title:'手机号码', access: false, urlName: 'clearStorage'},
        {title:'邮箱', access: false, urlName: 'clearStorage'}
        ],
      [{title: '个性签名', access: true, urlName: 'position'}],
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
  editInfo: function(res){
    console.log('------------toedit----------')
    wx.navigateTo({
      url: '../editUserInfo/editUserInfo',
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