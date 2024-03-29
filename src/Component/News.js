import React, {Component} from 'react'
import NewsItem from "./NewsItem";
import Marquee from "react-fast-marquee";
import Spineer from "./Spineer";

export class News extends Component {
    articles = [{
        "source": {
            "id": null, "name": "Hindustan Times"
        },
        "author": "Available Tiwari",
        "title": "'Worship Babar, Afzal Guru': BJP on Bihar minister's barb on Ram Mandir - Hindustan Times",
        "description": "Union minister Nityanand Rai, reacting to Bihar education minister Chandra Shekhar's remark, said the country needs people like Captain Abdul Hamid. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/worship-babar-afzal-guru-bjp-on-bihar-ministers-barb-on-ram-mandir-101704714946632.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/08/1600x900/PTI12-19-2023-000197A-0_1704715006713_1704715027176.jpg",
        "publishedAt": "2024-01-08T12:05:47Z",
        "content": "New Delhi: The BJP on Monday reacted to a Bihar minister's jab at the party over January 22's Ram Temple consecration ceremony, saying the Opposition must hang pictures of Babar and Afzal Guru and wo… [+1783 chars]"
    }, {
        "source": {
            "id": null, "name": "Moneycontrol"
        },
        "author": "Namita S Kalla",
        "title": "Fatigue, muscle cramps are symptoms of magnesium deficiency, add these superfoods in your daily diet - Moneycontrol",
        "description": "Symptoms of magnesium deficiency: Stress, copious amounts of caffeine and alcohol, and a diet low in whole grains and green leafy vegetables, silently deplete your magnesium reserves, and invite a string of health issues. Include these 8 foods in your diet to…",
        "url": "https://www.moneycontrol.com/news/health-and-fitness/fatigue-muscle-cramps-are-symptoms-of-magnesium-deficiency-add-these-superfoods-in-your-daily-diet-12016961.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/12/Benefits-of-tofu-in-diet-770x433.jpg",
        "publishedAt": "2024-01-08T11:57:30Z",
        "content": "Fatigue at the end of a long day of work is normal. But if this feeling of tiredness is accompanied with your muscles twitching sporadically and a lingering sense of discomfort, it is a cause for con… [+2489 chars]"
    }, {
        "source": {
            "id": null, "name": "Hindustan Times"
        },
        "author": "Neha Yadav",
        "title": "NASA, ISRO, SpaceX: Top 6 space agencies in the world - Hindustan Times",
        "description": "NASA, ISRO, SpaceX: Top 6 space agencies in the world",
        "url": "https://www.hindustantimes.com/web-stories/in-focus/nasa-isro-spacex-top-6-space-agencies-in-the-world-101704708174898.html",
        "urlToImage": null,
        "publishedAt": "2024-01-08T11:40:38Z",
        "content": "By Neha YadavPublished Jan 08, 2024\r\nHindustan TimesIn FocusPhoto Credits: Unsplash"
    }, {
        "source": {
            "id": null, "name": "Variety"
        },
        "author": "Naman Ramachandran",
        "title": "‘RRR’ Star NTR Jr.’s ‘Devara’ Unveils First Footage – Global Bulletin - Variety",
        "description": "The first footage from 'Devara,' headlined by 'RRR' star NTR Jr, has been unveiled.",
        "url": "https://variety.com/2024/film/asia/rrr-ntr-jr-devara-first-footage-1235864532/",
        "urlToImage": "https://variety.com/wp-content/uploads/2024/01/Devara2.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2024-01-08T11:06:00Z",
        "content": "The first footage from “Devara,” headlined by “RRR” star NTR Jr., has been unveiled. “Devara” reunites NTR Jr. with his “Janatha Garage” director Koratala Siva, whose last film was “Acharya,” starrin… [+4185 chars]"
    }, {
        "source": {
            "id": null, "name": "NDTV News"
        },
        "author": null,
        "title": "Virat Kohli, Rohit Sharma Return To T20Is: 3 Reason Why BCCI Had To Pick Them - NDTV Sports",
        "description": "Virat Kohli and Rohit Sharma marked their T20I return after a hiatus of more than a year. But, what made the BCCI hand them call-ups for the Afghanistan series?",
        "url": "https://sports.ndtv.com/india-vs-afghanistan-t20i-2024/what-made-bcci-select-virat-kohli-and-rohit-sharma-for-afghanistan-t20is-4820740",
        "urlToImage": "https://c.ndtvimg.com/2024-01/l2k06j9g_virat-kohli-and-rohit-sharma_625x300_08_January_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2024-01-08T10:59:00Z",
        "content": "The Indian cricket spectrum jumped with joy as Virat Kohli and Rohit Sharma marked their return to the national team in the T20I format as the Board of Control for Cricket in India (BCCI) announced s… [+2831 chars]"
    }, {
        "source": {
            "id": null, "name": "Marketscreener.com"
        },
        "author": null,
        "title": "Samsung Electronics Launches 2024 Neo QLED, MICRO LED, OLED and Lifestyle Displays To Spark the AI Screen Era and New Ways of Life - Marketscreener.com",
        "description": "Neo QLED 8K takes picture and sound quality to a whole new level with new NQ8 AI Gen3 Processor.\nMore capable processors in Neo QLED 4K, brighter OLEDs and expertly crafted MICRO LEDs all boost the...",
        "url": "https://www.marketscreener.com/quote/stock/SAMSUNG-ELECTRONICS-CO-LT-6494906/news/Samsung-Electronics-Launches-2024-Neo-QLED-MICRO-LED-OLED-and-Lifestyle-Displays-To-Spark-the-AI-S-45690713/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        "publishedAt": "2024-01-08T10:58:13Z",
        "content": "Neo QLED 8K takes picture and sound quality to a whole new level with new NQ8 AI Gen3 Processor.\r\nMore capable processors in Neo QLED 4K, brighter OLEDs and expertly crafted MICRO LEDs all boost the … [+15857 chars]"
    }, {
        "source": {
            "id": "the-times-of-india", "name": "The Times of India"
        },
        "author": "TOI Business Desk",
        "title": "Stock market today: BSE Sensex plunges 670 points, Nifty50 below 21,600 - top reasons why bears are playi - IndiaTimes",
        "description": "India Business News: Stock market today: Indian equity markets faced a decline on Monday, with the benchmark Sensex dropping more than 650 points and falling below 71,400",
        "url": "https://timesofindia.indiatimes.com/business/india-business/stock-market-today-bse-sensex-nifty50-top-reasons-for-dalal-street-plunging-on-january-8-2024/articleshow/106637026.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-106637268,width-1070,height-580,imgsize-104782,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-01-08T10:46:16Z",
        "content": null
    }, {
        "source": {
            "id": null, "name": "YouTube"
        },
        "author": null,
        "title": "Moon-bound Vulcan rocket successfully launches into space - Guardian News",
        "description": "The Peregrine 1 lander carrying Nasa scientific equipment is on its way to the moon after a successful launch of the Vulcan Centaur rocket at Cape Canaveral....",
        "url": "https://www.youtube.com/watch?v=t7sX2R73E68",
        "urlToImage": "https://i.ytimg.com/vi/t7sX2R73E68/maxresdefault.jpg",
        "publishedAt": "2024-01-08T10:41:35Z",
        "content": null
    }, {
        "source": {
            "id": "al-jazeera-english", "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Sheikh Hasina: Once Bangladesh’s democracy icon, now its ‘authoritarian’ PM - Al Jazeera English",
        "description": "The 76-year-old wins fourth straight term in controversial election boycotted by opposition and marked by low turnout.",
        "url": "https://www.aljazeera.com/news/2024/1/8/sheikh-hasina-once-bangladeshs-democracy-icon-now-its-authoritarian-pm",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-07T044541Z_304586212_RC2SC5A2POXM_RTRMADP_3_BANGLADESH-ELECTION-1704708865.jpg?resize=1920%2C1440",
        "publishedAt": "2024-01-08T10:23:18Z",
        "content": "Bangladeshs Prime Minister Sheikh Hasina once joined her rivals in a fight to restore democracy but her long reign in power has been marked by arrests of opposition leaders, crackdowns on free speech… [+6815 chars]"
    }, {
        "source": {
            "id": "bloomberg", "name": "Bloomberg"
        },
        "author": "Anto Antony, Preeti Singh",
        "title": "Sony Is Planning to Call Off $10 Billion Merger With India's Zee - Bloomberg",
        "description": "Sony Group Corp. is planning to call off the merger pact of its India unit with Zee Entertainment Enterprises Ltd., said people familiar with the matter, capping two years of drama and delay in creating a $10 billion media giant.",
        "url": "https://www.bloomberg.com/news/articles/2024-01-08/sony-is-planning-to-call-off-10-billion-merger-with-india-s-zee",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHwG3f_jimCw/v0/1200x805.jpg",
        "publishedAt": "2024-01-08T10:17:00Z",
        "content": "Sony Group Corp. is planning to call off the merger pact of its India unit with Zee Entertainment Enterprises Ltd., said people familiar with the matter, capping two years of dramaBloomberg Terminal\r… [+459 chars]"
    }, {
        "source": {
            "id": "the-hindu", "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "‘Appalling language’: Former Maldives President Mohamed Nasheed condemns ‘derogatory remarks’ by Mariyam Shiuna - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/news/international/appalling-language-former-maldives-president-mohamed-nasheed-condemns-derogatory-remarks-by-mariyam-shiuna/article67715730.ece",
        "urlToImage": null,
        "publishedAt": "2024-01-08T10:13:00Z",
        "content": null
    }, {
        "source": {
            "id": null, "name": "NDTV News"
        },
        "author": null,
        "title": "\"No Zero-Sum Game\": China On Ties With Maldives Amid India Row - NDTV",
        "description": "On a day Maldives' President Mohamed Muizzu landed in Beijing to sign bilateral agreements, China's state media in an editorial referred to India's diplomatic row with the Maldives, and called for an \"open-minded\" approach to looking at South Asia.",
        "url": "https://www.ndtv.com/india-news/no-zero-sum-game-china-on-ties-with-maldives-amid-india-row-4822417",
        "urlToImage": "https://c.ndtvimg.com/2024-01/9e6c88so_mohamed-muizzu_625x300_08_January_24.jpeg?ver-20231203.06",
        "publishedAt": "2024-01-08T09:50:38Z",
        "content": "Maldives President Mohamed Muizzu and wife Sajidha Mohamed in China today\r\nNew Delhi: On a day Maldives' President Mohamed Muizzu landed in Beijing to sign bilateral agreements, China's state media i… [+2776 chars]"
    }, {
        "source": {
            "id": null, "name": "Livemint"
        },
        "author": "Dhanya Nagasundaram",
        "title": "Jyoti CNC Automation IPO opens tomorrow: GMP, issue details, 10 key things to know | Mint - Mint",
        "description": "Jyoti CNC Automation IPO, the first mainboard IPO of 2024, will open for subscription tomorrow. The company is a CNC machine manufacturer and supplier headquartered in India.",
        "url": "https://www.livemint.com/market/ipo/jyoti-cnc-automation-ipo-opens-tomorrow-gmp-issue-details-10-key-things-to-know-11704705775708.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/08/1600x900/jyoti_cnc_1704304158657_1704707175094.png",
        "publishedAt": "2024-01-08T09:50:06Z",
        "content": "The first mainboard initial public offering (IPO) of 2024, Jyoti CNC Automation IPO, will open for subscription tomorrow, resuming the IPO season. Jyoti CNC Automation Limited is a CNC machine manufa… [+5834 chars]"
    }, {
        "source": {
            "id": "the-times-of-india", "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Security beefed up after intruders try to enter Salman Khan's farmhouse - Exclusive - IndiaTimes",
        "description": "Security at Salman Khan's farmhouse has been beefed up after two intruders jumped over the premises. The intent of the two persons is still unclear, b",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/security-beefed-up-after-intruders-try-to-enter-salman-khans-farmhouse-exclusive/articleshow/106635254.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-106635226,width-1070,height-580,imgsize-49742,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-01-08T09:47:11Z",
        "content": "Ira Khan-Nupur Shikhare's pre-wedding party: Aamir Khan, ex-Wife Kiran Rao, Azad and Junaid clicked at Galaxy"
    }, {
        "source": {
            "id": "the-times-of-india", "name": "The Times of India"
        },
        "author": "TNN",
        "title": "BJP's Surender Pal Singh TT, minister in Bhajan Lal Sharma govt, loses Rajasthan's Karanpur bypoll to Con - Times of India",
        "description": "BJP's Surender Pal Singh TT, who was inducted as a minister, lost the election to Sriganganagar’s Karanpur assembly seat to Congress’ Rupinder Singh K",
        "url": "https://timesofindia.indiatimes.com/city/jaipur/rajasthan-minister-in-bhajan-lal-sharma-govt-loses-election-in-sriganganagars-karanpur/articleshow/106634614.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-106635121,width-1070,height-580,imgsize-23332,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-01-08T09:45:12Z",
        "content": "10 wedding sari trends for 2024"
    }, {
        "source": {
            "id": null, "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Garena Free Fire Max redeem codes for January 8: Exciting rewards and surprises await | Mint - Mint",
        "description": "Garena Free Fire Max is a revamped version of the popular battle royale game, offering daily redeem codes for in-game items like weapons and diamonds. Players can redeem Garena Free Fire Max codes on the official Rewards Redemption site to receive in-game rew…",
        "url": "https://www.livemint.com/technology/garena-free-fire-max-redeem-codes-for-january-8-exciting-rewards-and-surprises-await-11704703136028.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/08/1600x900/Garena_Free_Fire_Max_1704705602990_1704705603164.jpg",
        "publishedAt": "2024-01-08T09:36:17Z",
        "content": "Garena Free Fire Max is an updated version of the original Garena Free Fire and was launched in 2021. The battle royale game gained popularity in India after its predecessor was banned by the Indian … [+2386 chars]"
    }, {
        "source": {
            "id": null, "name": "Hindustan Times"
        },
        "author": "Shobhit Gupta",
        "title": "MakeMyTrip records 3,400% rise in Lakshadweep searches since PM Modi's visit - Hindustan Times",
        "description": "Earlier in the day, another online travel company EaseMyTrip announced to suspend all Maldives flight bookings amid the boycott Maldives campaign.",
        "url": "https://www.hindustantimes.com/business/makemytrip-records-3400-rise-in-lakshadweep-searches-since-pm-modis-visit-101704704279194.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/08/1600x900/GDTi-bUagAAR6UV_1704704653875_1704704662218.jpg",
        "publishedAt": "2024-01-08T09:09:16Z",
        "content": "Online travel company MakeMyTrip on Monday claimed that a massive 3400% surge was recorded in on-platform searches for Lakshadweep following Prime Minister Narendra Modi's recent visit to the union t… [+3058 chars]"
    }, {
        "source": {
            "id": null, "name": "Bar & Bench - Indian Legal News"
        },
        "author": "Narsi Benwal",
        "title": "Calcutta High Court refuses urgent listing of PIL against attack on ED officers - Bar & Bench - Indian Legal News",
        "description": "The Calcutta High Court on Monday refused to grant urgent hearing to a Public Interest Litigation (PIL) petition highlighting the recent attack on the officers",
        "url": "https://www.barandbench.com/news/calcutta-high-court-refuses-urgent-listing-pil-against-attack-ed-officers",
        "urlToImage": "https://media.assettype.com/barandbench%2F2022-08%2F329e6094-0a13-4bb5-8e80-463915f662d6%2F23.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
        "publishedAt": "2024-01-08T08:50:32Z",
        "content": "A division bench of Chief Justice TS Sivagnanam and Justice Supratim Bhattacharya said it would hear the matter on Thursday instead of taking it up today itself. \r\n\"We have read your petition in the … [+305 chars]"
    }, {
        "source": {
            "id": null, "name": "Bnnbreaking.com"
        },
        "author": "Salman Khan",
        "title": "NASA Spots Aircraft-sized Asteroid: Today's Key News - BNN Breaking",
        "description": "NASA detects an aircraft-sized asteroid approaching Earth, while significant developments unfold in technology, sports, entertainment, and politics.",
        "url": "https://bnnbreaking.com/sports/nasa-detects-aircraft-sized-asteroid-a-roundup-of-todays-significant-developments/",
        "urlToImage": "https://media.bnn.network/content/uploads/2024/01/nasa-aircraft-sized-asteroid-20240108082345.jpg",
        "publishedAt": "2024-01-08T08:23:00Z",
        "content": "On a day brimming with noteworthy developments, all eyes are on NASA’s detection of an asteroid, roughly the size of an aircraft, hurtling towards Earth at a speed of 30,606 kmph. This revelation com… [+2295 chars]"
    }, {
        "source": {
            "id": null, "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Bilkis Bano case Live Updates: Congress attacks Guj govt, says, 'appears to work to save culprits rather than get justic | Mint - Mint",
        "description": "Bilkis Bano case Live Updates: The Supreme Court is expected to deliver a verdict today on the Bilkis Bano case, which involves petitions challenging the remission granted to 11 convicts.",
        "url": "https://www.livemint.com/news/bilkis-bano-case-live-news-updates-supreme-court-verdict-gangrape-murder-convicts-remission-11704675893824.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/08/1600x900/Bilkis-Bano-was-five-month-pregnant-when-she-was-g_1692358949331_1704693578110.jpg",
        "publishedAt": "2024-01-08T07:59:24Z",
        "content": "Bilkis Bano case Live Updates: The Supreme Court is expected to deliver a verdict today on the Bilkis Bano case, which involves petitions challenging the remission granted to 11 convicts. The case fi… [+12514 chars]"
    }]

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3a2a12c9e90b449899ab015aa91af2fc&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3a2a12c9e90b449899ab015aa91af2fc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handlenext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3a2a12c9e90b449899ab015aa91af2fc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (<div className="container">
            <Marquee>
                <h2 style={{textAlign: "center", margin: '35px 0px'}}>Top Headlines</h2>
            </Marquee>
            {
                this.state.loading && <Spineer/>
            }
            <div className="row my-3">
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.url} >
                        <NewsItem title={element.title}
                                  description={element.description}
                                  urlToImage={!element.urlToImage ? 'https://imgk.timesnownews.com/story/AP_19187620141218_1.jpg' : element.urlToImage}
                                  link={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })} </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark"
                        onClick={this.handleprev}>&larr;Previous
                </button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 10)} type="button"
                        className="btn btn-dark" onClick={this.handlenext}>&rarr;Next
                </button>
            </div>
        </div>)
    }

}

export default News
