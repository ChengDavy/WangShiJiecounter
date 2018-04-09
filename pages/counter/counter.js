var aT = "全费用:"
var cT = "价税分离:"
var bF = "价税不分:"
var yJ = "佣金:"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonecall:"17637550001",
    allText:aT,
    cunText:cT,
    nofText:bF,
    bfText:yJ,
    flText:yJ,
    jjp: 0.00,
    ccp: 0.00,
    syp: 0.00,
    jjc: 0.00,
    ccc: 0.00,
    syc: 0.00


  },
  jjpinput: function(e){
    this.setData({
      // jjp:e.detail.value
      jjp: this.parseFloatFromString(e.detail.value)

    })
  },
  ccpinput: function (e) {
    this.setData({
      ccp: this.parseFloatFromString(e.detail.value)
    })
  },
  sypinput: function (e) {
    this.setData({
      syp: this.parseFloatFromString(e.detail.value)
    })
  },
  jjcinput: function (e) {
    this.setData({
      jjc: this.parseFloatFromString(e.detail.value)
    })
  },
  cccinput: function (e) {
    this.setData({
      ccc: this.parseFloatFromString(e.detail.value)
    })
  },
  sycinput: function (e) {
    this.setData({
      syc: this.parseFloatFromString(e.detail.value)
    })
  },
// 字符串转数字
  parseFloatFromString: function (str) {
    if (str == "") {
      return 0;
    } else {
      return parseFloat(str)
    }
  },

  counter: function(){


    //总费用
    var allP = this.data.jjp + this.data.ccp + this.data.syp

    //交强险金额

    var jjpdb = this.data.jjp - this.data.jjp / 100 * this.data.jjc

    var jjpdf = this.data.jjp - this.data.jjp / 1.06 / 100 * this.data.jjc

    // 车船税

    var ccpd = this.data.ccp - this.data.ccp / 100 * this.data.ccc

    // 商业险

    var sypdb = this.data.syp - this.data.syp / 100 * this.data.syc

    var sypdf = this.data.syp - this.data.syp / 1.06 / 100 * this.data.syc

    // 价税分离

    var flpd = jjpdf + ccpd + sypdf

    // 价税不分

    var bfpd = jjpdb + ccpd  + sypdb

    var fly = allP - flpd

    var bfy = allP - bfpd

    jjpdb = jjpdb.toFixed(2)

    jjpdf = jjpdf.toFixed(2)

    ccpd = ccpd.toFixed(2)

    sypdb = sypdb.toFixed(2)

    sypdf = sypdf.toFixed(2)

    flpd = flpd.toFixed(2)

    bfpd = bfpd.toFixed(2)

    fly = fly.toFixed(2)

    bfy = bfy.toFixed(2)

    this.setData({

      allText: aT + "  " + this.data.jjp + "+" + this.data.ccp + "+" + this.data.syp + "=" + allP,

      cunText: cT + "  " + jjpdf + "+" + ccpd + "+" + sypdf + "=" + flpd,

      nofText: bF + "  " + jjpdb + "+" + ccpd + "+" + sypdb + "=" + bfpd,

      bfText: yJ + bfy,

      flText: yJ + fly,

    })

  },

  callMe: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phonecall,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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