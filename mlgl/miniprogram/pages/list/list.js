// pages/list/list.js
const db = wx.cloud.database({ env: 'we0001-gcgcs' });
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tehuijpg:'cloud://we0001-gcgcs.7765-we0001-gcgcs/tehui.jpg',
    listjuan:[],
    list:[]
  },
  toproduct(e) {
    console.log(e, 22);
    var id = e.target.dataset.id
    console.log(id, 4444);
    wx.navigateTo({
      url: '/pages/product/product?id=' + id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }

      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据

      }
    })
  },
   navigateTo(e){
     var id=e.target.dataset.id
     wx.navigateTo({
       url: '/pages/youhui/youhui?id='+id,
       events: {
         // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
         acceptDataFromOpenedPage: function (data) {
           console.log(data)
         },
         someEvent: function (data) {
           console.log(data)
         }
    
  },
       success: function (res) {
         // 通过eventChannel向被打开页面传送数据
         
       }
     })
   },
  
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    db.collection('listjuan')
      .get()
      .then(res => {
        var list = res.data;
        
        this.setData({
          listjuan: list
        })
      })
      .catch(err => { console.log(err) })
    db.collection('glist')
      .get()
      .then(res => {
        var list = res.data;
        
        this.setData({
          list: list
        })
      })
      .catch(err => { console.log(err) })
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