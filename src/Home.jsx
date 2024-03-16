import React from 'react'
import NewPagination from './App'
import { Route,Routes } from 'react-router-dom'
import InfoCard from './InfoCard'
import Second from './Second'

const Home = () => {
  return (
    <div>
      <Second />
       <Routes>
        <Route path='/' element={<div></div>} />
        <Route path='/table' element={<div><NewPagination /></div>} />
        <Route path='/dashboard' element={<div><InfoCard /></div>} />
      </Routes>
    </div>
  )
}

export default Home;
