import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './contact/contact'
import User from './User/User'
import Github, { githubInfoLoader } from './Github/Github'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='contacts' element={<Contact/>}/>
      <Route path='user/:id'  element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='Github' element={<Github/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
