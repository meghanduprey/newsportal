import React, {Component} from 'react';
import NewSingle from './NewSingle';


class TechNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8222f155add24709bfa464acfe42bf51`;

    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        news: data.articles
      })
    })
    .catch((error) => console.log(error));
  }

  renderItems() {

    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
      <h2>Tech News</h2>
        {this.renderItems()}
      </div>
    )
  }
}

export default TechNews;