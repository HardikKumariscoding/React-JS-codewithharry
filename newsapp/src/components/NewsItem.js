import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://www.denverpost.com/wp-content/uploads/2024/12/TDP-L-Chargers-Broncos-RJS-02284.jpg?w=1024&h=705" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
