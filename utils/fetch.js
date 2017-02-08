function getMoviesData(url, start, count, cb){
    var page = this;
    wx.request({
    url: url,
    data: {
        start: start,
        count: count
    },
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
        'Content-Type': 'json'
    },
    success: function(res){
        console.log(res);
        if(res.data.subjects.length === 0){
            console.log('------------nodata------------')
        }else{
            page.setData({
                moviesData: page.data.moviesData.concat(res.data.subjects),
                // start: page.data.start + res.data.subjects.length,
                })
        }
    },
    fail: function() {
        console.log('----fail-----')
    },
    complete: function() {
        console.log('-----complete-----')
        wx.hideToast();
    }
    })  
}

function searchFilm(url, q, count, cb){
    var page = this;
    wx.request({
      url: url + q,
      data: {
          count: count
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'json'
      }, 
      success: function(res){
        if(res.data.subjects.length === 0){
            console.log('------------nodata------------')
        }else{
            page.setData({
                moviesData: page.data.moviesData.concat(res.data.subjects),
                start: page.data.start + res.data.subjects.length
                })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}

function fetchFilmDetail(url, id, cb){
    wx.request({
      url: url + id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
          'Content-Type': 'json' 
      }, 
      success: function(res){
        console.log(res);
        typeof cb == 'function' && cb(res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}

function fetchPersonDetail(url, id, cb){
    wx.request({
      url: url + id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         'Content-Type': 'json'   
      },
      success: function(res){
        console.log(res);
        typeof cb === 'function' && cb(res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}

module.exports = {
    getMoviesData: getMoviesData,
    searchFilm: searchFilm,
    fetchFilmDetail: fetchFilmDetail,
    fetchPersonDetail: fetchPersonDetail
}