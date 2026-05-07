import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Home from './components'
import BecomeHostPage from './components/becomehost'
import Login from './components/login'
import ListingsPage from './components/listings'
import PropertyDetailPage from './components/listingdetails'

const App = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/become-host/' element={<BecomeHostPage/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route path='/listings' element={<ListingsPage/>}/>
      <Route path='/listing/:id' element={<PropertyDetailPage/>}/>


    </Routes>   
    
  )
}

export default App
