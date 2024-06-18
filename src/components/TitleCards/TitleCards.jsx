import React, { useEffect, useRef, useState } from 'react';
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState(cards_data);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjcwZTQ4NTEwMjk3MmJjNmNlNjQyNTZhZWQxYTlhZCIsInN1YiI6IjY2NzA2MmMyOTg1MWZmYzdkZWMzNTVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWUy501QmlC7kEAY8qFxj2LhvZ4-LF50a5tmHQmhn7g'
    }
  };
  
  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; 
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category? category:'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card)=>{
          return <Link to={`/player/${card.id}`} key={card.id} className='card'>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.poster_path} alt={card.original_title}/>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
