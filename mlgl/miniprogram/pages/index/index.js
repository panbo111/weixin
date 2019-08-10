// pages/index/index.js
const db = wx.cloud.database({ env:'we0001-gcgcs'});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'cloud://we0001-gcgcs.7765-we0001-gcgcs/s1.jpg',
      'cloud://we0001-gcgcs.7765-we0001-gcgcs/s2.jpg',
      'cloud://we0001-gcgcs.7765-we0001-gcgcs/s3.jpg'
    ],
    list:[],
    list1:[],
    list2:[],
    qianyin:[],
    chongwu:[],
  
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    name: "",
    focus: "",
    inputValue: '',
    hotpng:'cloud://we0001-gcgcs.7765-we0001-gcgcs/hot.png',
    qyspng:'cloud://we0001-gcgcs.7765-we0001-gcgcs/qys.png',
    cwwjpg:'cloud://we0001-gcgcs.7765-we0001-gcgcs/cww.jpg',
    morepng:'cloud://we0001-gcgcs.7765-we0001-gcgcs/more.png',
    pfjpg:'cloud://we0001-gcgcs.7765-we0001-gcgcs/pf.jpg',
    maoshajpg:'cloud://we0001-gcgcs.7765-we0001-gcgcs/swp/maosha.jpg',
    grjpg:'cloud://we0001-gcgcs.7765-we0001-gcgcs/gr.jpg'
   


  },
  toproduct(e) {
    console.log(e,22);
    var id = e.target.dataset.id
    console.log(id,4444);
    wx.navigateTo({
      url: '/pages/product/product?id=' + id,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data,32432)
        },
        someEvent: function (data) {
          
        }

      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据

      }
    })
  },





  bindButtonTap: function (e) {
    this.setData({
      searchValue: e.detail.value
    })
    console.log(e.detail.value,22)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('list1')
    .get()
    .then(res=>{
      console.log(res,77)
      var list=res.data;
      
      this.setData({
        list1:list
      })
    })
    .catch(err=>{console.log(err)})
    

    db.collection('list2')
      .get()
      .then(res => {
        console.log(res, 77)
        var list = res.data;

        this.setData({
          list2: list
        })
      })
      .catch(err => { console.log(err) })

    db.collection('qianyin')
      .get()
      .then(res => {
        console.log(res, 77)
        var list = res.data;

        this.setData({
          qianyin: list
        })
      })
      .catch(err => { console.log(err) })
      
    db.collection('chongwu')
      .get()
      .then(res => {
        console.log(res, 77)
        var list = res.data;

        this.setData({
          chongwu: list
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