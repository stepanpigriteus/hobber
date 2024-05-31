import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Error404 from './pages/404';
import Cabinet from './pages/cabinet';
import CreateItems from './pages/create_items';
import BreadcrumbExample from './components/breadcrump';
import CollectionItems from './pages/collection_items';

function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <BreadcrumbExample/>
      <Routes>
            <Route path="/" element={<Home/> } /> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cabinet/' element={<Cabinet/>}/>
            <Route path="*" element={<Error404/>}/>
            <Route path='/cabinet/collection/create_items' element={<CreateItems/>}/>
            <Route path='/cabinet/collection' element={<CollectionItems/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
