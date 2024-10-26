import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route ,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Layout from './layout'
import Contact from './components/contact'
import User from './components/user'
import Github , {githubInfoLoader} from './components/github'

// const router =createBrowserRouter([
//     {
//         path:'/',
//         element:<Layout/>,
//         children:[
//             {
//                 path:"",
//                 element: <Home/>

//             },
//             {
//                 path:"about",
//                 element:<About/>
//             },
//             {
//                 path:"contact",
//                 element:<Contact/>
//             }
//         ]
//     }

// ]) 

//Lets do it a more easier way 

const router =createBrowserRouter(
     createRoutesFromElements(
        <Route path='/' element={<Layout/>} >
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='user/:userid' element={<User/>} />
            <Route  loader={githubInfoLoader} path='github' element={<Github/>} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider  router ={router}/>
)
