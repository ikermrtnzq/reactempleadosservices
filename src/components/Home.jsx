import React, { Component } from 'react'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class Home extends Component {
    service = new ServiceEmpleados();
    state = {
        empleados : []
    }
    obtenerEmpleados = () => {
        this.service.obtenerEmpleados().then(result =>{
            console.log(result)
            this.setState({
                empleados : result
            })
        })
    }

    componentDidMount = () => {
        this.obtenerEmpleados()
    }

  render() {
    return (
      <div style={{margin: "30px"}}>
        <h1>Home</h1>
        <table style={{borderRadius: "10px"}}>
        <thead>
                <tr>
                    <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Nombre</th>
                    <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Especialidad</th>
                    <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Salario</th>
                    <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Departamento</th>

                </tr>
            </thead>
            <tbody>
                   {
                        this.state.empleados.map((empleado, index) => {
                            return(
                                <tr key={empleado.idDoctor}>
                                    <td style={{padding: "10px",border : "1px solid black"}}> {empleado.apellido}  </td>
                                    <td style={{padding: "10px",border : "1px solid black"}}> {empleado.oficio} </td>
                                    <td style={{padding: "10px",border : "1px solid black"}}> {empleado.salario}€ </td>
                                    <td style={{padding: "10px",border : "1px solid black"}}> {empleado.departamento} </td>

                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
      </div>
    )
  }
}
