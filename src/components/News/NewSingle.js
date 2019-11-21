import React from 'react';


const NewSingle = ({item}) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage !== null ? item.urlToImage : 'https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt={item.title}/>
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank" rel="noopener noreferrer">Full Article</a>
      </div>
    </div>
  </div>
);

export default NewSingle;