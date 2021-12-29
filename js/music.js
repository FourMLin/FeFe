//音樂作品
var musics = new Vue({
    el: '#Musics',
    data: {
        musicContent: [
            {
                title: '歌林金曲唱片',
                date: '1971年9月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/初見一日.jpg',
                link: ''
            },
            {
                title: '金獅村、雙燕飛',
                date: '1971年11月',
                category: 'music-1',
                images: 'img/music/01海山唱片/金獅村、雙燕飛.jpg',
                link: ''
            },
            {
                title: '祝你幸福',
                date: '1972年3月',
                category: 'music-1',
                images: 'img/music/01海山唱片/祝你幸福.jpg',
                link: 'https://www.youtube.com/watch?v=AIcWy2GMhtA'
            },
            {
                title: '五月的花',
                date: '1972年6月',
                category: 'music-1',
                images: 'img/music/01海山唱片/五月的花.jpg',
                link: 'https://www.youtube.com/watch?v=kPHUeTyoX2c'
            },
            {
                title: '恩情滴滴淚',
                date: '1972年7月',
                category: 'music-1',
                images: 'img/music/01海山唱片/恩情滴滴淚.jpg',
                link: ''
            },
            {
                title: '我沒有錯',
                date: '1972年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/我沒有錯.jpg',
                link: 'https://www.youtube.com/watch?v=9HH4p07W7Pg'
            },
            {
                title: '東南西北風',
                date: '1972年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/東南西北風.jpg',
                link: ''
            },
            {
                title: '串串風鈴響',
                date: '1973年3月',
                category: 'music-1',
                images: 'img/music/01海山唱片/串串風鈴響.jpg',
                link: 'https://www.youtube.com/watch?v=1k-5IvQdY6M'
            },
            {
                title: '愛的禮物',
                date: '1973年6月',
                category: 'music-1',
                images: 'img/music/01海山唱片/愛的禮物.jpg',
                link: 'https://www.youtube.com/watch?v=jyz96Z5pOaU'
            },
            {
                title: '你是否忘記了',
                date: '1973年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/你是否忘記了.jpg',
                link: 'https://www.youtube.com/watch?v=QwS7qq1rh1g'
            },
            {
                title: '花謝花飛飛滿天',
                date: '1973年9月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/花謝花飛飛滿天.jpg',
                link: 'https://www.youtube.com/watch?v=U7rS5Vm2o64'
            },
            {
                title: '雷風雨',
                date: '1973年12月',
                category: 'music-1',
                images: 'img/music/01海山唱片/雷風雨.jpg',
                link: 'https://www.youtube.com/watch?v=XVLQ6p-dzQ4'
            },
            {
                title: '我不能沒有信心 愛之歌',
                date: '1974年3月',
                category: 'music-1',
                images: 'img/music/01海山唱片/我不能沒有信心 愛之歌.jpg',
                link: 'https://www.youtube.com/watch?v=RTz3Zs9z0Jw'
            },
            {
                title: '早晨再見',
                date: '1974年4月',
                category: 'music-1',
                images: 'img/music/01海山唱片/早晨再見.jpg',
                link: ''
            },
            {
                title: '愛的奇蹟',
                date: '1974年6月',
                category: 'music-1',
                images: 'img/music/01海山唱片/愛的奇蹟.jpg',
                link: ''
            },
            {
                title: '半山飄雨半山晴',
                date: '1974年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/半山飄雨半山晴.jpg',
                link: 'https://www.youtube.com/watch?v=VvpP_c24x5c'
            },
            {
                title: '雪花片片',
                date: '1974年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/雪花片片.jpg',
                link: 'https://www.youtube.com/watch?v=JqmQM-YcAo4'
            },
            {
                title: '有真情有活力',
                date: '1974年11月',
                category: 'music-1',
                images: 'img/music/01海山唱片/有真情有活力.jpg',
                link: 'https://www.youtube.com/watch?v=3K5EirBkJsk'
            },
            {
                title: '銀浪',
                date: '1974年11月',
                category: 'music-1',
                images: 'img/music/01海山唱片/銀浪.jpg',
                link: 'https://www.youtube.com/watch?v=erwb-mnf6pg'
            },
            {
                title: '雲飛何處',
                date: '1974年12月',
                category: 'music-1',
                images: 'img/music/01海山唱片/雲飛何處.jpg',
                link: ''
            },
            {
                title: '情場就是戰場',
                date: '1975年3月',
                category: 'music-1',
                images: 'img/music/01海山唱片/情場就是戰場.jpg',
                link: 'https://www.youtube.com/watch?v=TYNmSkgf6ro'
            },
            {
                title: '金鑲玉、三百磅',
                date: '1975年5月',
                category: 'music-1',
                images: 'img/music/01海山唱片/金鑲玉、三百磅.jpg',
                link: ''
            },
            {
                title: '鄉下畢業生',
                date: '1975年7月',
                category: 'music-1',
                images: 'img/music/01海山唱片/鄉下畢業生.jpg',
                link: ''
            },
            {
                title: '近水樓台',
                date: '1975年8月',
                category: 'music-1',
                images: 'img/music/01海山唱片/近水樓台.jpg',
                link: ''
            },
            {
                title: '當我認識你',
                date: '1975年8月',
                category: 'music-1',
                images: 'img/music/01海山唱片/當我認識你.jpg',
                link: ''
            },
            {
                title: '秋纏',
                date: '1975年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/秋纏.jpg',
                link: 'https://www.youtube.com/watch?v=ZF8s6kLZyhY'
            },
            {
                title: '呼喚、流雲',
                date: '1975年12月',
                category: 'music-1',
                images: 'img/music/01海山唱片/呼喚、流雲.jpg',
                link: ''
            },
            {
                title: '意難忘',
                date: '1976年1月',
                category: 'music-1',
                images: 'img/music/01海山唱片/意難忘.jpg',
                link: ''
            },
            {
                title: '不一樣的愛',
                date: '1976年3月',
                category: 'music-1',
                images: 'img/music/01海山唱片/不一樣的愛.jpg',
                link: ''
            },
            {
                title: '楓葉情',
                date: '1976年3月',
                category: 'music-1',
                images: 'img/music/01海山唱片/楓葉情.jpg',
                link: 'https://www.youtube.com/watch?v=Qe4k-oDuJ84'
            },
            {
                title: '溫暖在秋天',
                date: '1976年6月',
                category: 'music-1',
                images: 'img/music/01海山唱片/溫暖在秋天.jpg',
                link: ''
            },
            {
                title: '春風吻上我的臉',
                date: '1976年6月',
                category: 'music-1',
                images: 'img/music/01海山唱片/春風吻上我的臉.jpg',
                link: ''
            },
            {
                title: '星語',
                date: '1976年10月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/星語.jpg',
                link: 'https://www.youtube.com/watch?v=lVBfr2zw8zU'
            },
            {
                title: '山鷹',
                date: '1976年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/山鷹.jpg',
                link: ''
            },
            {
                title: '明天廿歲',
                date: '1976年9月',
                category: 'music-1',
                images: 'img/music/01海山唱片/明天廿歲.jpg',
                link: ''
            },
            {
                title: '綠島小夜曲',
                date: '1976年9月',
                category: 'music-3',
                images: 'img/music/03東尼唱片/綠島小夜曲.jpg',
                link: ''
            },
            {
                title: '夏日假期玫瑰花',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/夏日假期玫瑰花.jpg',
                link: 'https://www.youtube.com/watch?v=Gd1Fk25ziqKdY'
            },
            {
                title: '祝您幸福',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片1.jpg',
                link: ''
            },
            {
                title: '碧城故事',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片2.jpg',
                link: 'https://www.youtube.com/watch?v=FIpZy2fUwN0'
            },
            {
                title: '巧合',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/雪花片片.jpg',
                link: 'https://www.youtube.com/watch?v=D13SZmAkRug'
            },
            {
                title: '又是秋天',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片4.jpg',
                link: ''
            },
            {
                title: '楓葉情',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片5.jpg',
                link: ''
            },
            {
                title: '落葉飄飄',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片6.jpg',
                link: ''
            },
            {
                title: '花謝花飛飛滿天',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片7.jpg',
                link: ''
            },
            {
                title: '意難忘',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片8.jpg',
                link: ''
            },
            {
                title: '春風吻上我的臉',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/海山金唱片9.jpg',
                link: ''
            },
            {
                title: '落葉飄飄',
                date: '1976年10月',
                category: 'music-1',
                images: 'img/music/01海山唱片/落葉飄飄.jpg',
                link: 'https://www.youtube.com/watch?v=I-lOLJ7AHBM'
            },
            {
                title: '永遠懷念的金曲',
                date: '1976年11月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/懷念金曲.jpg',
                link: 'https://www.youtube.com/watch?v=dFbooXbpTuk'
            },
            {
                title: '台北66',
                date: '1977年1月',
                category: 'music-1',
                images: 'img/music/01海山唱片/台北66.jpg',
                link: ''
            },
            {
                title: '我是一片雲',
                date: '1977年1月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/我是一片雲.jpg',
                link: 'https://www.youtube.com/watch?v=k50Mwe_81vM'
            },
            {
                title: '台灣民謠專集',
                date: '1977年3月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/台灣民謠1.jpg',
                link: 'https://www.youtube.com/watch?v=pwBBExZlbNc'
            },
            {
                title: '奔向彩虹',
                date: '1977年6月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/奔向彩虹.jpg',
                link: 'https://www.youtube.com/watch?v=IUQ1hn-Zfd8'
            },
            {
                title: '台灣民謠歌謠專集 第2輯',
                date: '1977年12月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/台灣民謠2.jpg',
                link: 'https://www.youtube.com/watch?v=DN-7olwH_Jg'
            },
            {
                title: '月朦朧鳥朦朧',
                date: '1978年1月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/月朦朧鳥朦朧.jpg',
                link: 'https://www.youtube.com/watch?v=IUa6sgSqOvI'
            },
            {
                title: '花有情花有愛',
                date: '1978年4月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/花有情花有愛.jpg',
                link: 'https://www.youtube.com/watch?v=m8lXDy_bfuc'
            },
            {
                title: '晨霧',
                date: '1978年8月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/晨霧.jpg',
                link: 'https://www.youtube.com/watch?v=T-fV6OfNVos'
            },
            {
                title: '懷念國語歌曲 二',
                date: '1978年9月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/懷念國語二.jpg',
                link: 'https://www.youtube.com/watch?v=6u31YVvqKAU'
            },
            {
                title: '一顆紅豆',
                date: '1978年11月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/一顆紅豆.jpg',
                link: 'https://www.youtube.com/watch?v=khXyYQCLCvw'
            },
            {
                title: '夜來香',
                date: '1978年12月',
                category: 'music-3',
                images: 'img/music/03東尼唱片/夜來香.jpg',
                link: 'https://www.youtube.com/watch?v=w_PxSU2kuR0'
            },
            {
                title: '玫瑰玫瑰我愛你',
                date: '1978年12月',
                category: 'music-3',
                images: 'img/music/03東尼唱片/玫瑰玫瑰我愛你.jpg',
                link: 'https://www.youtube.com/watch?v=RLVUQrEu3-Q'
            },
            {
                title: '蘋果花',
                date: '1978年12月',
                category: 'music-3',
                images: 'img/music/03東尼唱片/蘋果花.jpg',
                link: 'https://www.youtube.com/watch?v=lAbROU79tW4'
            },
            {
                title: '雁兒在林梢',
                date: '1979年2月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/雁兒在林梢.jpg',
                link: 'https://www.youtube.com/watch?v=BpwmWZWWhT8'
            },
            {
                title: '一片深情',
                date: '1979年6月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/一片深情.jpg',
                link: 'https://www.youtube.com/watch?v=xbvHPlvHTvk'
            },
            
            {
                title: '又見秋蓮',
                date: '1979年10月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/又見秋蓮.jpg',
                link: 'https://www.youtube.com/watch?v=wQWpQj6C2xo'
            },
            {
                title: '台灣民謠歌謠專集 第三集',
                date: '1979年12月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/台灣民謠3.jpg',
                link: 'https://www.youtube.com/watch?v=fzp6auGKhNU'
            },
            {
                title: '愛你在心口難開',
                date: '1981年2月',
                category: 'music-3',
                images: 'img/music/03東尼唱片/愛你在心口難開.jpg',
                link: 'https://www.youtube.com/watch?v=IrUf3hbd2CM'
            },
            {
                title: '金盞花',
                date: '1980年3月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/金盞花.jpg',
                link: 'https://www.youtube.com/watch?v=jSsCQI4LWaE'
            },
            {
                title: '鳳飛飛精粹',
                date: '1981年5月',
                category: 'music-3',
                images: 'img/music/03東尼唱片/鳳飛飛精粹.jpg',
                link: 'https://www.youtube.com/watch?v=EuBh2zeuzPk'
            },
            
            {
                title: '就是溜溜的她',
                date: '1980年11月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/就是溜溜的她.jpg',
                link: 'https://www.youtube.com/watch?v=KywpuzcGkUE'
            },
            {
                title: '好好愛我',
                date: '1981年10月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/好好愛我.jpg',
                link: 'https://www.youtube.com/watch?v=Kw-riJKo0OU'
            },
            {
                title: '鳳情千千萬',
                date: '1982年1月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/鳳情千千萬.jpg',
                link: 'https://www.youtube.com/watch?v=fsh21phX4Ik'
            },
            {
                title: '我是中國人',
                date: '1982年7月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/我是中國人.jpg',
                link: 'https://www.youtube.com/watch?v=_I5sVExp0ms'
            },
            {
                title: '鳳飛飛台灣民謠歌謠專輯',
                date: '1982年8月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/台灣民謠4.jpg',
                link: 'https://www.youtube.com/watch?v=qWuSfxI-3JU'
            },
            {
                title: '你來了',
                date: '1982年12月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/你來了.jpg',
                link: 'https://www.youtube.com/watch?v=qQJa5I4IEhQ'
            },
            {
                title: '出外的人',
                date: '1983年4月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/出外的人.jpg',
                link: 'https://www.youtube.com/watch?v=VxKNB7RTLZA'
            },
            {
                title: '相思爬上心底',
                date: '1983年8月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/相思爬上心底.jpg',
                link: 'https://www.youtube.com/watch?v=fz8t9m9QdiM'
            },
            {
                title: '不知怨',
                date: '1983年12月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/不知怨.jpg',
                link: 'https://www.youtube.com/watch?v=r3L3THcccJk'
            },
            

            {
                title: '仲夏',
                date: '1984年7月',
                category: 'music-4',
                images: 'img/music/04北聯唱片/仲夏.jpg',
                link: 'https://www.youtube.com/watch?v=FLLW7v0pPKk'
            },
            {
                title: '彤彩',
                date: '1985年4月',
                category: 'music-4',
                images: 'img/music/04北聯唱片/彤彩.jpg',
                link: 'https://www.youtube.com/watch?v=WVyOkULA7MA'
            },
            {
                title: '自我挑戰',
                date: '1985年12月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/自我挑戰.jpg',
                link: 'https://www.youtube.com/watch?v=q9ZLKGM5vGw'
            },
            
            {
                title: '掌聲響起',
                date: '1986年9月',
                category: 'music-2',
                images: 'img/music/02歌林唱片/掌聲響起.jpg',
                link: 'https://www.youtube.com/watch?v=-G_4X3SvKtE'
            },
            
            {
                title: '什麼樣的你',
                date: '1987年6月',
                category: 'music-5',
                images: 'img/music/05藍與白唱片/什麼樣的你.jpg',
                link: 'https://www.youtube.com/watch?v=v077zIuITWo'
            },
            {
                title: '鳳飛飛1968~1988珍藏版(上卷)',
                date: '1988年2月',
                category: 'music-5',
                images: 'img/music/05藍與白唱片/廿年珍藏版-上卷.jpg',
                link: 'https://www.youtube.com/watch?v=hvLmpVwy-OE'
            },
            {
                title: '鳳飛飛1968~1988珍藏版(下卷)',
                date: '1988年2月',
                category: 'music-5',
                images: 'img/music/05藍與白唱片/廿年珍藏版-下卷.jpg',
                link: 'https://www.youtube.com/watch?v=UbEdNqJitkY'
            },

            {
                title: '浮世情懷',
                date: '1991年2月',
                category: 'music-6',
                images: 'img/music/06真善美唱片/浮世情懷.jpg',
                link: 'https://www.youtube.com/watch?v=NK0fHIE9IAQ'
            },
            {
                title: '今天的女人和那昨天的女孩',
                date: '1991年11月',
                category: 'music-6',
                images: 'img/music/06真善美唱片/秋鸞.jpg',
                link: 'https://www.youtube.com/watch?v=dZZr8OnH0ws'
            },

            {
                title: '想要彈同調',
                date: '1992年8月',
                category: 'music-7',
                images: 'img/music/07EMI唱片/想要彈同調1.jpg',
                link: 'https://www.youtube.com/watch?v=cWVUlzRf64w'
            },
            {
                title: '想要彈同調-思念的歌',
                date: '1992年8月',
                category: 'music-7',
                images: 'img/music/07EMI唱片/想要彈同調2-思念的歌.jpg',
                link: 'https://www.youtube.com/watch?v=ZGXsSy5LBDM'
            },
            {
                title: '陪傷心人說往事',
                date: '1994年8月',
                category: 'music-7',
                images: 'img/music/07EMI唱片/驛站.jpg',
                link: 'https://www.youtube.com/watch?v=Dw-uVh2bgGs'
            },
            {
                title: '想要彈同調-精選輯',
                date: '1997年6月',
                category: 'music-7',
                images: 'img/music/07EMI唱片/想要談同調-精選輯.jpg',
                link: 'https://www.youtube.com/watch?v=cWVUlzRf64w'
            },
            

            {
                title: '鳳飛飛35週年演唱會',
                date: '2004年1月',
                category: 'music-8',
                images: 'img/music/08環球唱片/35週年演唱會.jpg',
                link: ''
            },
            {
                title: '《想要跟你飛》',
                date: '2009年12月',
                category: 'music-8',
                images: 'img/music/08環球唱片/想要跟你飛-新歌+精選.jpg',
                link: 'https://www.youtube.com/watch?v=jna53qxXRw4'
            },



        ],

    }
});
