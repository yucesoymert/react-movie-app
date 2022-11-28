import React from 'react'
import { useParams } from 'react-router-dom'

// import components
import PageHeader from '../components/page-header/PageHeader';
import MovieGrid from '../components/movie-grid/MovieGrid';

// import category api
import { category as cate } from '../api/tmdbApi';

const Catalog = () => {

  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog