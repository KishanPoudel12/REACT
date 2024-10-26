import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route ,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Layout from './layout'
import Contact from './components/contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/user'
import Github , {githubInfoLoader} from './components/github'


//This is Routing  very very important in React 
