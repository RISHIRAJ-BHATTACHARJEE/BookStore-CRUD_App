import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBooks from './pages/ShowBooks'
import UpdateBooks from './pages/UpdateBooks'
import DeleteBooks from './pages/DeleteBooks'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBooks/>}/>
      <Route path="/books/details/:id" element={<ShowBooks/>}/>
      <Route path="/books/edit/:id" element={<UpdateBooks/>}/>
      <Route path="/books/delete/:id" element={<DeleteBooks/>}/>
    </Routes>
  )
}

export default App