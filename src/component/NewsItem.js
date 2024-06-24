import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
        <div style={{
                    display:"flex",
                    justifyContent:'flex-end',
                    position:'absolute',
                    right:'0'
                    }}>
        <span className="badge rounded-pill bg-info"> {source} </span>
        </div>
          
          <img src={imageUrl?imageUrl:"https://i.insider.com/6644fd3b14fb5b23cc5cbfca?width=1200&format=jpeg"} className="card-img-top"alt="Loading Image"/>
          <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author? author:"Unknown"} on { new Date (date).toGMTString()}</small></p>
              <a href={newsUrl} target=" _blank "className="btn btn-sm btn-primary">Read More</a>
           </div>
        </div>
      </div>
    )
  }
}

















