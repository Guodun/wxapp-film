var url = 'https://static.sesine.com/wechat-weapp-movie'
module.exports ={
    count: 5,
    apiList: {
        popular: 'https://api.douban.com/v2/movie/in_theaters',
        coming: 'https://api.douban.com/v2/movie/coming_soon',
        top: 'https://api.douban.com/v2/movie/top250',
        search: 'https://api.douban.com/v2/movie/search?q=',
        filmDetail: 'https://api.douban.com/v2/movie/subject/',
        personDetail: 'https://api.douban.com/v2/movie/celebrity/'
    },
    bannerList: [
        {type:'film', id: '26683290', imgUrl: url + '/images/banner_1.jpg'},
        {type:'film', id: '25793398', imgUrl: url + '/images/banner_2.jpg'},
        {type:'film', id: '26630781', imgUrl: url + '/images/banner_3.jpg'},
        {type:'film', id: '26415200', imgUrl: url + '/images/banner_4.jpg'},
        {type:'film', id: '3025375', imgUrl: url + '/images/banner_5.jpg'}
    ]
}