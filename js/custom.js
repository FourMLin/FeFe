
//最新活動
var event = new Vue({
    el: '#newEvent',
    data: {
        newevent: [{
            title: '大河與小飛，鳳飛飛 紀念閩南語親子劇',
            date: '2021.10.23',
            category:'親子劇場',
            link:'',
            images:'img/blog/grid/grid-1.jpg'
        },
        ],

    }
});

//獎項紀錄
var awards = new Vue({
    el: '#Awards',
    data: {
        awardsContent: [{
            title: '參加台北中華電台歌唱比賽獲得冠軍',
            date: '1968年',
            category:'獲獎'
        },
        {
            title: '首次赴新加坡演唱，榮獲東南亞十大歌星之一',
            date: '1974年',
            category:'獲獎'
        },
        {
            title: '綜合周刊舉辦金像獎最受歡迎歌星榜首',
            date: '1976年',
            category:'獲獎'
        },
        ],

    }
});

//飛飛大事記
var bigRecord = new Vue({
    el: '#bigRecord',
    data: {
        bigRecordContent: [{
            title: '第一首歌《初見一日》出版，以林茜為名，收錄於歌林金曲獎唱片專輯。',
            year:'1971',
        },
        {
            title: '第一次參加華視閩南語連續劇「燕雙飛」演出，並演唱主題曲。',
            year:'1972',
        },
        {
            title: '第一首台語歌曲收錄於海山唱片，自此改名為鳳飛飛。',
            year:'1972',
        },
        ],

    }
});

//活動記事
var eventRecord = new Vue({
    el: '#eventRecord',
    data: {
        eventRecordContent: [{
            title: '心肝寶貝的故事盒',
            date: '2021-11-19',
            category:'大嵙崁文教基金會',
            link:'https://www.takoham.org.tw/news/4/96'
        },
        {
            title: '鳳友徵集令．鳳飛飛故事館',
            date: '2021-09-09',
            category:'大嵙崁文教基金會',
            link:'https://www.takoham.org.tw/news/4/53'
        },
        {
            title: '《大河與小飛》捐款贈繪本',
            date: '2021-08-25',
            category:'大嵙崁文教基金會',
            link:'https://www.takoham.org.tw/news/4/8'
        },
        ],

    }
});