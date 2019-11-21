import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import News from './News/News';
import Navigation from './Navigation';
import TechNews from './News/TechNews';
import BBCNews from './News/BBCNews';
import logo from './images/newspaper.png';

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
        <img src={logo} alt="newspaper icon" width="150" height="150" class="logo"/>
          <h1 className="App-title">News Feed</h1>
        </header>
        <Navigation/>
        <Switch>
          <Route exact path = "/" component={News}/>
          <Route exact path = "/News/News" component={News}/>
          <Route exact path="/News/TechNews" component={TechNews} />
          <Route exact path="/News/BBCNews" component ={BBCNews}/>
        </Switch>



      </div>
    </Router>
  );
}
}

export default App;
