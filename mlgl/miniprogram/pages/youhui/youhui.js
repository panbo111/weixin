// pages/youhui/youhui.js
const db = wx.cloud.database({ env: 'we0001-gcgcs' });
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[]
  },
  back(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    db.collection("listjuan").where({_id:options.id})
    .get()
      .then(res => {
        var list= res.data;

        this.setData({
          num:list
        })
      })
      
    

  },
  show(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})