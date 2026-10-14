import React, { Component } from 'react'
import Menu from './Menu'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import Empleados from './Empleados';
import ServiceEmpleados from '../services/ServiceEmpleados';



export default class Router extends Component {

    state={
        empleados: []
    }
  render() {
    function OficiosElement() {
    
        let {oficio} = useParams();
        return(<Empleados oficio={oficio}/>)
    }
    return (
      <div>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element ={<Home/>}></Route>
                <Route path='/empleados/:oficio' element ={<OficiosElement/>}></Route>

            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
