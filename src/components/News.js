import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)


  const update = async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)

  }

  useEffect(() => {
    update();
  },[])

  
  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   update();
  // }

  // const handleNextClick = async () => {
  //   console.log("Next")
  //   if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

  //   }
  //   else {
  //     setPage(page+1)
  //     update();
  //   }
  // }
  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    
      

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      setArticles(articles.concat(parseData.articles))
      setTotalResults(parseData.totalResults)
      setLoading(false)
    };
  
    return (
      <div>

        <div className="container my-3">
          <center> <h2 style={{margin: '35px 0px', marginTop: '90px'}}>Top Headlines</h2></center>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<h4>Loading...</h4>}
          >
            <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col md-4" key={element.url}>
                  <NewsItem title={element.title.slice(0, 45) + "..."} description={element.description !== null ? element.description.slice(0, 88) + "....." : element.description} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              })}
            </div>
            </div>
          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}



        </div>
      </div>
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
