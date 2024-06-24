import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export default function News (props)  {

  const  capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const[articles, setArticles]= useState([])
  const[loading, setLoading]= useState(false)
  const[totalResults, setTotalResults]= useState(0)
  const[page, setPage]= useState(1)

  

  const updateNews= async ()=>{
    props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}`;
    setLoading({loading: true});
    let data= await fetch(url);
    props.setProgress(30);
    let parseData= await data.json();
    props.setProgress(70);
    console.log(parseData);
    setArticles(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
    }


  useEffect(() => {
    document.title= `${capitalizeFirstLetter(props.category)}-NewsZones`;
   updateNews();
  }, [])

  

      const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
        setLoading(false);
      }



    return (
      <>
        <h2 className="text-center mb-3">NewsZones-Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
       >
       <div className="container my-3">
            <div className="row">
               {articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                                <NewsItem  title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88):""}
                                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />  
                              </div>
              })}
            </div>
            </div>
        </InfiniteScroll>
    </>
    )
}





 News.propTypes={
  country: PropTypes.string,  
  category: PropTypes.string
}



