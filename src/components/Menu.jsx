import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class Menu extends Component {
  state = {
    oficios :[]
  }
  service= new ServiceEmpleados()
  obtenerOficios = () => {
    this.service.obtenerOficios().then(result => {
        console.log(result)
        this.setState({
            oficios : result
        })
    })
  }

  componentDidMount = () => {
    this.obtenerOficios()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink style={{textDecoration : "none", color : "black"}} to="/">Home</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Oficios
                      </a>
                      <ul className="dropdown-menu">
                        {
                          this.state.oficios.map((oficio, index) => {
                            return(<NavLink className="dropdown-item" to={"/empleados/"+oficio}>{oficio}</NavLink>)
                          })
                        }
                      </ul>
                  </li>
                </ul>
            </div>
          </div>
      </nav>
    )
  }
}
