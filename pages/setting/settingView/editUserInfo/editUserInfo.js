Page({
  data:{
    sex: ['男','女'],
    index: 0,
    selectSex: '',
    selectBrth: '',
    selectSing: '',
    sign: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天枰座','天蝎座','射手座','摩羯座','水瓶座','双鱼座']
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
  formsubmit: function(res){
    console.log(res);
  },
  bindPickerChange: function(res){
    console.log(res);
    this.setData({
      index: res.detail.value,
      selectSex: this.data.sex[res.detail.value]
      });
  
  },
  bindDateChange: function(res){
    console.log(res);
    this.setData({
      selectBrth: res.detail.value
    })
  },
  bindSingChange: function(res){
    console.log(res);
    this.setData({
      signIndex: res.detail.value,
      selectSing: this.data.sign[res.detail.value]
      });
  
  },
})