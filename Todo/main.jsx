import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route } from 'react-router'
import Home from './routes/Home'
import Login from './routes/Login'
import About from './routes/About'
import User from './routes/User'
import { TodoContextProvider } from './contextApi/context'

const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="User" element={<User/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="About" element={<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContextProvider>
    <RouterProvider router={Router}>
    </RouterProvider>
    </TodoContextProvider>
  </StrictMode>
)