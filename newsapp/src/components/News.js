import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []   
    
    constructor(){
        super();
        console.log("Hello I am a constructor from news component")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1 
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4ff2463b1f2e4aaab5e02572ed29df5c&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles, totalResults:parsedData.totalResults
        })
    }  

    handlePrevClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4ff2463b1f2e4aaab5e02572ed29df5c&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    
    handleNextClick = async () => {
        console.log("Next")
        if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4ff2463b1f2e4aaab5e02572ed29df5c&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
        
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem 
                                    title={element.title} 
                                    description={element.description} 
                                    imageUrl={element.urlToImage} 
                                    newsUrl={element.url} 
                                />
                            </div>
                        )
                    })}
                </div>
                <div className='container my-3 d-flex justify-content-between'>
                    <button 
                        disabled={this.state.page <= 1} 
                        type="button" 
                        className="btn btn-sm btn-danger" 
                        onClick={this.handlePrevClick}>
                        &larr; Previous
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-info" 
                        onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}

export default News
