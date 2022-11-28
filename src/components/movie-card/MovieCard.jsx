import React from 'react'
import { Link } from 'react-router-dom'

// import scss
import './movie-card.scss'

// import api config
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// components
import Button from '../button/Button'

const MovieCard = props => {

    const item = props.item

    const link = '/' + category[props.category] + '/' + item.id;

    const background = apiConfig.w500Image(item.backdrop_path || item.poster_path);

  return (
    <Link to={link}>
        <div className='movie-card' style={{backgroundImage: `url(${background})`}}>
            <Button>
                <i className='bx bxs-show bx-md' ></i>
               <div>more</div>
            </Button>
        </div>
        <h3 className='movie-title'>{item.title || item.name}</h3>
    </Link>
    )
}

export default MovieCard