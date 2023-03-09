import React from 'react'
import { useSelector } from 'react-redux'

const Starred = () => {
    const starredShows = useSelector(state=>state.starred.ids);
  return (
    <div>
      <h1>Starred Shows : {starredShows.length}</h1>
    </div>
  )
}

export default Starred
