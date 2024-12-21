import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "The Denver Post"
            },
            "author": "Troy Renck",
            "title": "Renck: Sean Payton gets greedy at end of first half, and Broncos’ playoff bid gets struck by lightning - The Denver Post",
            "description": "Broncos get greedy. Get upset by Chargers.",
            "url": "https://www.denverpost.com/2024/12/19/sean-payton-greedy-free-kick-broncos-chargers/",
            "urlToImage": "https://www.denverpost.com/wp-content/uploads/2024/12/TDP-L-Chargers-Broncos-RJS-02284.jpg?w=1024&h=705",
            "publishedAt": "2024-12-20T04:54:31Z",
            "content": "INGLEWOOD, Calif. — Hold your horses.\r\nThe Broncos saw the light. And the Chargers gave them thunder.\r\nThe Broncos are not yet playoff-bound for the first time since 2015. Their noses remain pressed … [+6160 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "CBS Sports",
            "title": "WATCH: Chargers utilize obscure NFL rule to hit league's first fair-catch kick field goal since 1976 - CBS Sports",
            "description": null,
            "url": "https://www.cbssports.com/nfl/news/watch-chargers-utilize-obscure-nfl-rule-to-hit-leagues-first-fair-catch-kick-field-goal-since-1976/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/12/20/364490e4-1d9e-4fb8-b51c-94dbc3f5de3f/thumbnail/770x433/8294dacf328f4f6f20f2376ffbc8e7a9/dicker-g.jpg",

            "publishedAt": "2024-12-20T04:35:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Patrick Marley, Hannah Natanson, Sarah Blaskey",
            "title": "California man detained on suspicion of ‘plotting’ with Wisconsin school shooter - The Washington Post",
            "description": "FBI agents interviewed Alexander Paffendorf, 20, late Tuesday, according to a court order obtained by The Washington Post.",
            "url": "https://www.washingtonpost.com/nation/2024/12/19/wisconsin-school-shooting-plot-california-arrest/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YQVD32KXK67U5GMQE2IZJS7MW4_size-normalized.jpg&w=1440",
            "publishedAt": "2024-12-20T03:40:32Z",
            "content": "MADISON, Wisconsin Authorities have detained a California man on suspicion of plotting a mass shooting with the 15-year-old girl who opened fire in her small Christian school in Wisconsin this week, … [+3936 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Nick Miroff, Maria Sacchetti",
            "title": "U.S. deportations at highest level since 2014, ICE report shows - The Washington Post",
            "description": "U.S. Immigration and Customs Enforcement deported 271,484 immigrants to nearly 200 countries last fiscal year, according to the agency’s annual report.",
            "url": "https://www.washingtonpost.com/immigration/2024/12/19/immigration-enforcement-deportations-biden/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QEZLCIFHTVLHJN4ZYRZRRRHZN4_size-normalized.jpg&w=1440",
            "publishedAt": "2024-12-20T03:33:50Z",
            "content": "U.S. Immigration and Customs Enforcement deported 271,484 immigrants to nearly 200 countries last fiscal year, the highest tally in a decade, according to the agencys annual report published Thursday… [+283 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Fenit Nirappil",
            "title": "What to know about the bird flu outbreak as concerns about U.S. cases grow - The Washington Post",
            "description": "The H5N1 strains are becoming more concerning as the first severe U.S. case has been detected and California declared a state of emergency.",
            "url": "https://www.washingtonpost.com/health/2024/12/19/bird-flu-outbreak-symptoms-vaccine-explained/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KBNLMG5O247CL66KYPPFAZI6PM_size-normalized.jpg&w=1440",
            "publishedAt": "2024-12-20T03:23:58Z",
            "content": "The bird flu outbreak in the United States is becoming more concerning after California declared a state of emergency to confront the spread in dairy cows and Louisiana reported the first severe illn… [+293 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "The Associated Press",
            "title": "House rejects Trump-backed plan on government shutdown, leaving next steps uncertain - The Associated Press",
            "description": "Speaker Mike Johnson's plan to fund the government, endorsed by President-elect Donald Trump, was roundly rejected by the House. Democrats refused to support the bill after Trump and Elon Musk helped to tank its predecessor.",
            "url": "https://apnews.com/live/government-shutdown-congress-spending-trump-updates",
            "urlToImage": "https://dims.apnews.com/dims4/default/2896051/2147483647/strip/true/crop/1024x576+0+54/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe3%2F7e%2Fde5ae5ef47b89d8eb4fbfe2cc4d8%2Fap24355011308557.jpg",
            "publishedAt": "2024-12-20T03:03:00Z",
            "content": "Minutes after Republicans plan to avert a shutdown and raise the debt ceiling failed in the House, congressional leaders regrouped to consider what to do next.\r\nRep. Steve Scalise, the House Republic… [+715 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Fulton County DA Fani Willis disqualified from Trump case - BBC.com",
            "description": "The ruling reverses a previous decision from a Georgia court allowing Willis to stay on the case.",
            "url": "https://www.bbc.com/news/articles/c77jdk4k717o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f08c/live/ada762b0-be1a-11ef-89ab-d55cbbf64b27.jpg",
            "publishedAt": "2024-12-20T02:57:33Z",
            "content": "The Georgia Court of Appeals removed Fulton County District Attorney Fani Willis from an election subversion case against President-elect Donald Trump. \r\nWillis is expected to appeal against the ruli… [+3182 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kristen Rogers",
            "title": "Vagus nerve stimulation may relieve treatment-resistant depression, study finds - CNN",
            "description": "Vagus nerve stimulation therapy improved the symptoms of treatment-resistant depression for nearly 500 participants in a major clinical trial.",
            "url": "https://www.cnn.com/2024/12/19/health/vagus-nerve-stimulation-depression-treatment-wellness/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1434944848-20241217185343925.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-12-20T02:23:00Z",
            "content": "Sign up for CNNs Stress, But Less newsletter. Our six-part mindfulness guide will inform and inspire you to reduce stress while learning how to harness it.\r\nNick Fournie was 24 years old when severe … [+12522 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Lisa Baertlein, Abhinav Parmar",
            "title": "FedEx to spin off its freight trucking business - Reuters",
            "description": "FedEx announced the much-anticipated spinoff of its freight trucking division on Thursday, as it restructures operations to focus on its core delivery business.",
            "url": "https://www.reuters.com/business/fedex-spin-off-its-less-than-truckload-freight-business-2024-12-19/",
            "urlToImage": "https://www.reuters.com/resizer/v2/FYPTWZEHFJKINHIC6XXMEDPMNA.jpg?auth=419e68b6a15f485f2c9b78e29197dc4d5cede4ec77642225454ca7fd6e758aeb&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-12-20T00:36:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Alexander Bolton",
            "title": "Senate advances bill to boost Social Security benefits for millions of people - The Hill",
            "description": "The Senate voted overwhelmingly Thursday to advance a bill to boost Social Security benefits for more than 2 million Americans by repealing two laws that have limited payouts to state and local public-sector workers and their families. It advanced by a vote o…",
            "url": "https://thehill.com/homenews/senate/5048673-senate-approves-social-security-benefits-bill/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/06/cassidybill_062024jg02_w.jpg?w=1280",
            "publishedAt": "2024-12-20T00:34:00Z",
            "content": "Skip to content\r\nThe Senate voted overwhelmingly Thursday to advance a bill to boost Social Security benefits for more than 2 million Americans by repealing two laws that have limited payouts to stat… [+4224 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Putin's big statement on ending Ukraine war: 'Russia ready to compromise with...' - Hindustan Times",
            "description": "Putin said that Russia was ready to negotiate with anyone, including Ukraine President Volodymyr Zelenskyy | World News",
            "url": "https://www.hindustantimes.com/world-news/putins-big-statement-on-ending-ukraine-war-russia-ready-to-compromise-with-101734652238366.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/12/20/1600x900/putin_trump_1734653560290_1734653560578.JPG",
            "publishedAt": "2024-12-20T00:30:48Z",
            "content": "Russia President Vladimir Putin said on Thursday that he is open to compromising over the Ukraine war in talks with US President-elect Donald Trump, emphasising that there are no preconditions for di… [+2545 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sean Conlon",
            "title": "Stock futures tick lower as traders await the Fed’s preferred inflation reading: Live updates - CNBC",
            "description": "All three major averages are on track for sharp losses on the week.",
            "url": "https://www.cnbc.com/2024/12/19/stock-market-today-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108077013-1734452579389-NYSE_Traders-OB-Photo-20241217-CC-PRESS-3.jpg?v=1734452791&w=1920&h=1080",
            "publishedAt": "2024-12-20T00:25:00Z",
            "content": "U.S. stock futures fell slightly on Thursday evening as traders anticipate the latest reading of the Federal Reserve's favorite inflation gauge.\r\nFutures tied to the Dow Jones Industrial Average fell… [+2299 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eric Levenson",
            "title": "A whirlwind day for Luigi Mangione ends with new charges, revelations from a notebook and transfer to a federal prison - CNN",
            "description": "Luigi Mangione had a busy Thursday, with a whirlwind two-state courthouse tour turned spectacle featuring a helicopter ride, a throng of escorts – including the mayor of New York City at one point – and new revelations of his alleged intent to “wack” an insur…",
            "url": "https://www.cnn.com/2024/12/19/us/luigi-mangione-healthcare-murder-charges/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24354551882600.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-12-20T00:19:00Z",
            "content": "Luigi Mangione had a busy Thursday, with a whirlwind two-state courthouse tour turned spectacle featuring a helicopter ride, a throng of escorts including the mayor of New York City at one point and … [+9333 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Reuters",
            "title": "Nike CEO says sneaker giant ‘lost its obsession with sport,’ vows to revive iconic brand - New York Post ",
            "description": "Analysts said CEO Elliott Hill faces tough critics and a long slog to claw back lost market.",
            "url": "https://nypost.com/2024/12/19/business/nike-ceo-says-sneaker-giant-lost-its-obsession-with-sport/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/12/nike-q2-earnings.jpg?quality=75&strip=all&1734633047&w=1024",
            "publishedAt": "2024-12-19T23:50:00Z",
            "content": "Nike’s results beat modest estimates on Thursday and its shares jumped briefly, but the company soon dashed investor hopes and sent shares lower when a top executive predicted revenues would fall by … [+3276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "ChatGPT for macOS now works with Apple Notes and more third-party apps - 9to5Mac",
            "description": "OpenAI last month announced a major update to the macOS ChatGPT app, which gained the ability to read on-screen content...",
            "url": "https://9to5mac.com/2024/12/19/chatgpt-macos-apps-apple-notes/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/chatgpt-macos-mac-apps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-12-19T23:43:00Z",
            "content": "OpenAI last month announced a major update to the macOS ChatGPT app, which gained the ability to read on-screen content in certain apps. The company is now rolling out an update that expands support … [+2002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Robert Z. Pearlman",
            "title": "Russian cosmonauts install X-ray detector, jettison trash on spacewalk outside ISS - Space.com",
            "description": "Expedition 72 crewmates Alexey Ovchinin and Ivan Vagner completed the last planned spacewalk of 2024 today (Dec. 19).",
            "url": "https://www.space.com/space-exploration/international-space-station/russian-cosmonauts-install-x-ray-detector-jettison-trash-on-spacewalk-outside-iss",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/pb26cxkBhNpYL8xXwLajnS-1200-80.jpg",
            "publishedAt": "2024-12-19T23:37:15Z",
            "content": "A Russian cosmonaut took a short ride at the end of a robotic arm to jettison spent equipment that he and a crewmate collected during a spacewalk outside the International Space Station today (Dec. 1… [+4198 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nathan Hodge",
            "title": "Zelensky calls Putin a ‘dumbass’ for challenging a missile ‘duel’ - CNN",
            "description": "Ukrainian President Volodymyr Zelensky had a tart response to Russian President Vladimir Putin’s annual year-end news conference Thursday, hurling a rude epithet at the Kremlin leader in comments online.",
            "url": "https://www.cnn.com/2024/12/19/europe/ukraine-putin-zelensky-missile-duel-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2190064472-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-12-19T23:27:00Z",
            "content": "Ukrainian President Volodymyr Zelensky had a tart response to Russian President Vladimir Putins annual year-end news conference Thursday, hurling a rude epithet at the Kremlin leader in comments onli… [+2790 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Minnesota Public Radio News"
            },
            "author": "Paul Huttner",
            "title": "Snowfall totals: Storm delivers season's biggest snow so far - MPR News",
            "description": "Widespread accumulating snow across Minnesota.",
            "url": "https://www.mprnews.org/story/2024/12/19/snowfall-totals-storm-delivers-seasons-biggest-snow-so-far",
            "urlToImage": "https://img.apmcdn.org/adfd8677746e172ebd8bcedaf7d0f2a8907a8967/uncropped/d36fb4-20241219-snowfall-totals-864.png",
            "publishedAt": "2024-12-19T23:23:00Z",
            "content": "Well, that escalated quickly. \r\nOur well-advertised clipper delivered significant snow across much of the Upper Midwest Thursday. Winter storm warnings remain in effect until midnight. Gusty winds an… [+2098 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Gene Park",
            "title": "Talking death with Ben Schwartz, voice of Sonic the Hedgehog - The Washington Post",
            "description": "The star of “Sonic the Hedgehog 3” talks Final Fantasy, the afterlife and the lost art of the $10 million to $25 million comedy.",
            "url": "https://www.washingtonpost.com/entertainment/video-games/2024/12/19/ben-schwartz-sonic-the-hedgehog-3/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VCBLO5UDVBBMEPOUBJ4DMS3NNU.jpg&w=1440",
            "publishedAt": "2024-12-19T23:05:33Z",
            "content": "Sonic the Hedgehog 3 opens in theaters today, and its a meaty, muscular action film with a darker edge, introducing the vengeful Shadow, voiced by Keanu Reeves. Its also a three-peat for director Jef… [+8895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TooFab"
            },
            "author": "Toofab Staff",
            "title": "Killer Who Nearly Beheaded and Planned to Eat Girl, 10, Calls His Birthday Execution 'Needlessly Cruel' - TooFab",
            "description": "Kevin Underwood was executed in Oklahoma on Thursday morning -- his 45th birthday -- for the grisly 2006 murder of a young girl as part of a cannibalistic fantasy.",
            "url": "https://toofab.com/2024/12/19/kevin-underwood-execution-oklahoma/",
            "urlToImage": "https://images.toofab.com/image/21/16by9/2024/12/19/212dd8d1687e422dad951a966559bcd2_xl.jpg",
            "publishedAt": "2024-12-19T22:06:00Z",
            "content": "Kevin Underwood was executed in Oklahoma on Thursday morning -- his 45th birthday -- for the grisly 2006 murder of a young girl as part of a cannibalistic fantasy.\r\nThe convicted killer was executed … [+2919 chars]"
        }
    ]
    
    constructor(){
        super();
        console.log("Hello I am a constructor from news component")
        this.state = {
            articles: this.articles,
            loading: false
        }
      }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4ff2463b1f2e4aaab5e02572ed29df5c"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:
            parsedData.articles
        })
    }  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top HeadLines</h2>
     <div className='row'>
     {this.state.articles.map((element)=>{
        return <div className='col-md-4'  key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        
     })}

        
        
        
        
     </div>
    </div>
    )
  }
}

export default News