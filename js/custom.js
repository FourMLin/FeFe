//load header/footer
document.onSelectStart=function(){return false;};
document.body.oncopy = function(){event.returnValue=false;}

$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = 'layout/' + $(this).data('include') + '.html'
	  $(this).load(file)
	})
});

$('#CRclose').on('click', function(){
    $('.copyright-alert').hide();
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
        {
            title: '當選彎彎香皂公司舉辦的曲線最美小姐',
            date: '1977年',
            category:'獲獎'
        },
        {
            title: '獲得你我他電視周刊主辦的第一屆金嗓獎「最受歡迎十大歌星」、「最佳專輯唱片主唱歌星」、「最佳才藝歌星」、「話題最多歌星」與「最佳台風歌星」第一名，並以歌曲〈流水年華〉獲得「最喜愛歌曲」第一名。首屆頒獎典禮由張小燕主持，也是鳳飛飛與主持人張小燕首度同台。',
            date: '1978年',
            category:'獲獎'
        },
        {
            title: '蟬聯民生報主辦的第1屆到第7屆金嗓獎最受歡迎女歌星榜首。',
            date: '1978年起',
            category:'獲獎'
        },
        {
            title: '蟬聯入圍第16屆金鐘獎最佳女歌星獎。',
            date: '1978年',
            category:'獲獎'
        },
        {
            title: '以親自演唱的電影演出處女作春寒主題曲，入圍第16屆金馬獎最佳原創電影歌曲，並首度於該頒獎典禮上獻唱。',
            date: '1979年',
            category:'提名'
        },
        {
            title: '綜合周刊舉辦金像獎最受歡迎歌星。',
            date: '1979年',
            category:'獲獎'
        },
        {
            title: '入圍第15屆金鐘獎首次頒發的最佳女歌星獎。',
            date: '1980年',
            category:'提名'
        },
        {
            title: '美國第一夫人羅沙琳‧卡特贈簽名照及祝福語。',
            date: '1980年',
            category:'獲獎'
        },
        {
            title: '新聞局銀盤獎嘉勉。',
            date: '1981年',
            category:'獲獎'
        },
        {
            title: '美國聖地牙哥大學國際知名藝人榮譽獎，美國雷根總統親函致賀。',
            date: '1981年',
            category:'獲獎'
        },
        {
            title: '中華文化基金會第一屆玉音獎，榮獲「華盛頓榮譽市民獎」和「馬里蘭州榮譽市民獎」。美國參議員馬賽爾斯贈送簽名及白宮圖片獎狀，同時華盛頓之市長拜瑞定該年之7月21日為「鳳飛飛日」。',
            date: '1981年',
            category:'獲獎'
        },
        {
            title: '蟬聯第三度入圍第17屆金鐘獎最佳女歌星演員獎並首度獲獎（該獎第3屆，並由最佳女歌星獎更名為女歌唱演員獎），頒獎人是該獎首屆得主鄧麗君，這是兩位巨星唯一一次同台。',
            date: '1982年',
            category:'獲獎'
        },
        {
            title: '當選模範勞工，獲文工會頒獎表揚。',
            date: '1982年',
            category:'獲獎'
        },
        {
            title: '連續第四年入圍第18屆金鐘獎最佳女歌星演員獎（該獎第4屆）並再次獲獎，為金鐘史上唯一蟬聯獲得此獎的女歌手。',
            date: '1983年',
            category:'獲獎'
        },
        {
            title: '世界優良廣告選拔賽銀盤獎。',
            date: '1983年',
            category:'獲獎'
        },
        {
            title: '電視節目《鳳情千千萬》獲社會建設獎。',
            date: '1983年',
            category:'獲獎'
        },
        {
            title: '連續第五年入圍第19屆金鐘獎最佳女歌星演員獎，成為金鐘史上蟬聯獲得此獎提名最多次的女歌手。',
            date: '1984年',
            category:'提名'
        },
        {
            title: '美國聖地牙哥大學【國際知名藝人榮譽獎】，美國雷根總統親函致賀。',
            date: '1984年',
            category:'獲獎'
        },
        {
            title: '何應欽將軍頒贈榮譽獎牌。',
            date: '1984年',
            category:'獲獎'
        },
        {
            title: '第六屆金嗓獎 鳳飛飛-夏的季節。',
            date: '1984年',
            category:'金嗓獎'
        },
        {
            title: '入圍第20屆金鐘獎最佳綜藝節目獎。',
            date: '1985年',
            category:'提名'
        },
        {
            title: '獲新加坡最受歡迎藝人榜首。',
            date: '1985年',
            category:'獲獎'
        },
        {
            title: '第七屆金嗓獎 鳳飛飛-彤彩(午夜的街頭)',
            date: '1985年',
            category:'金嗓獎'
        },
        {
            title: '第八屆金嗓獎 鳳飛飛-自我挑戰',
            date: '1986年',
            category:'金嗓獎'
        },
        {
            title: '第九屆金嗓獎 鳳飛飛-什麼樣的你',
            date: '1987年',
            category:'金嗓獎'
        },
        {
            title: '獲得第23屆金鐘獎最佳綜藝節目主持人、綜藝節目兩項提名。',
            date: '1988年',
            category:'提名'
        },
        {
            title: '該曲獲得第3屆金曲獎最佳年度歌曲、作曲、作詞三項提名。',
            date: '1991年',
            category:'提名'
        },
        {
            title: '全球華語音樂工作者之協作推廣機構「國際華語音樂聯盟」經三年籌備的「華語金曲奬」30年經典評選之《30年30人》第五位。',
            date: '2010年',
            category:'獲獎'
        },
        {
            title: '桃園縣政府將鳳飛飛生日8月20日訂為「鳳飛飛日」，以紀念這位令人懷念及尊敬的國寶歌手。',
            date: '2012年',
            category:'獲獎'
        },
        {
            title: '國家褒揚令，是中華民國百年來第三位受頒歌手，代表鳳飛飛對國家的極大貢獻。',
            date: '2012年',
            category:'獲獎'
        },
        {
            title: '金曲獎頒獎典禮 以播放鳳飛飛懷念片段及以3D投射立體效果演唱代表歌曲，紀念鳳飛飛。',
            date: '2012年',
            category:'獲獎'
        },
        {
            title: '第24屆金曲獎特別貢獻獎。',
            date: '2013年',
            category:'獲獎（追頒）'
        },
        {
            title: '第48屆金鐘獎特別貢獻獎。',
            date: '2013年',
            category:'獲獎（追頒）'
        },
        {
            title: '在新加坡電臺通過全球聽眾票選當選位10位巨星中的巨星女歌手第一名。',
            date: '2013年',
            category:'獲獎（追頒）'
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
        {
            title: '第一次見報，為【祝你幸福】唱片作宣傳。',
            year:'1972',
        },
        {
            title: '第一次作秀於嘉義豪華大歌廳。',
            year:'1972',
        },
        {
            title: '第一次上中視金曲獎節目，演唱郭芝苑大師作品《紅薔薇》。',
            year:'1973',
        },
        {
            title: '第一次赴新加坡演唱，行李還帶著金蘭醬油與S26奶粉，此行獲東南亞十大歌星頭銜。',
            year:'1974',
        },
        {
            title: '第一次參加台視《銀河璇宮》–加盟台視。',
            year:'1975',
        },
        {
            title: '第一次個人電視專輯《歌星之夜》。',
            year:'1975',
        },
        {
            title: '第一次歌友聯歡會。',
            year:'1975',
        },
        {
            title: '第一次主持大型現場播出綜藝節目《我愛週末》。',
            year:'1976',
        },
        {
            title: '第一個廣告片－『國際牌五極三鏡』，之後續拍台麗洗面皂、脫普洗髮粉、耐斯洗髮粉。',
            year:'1976',
        },
        {
            title: '最高!這一年，鳳飛飛創下唱片產量最高，膾炙人口的歌曲最密集，最豐富的一年。',
            year:'1976',
        },
        {
            title: '獲頒第一張金唱片，【我是一片雲】唱片銷售量突破四十五萬張。',
            year:'1977',
        },
        {
            title: '第一本專輯出刊－【鳳飛飛的感情世界】。',
            year:'1977',
        },
        {
            title: '第一張台語專輯【心酸酸/台灣歌謠1】。',
            year:'1977',
        },
        {
            title: '第一次赴金門勞軍。',
            year:'1978',
        },
        {
            title: '第一次到美國為中華青少棒隊加油，任啦啦隊隊長。',
            year:'1978',
        },
        {
            title: '第一部電影《春寒》。隨後，同年《秋蓮》上映，並隨片登台。',
            year:'1979',
        },
        {
            title: '這是鳳飛飛電影年，演出演唱一手包辦，可謂整合行銷的先驅人物。',
            year:'1979',
        },
        {
            title: '二月出版電影唱片【雁兒在林梢】。六月出版電影唱片【春寒】。十月出版電影唱片【又見秋蓮】。',
            year:'1979',
        },
        {
            title: '第一次全省巡迴演出，在台北狄斯角/台中聯美/台南元寶/高雄喜相逢登台表演。',
            year:'1980',
        },
        {
            title: '第一名歌迷!鳳飛飛于歸香港趙家，歌迷松山機場歡送，創下紀錄。',
            year:'1981',
        },
        {
            title: '紀錄!八月在家鄉大溪中正公園舉行千人歌迷聯歡會。',
            year:'1981',
        },
        {
            title: '頭銜!訪問台中潭子及高雄楠梓加工出口區，被譽為「勞工天使」。',
            year:'1981',
        },
        {
            title: '首度!全台語電視專輯【鳳懷鄉土情】，介紹台灣民風習俗。',
            year:'1982',
        },
        {
            title: '歌迷同歡!全台歌迷出席30歲「鳳飛飛慶生會」。',
            year:'1982',
        },
        {
            title: '第一!全台首個個人歌友會「鳳之友聯誼會」成立。',
            year:'1982',
        },
        {
            title: '首度!從鄧麗君手中接下金鐘獎最佳女歌星獎。',
            year:'1982',
        },
        {
            title: '空前!出席高達七萬人參與「星馬歌友聯誼會」。',
            year:'1984',
        },
        {
            title: '空前！掌聲響起（同名專輯）風靡全球華語圈。',
            year:'1986',
        },
        {
            title: '首見！在台北國父紀念館與孫越先生乘坐熱汽球響應拒菸運動。',
            year:'1987',
        },
        {
            title: '首創！香港製作巨型海報（153×102cm），空運來台，首創歌壇防水、不褪色、撕不破之創舉。',
            year:'1987',
        },
        {
            title: '首度！北京初見面！電影【春寒】隆重上映。',
            year:'1988',
        },
        {
            title: '喜獲麟兒。',
            year:'1989',
        },
        {
            title: '三月推出【浮世情懷】專輯。',
            year:'1990',
        },
        {
            title: '創新！【想要彈同調1】專輯。同步，由皇冠出版之小野著作《想要彈同調》發行。',
            year:'1992',
        },
        {
            title: '別開生面！返台參加第30屆金馬獎晚會頒獎人，同時扮演梁山伯與港星葉玉卿合唱樓台會。與王靜瑩演出 〈草橋結拜〉，與邱淑貞小姐演出 〈十八相送〉。',
            year:'1993',
        },
        {
            title: '為侯孝賢執導的《戲夢人生》演唱電影插曲－【寫佇雲頂的名】。',
            year:'1993',
        },
        {
            title: '首度！五月母親節攜子返台，應邀為職棒比賽開球，母子首度在國內公開亮相。',
            year:'1995',
        },
        {
            title: '五月五日鳳之友聯誼會成立「鳳飛飛全球資訊網」。',
            year:'1995',
        },
        {
            title: '睽違14年，再次錄製國語新歌【想要跟你飛】。',
            year:'2008',
        },
        {
            title: '2月27日「鳳飛飛流水年華演唱會」於台南成功大學體育館演出，現場觀眾高喊〝鳳飛飛我愛您"！10場的巡迴演出寫下「十全十美」紀錄！',
            year:'2010',
        },
        {
            title: '肺癌病逝，葬於桃園大溪的佛光山寶塔寺。',
            year:'2012',
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
            link:'https://www.beclass.com/rid=25465ad6194c73497ae6'
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


