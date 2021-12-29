//最新活動
var event = new Vue({
    el: '#newEvent',
    data: {
        newevent: [{
            title: '相思悠悠彩虹夢系列紀念活動，開跑囉！',
            date: '2021.12.15',
            category:'主題親子繪本',
            link:'https://www.takoham.org.tw/news/4/107',
            images:'img/newEvent/20210721pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
		
		{
            title: '大嵙崁志工隊12/15錄取名單公告',
            date: '2021.12.15',
            category:'大嵙崁志工招募',
            link:'https://www.takoham.org.tw/news/3/108',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
		
		{
            title: '大嵙崁志工招募-第三批初審合格名單及面試通知',
            date: '2021.12.10',
            category:'大嵙崁志工招募',
            link:'https://www.takoham.org.tw/news/3/106',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
		
		{
            title: '大嵙崁志工隊12/9錄取名單公告',
            date: '2021.12.09',
            category:'大嵙崁志工招募',
            link:'https://www.takoham.org.tw/news/3/105',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
		
		{
            title: '12月11日場次正取/候補名單公告​-心肝寶貝的故事盒《大河與小飛》繪本說故事巡迴列車',
            date: '2021.12.08',
            category:'大嵙崁志工招募',
            link:'https://www.takoham.org.tw/news/3/104',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
		
		{
            title: '12月5日場次正取/候補名單公告​-心肝寶貝的故事盒《大河與小飛》繪本說故事巡迴列車',
            date: '2021.12.02',
            category:'活動錄取名單',
            link:'https://www.takoham.org.tw/news/3/103',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
		
		{
            title: '12月4日場次正取/候補名單公告​-心肝寶貝的故事盒《大河與小飛》繪本說故事巡迴列車',
            date: '2021.12.02',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/3/102',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '11月28日場次正取/候補名單公告​-心肝寶貝的故事盒《大河與小飛》繪本說故事巡迴列車',
            date: '2021.11.26',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/3/101',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '11月27日場次正取/候補名單公告​-心肝寶貝的故事盒《大河與小飛》繪本說故事巡迴列車',
            date: '2021.11.26',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/3/100',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '大嵙崁志工招募-第二批初審合格名單及面試通知',
            date: '2021.11.23',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/3/97',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '大嵙崁志工招募-第一批初審合格名單及面試通知',
            date: '2021.11.05',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/3/93',
            images:'img/newEvent/newEvent-bg.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '【新聞稿】鳳飛飛故事館開館暨鳳飛飛遠行十週年 紀念系列活動記者會',
            date: '2021.12.08',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/6/98',
            images:'img/newEvent/20210721pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '心肝寶貝的故事盒 《大河與小飛》繪本說故事巡迴列車',
            date: '2021.11.19',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/4/107',
            images:'img/newEvent/newEvent-20211119pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '【新聞稿】傳習鳳飛飛 《大河與小飛》紀念閩南語親子劇首演 萬聖節前夕扮鳳飛飛 變裝來看戲',
            date: '2021.10.30',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/6/90',
            images:'img/newEvent/【新聞稿】傳習鳳飛飛 《大河與小飛》紀念閩南語親子劇首演 萬聖節前夕扮鳳飛飛 變裝來看戲.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》親子劇場－鳳飛飛紀念閩南語親子劇',
            date: '2021.10.08',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/96',
            images:'img/newEvent/《大河與小飛》親子劇場－鳳飛飛紀念閩南語親子劇.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》繪本說故事活動-八德場 直播預告',
            date: '2021.09.24',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/83',
            images:'img/newEvent/《大河與小飛》繪本說故事活動-八德場 直播預告.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '鳳友徵集令．鳳飛飛故事館',
            date: '2021.09.09',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/4/53',
            images:'img/newEvent/newEvent-20210909pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》繪本說故事活動錄取名單',
            date: '2021.09.08',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/3/52',
            images:'img/newEvent/《大河與小飛》繪本說故事活動錄取名單.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》繪本說故事活動，開放報名！',
            date: '2021.09.02',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/11',
            images:'img/newEvent/《大河與小飛》繪本說故事活動，開放報名！.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》捐款贈繪本',
            date: '2021.08.25',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/4/8',
            images:'img/newEvent/《大河與小飛》捐款贈繪本.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》新書發表直播預告',
            date: '2021.08.11',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/15',
            images:'img/newEvent/《大河與小飛》新書發表直播預告.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '《大河與小飛》留言抽繪本活動開跑囉！',
            date: '2021.08.01',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/17',
            images:'img/newEvent/《大河與小飛》留言抽繪本活動開跑囉！.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '手作帽藝 懷念飛飛風采​，現正報名中！',
            date: '2021.08.09',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/16',
            images:'img/newEvent/20210809pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '我唱 我說 我記憶中的鳳飛飛 網路座談會',
            date: '2021.07.27',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/19',
            images:'img/newEvent/20210727pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        {
            title: '相思悠悠彩虹夢 2021防疫連線．想念飛飛',
            date: '2021.07.21',
            category:'志工隊招募',
            link:'https://www.takoham.org.tw/news/1/20',
            images:'img/newEvent/20210721pic0.jpg',
            link2:'https://www.takoham.org.tw/'
        },
        
        ],

    }
});