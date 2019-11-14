import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import News from './News/News';
import Navigation from './Navigation';
import TechNews from './News/TechNews';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=wsj.com,nytimes.com'
      }
    };
  }
  render() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <Navigation/>
        <Switch>
          <Route exact path = "News/News" component={News}/>
          <Route exact path="/News/TechNews" component={TechNews} />
        </Switch>

        <News/>

      </div>
    </Router>
  );
}
}

export default App;
