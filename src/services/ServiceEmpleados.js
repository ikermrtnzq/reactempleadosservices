import Global from '../Global';
import axios from 'axios';

export default class ServiceEmpleados{

    obtenerEmpleados(){

        return new Promise(function(resolve){
            let url = Global.urlEmpleados;
            let endpoint = "/api/Empleados";

            axios.get(url+ endpoint).then((response) => {
                resolve(response.data)
            })
        })
        
    }

    obtenerOficios(){
      return new Promise(function(resolve){
            let url = Global.urlEmpleados;
            let endpoint = "/api/Empleados/oficios";

            axios.get(url+ endpoint).then((response) => {
                resolve(response.data)
            })
        })  
    }

    obtenerEmpleadosOficio(oficio){
        return new Promise(function(resolve){
            let url = Global.urlEmpleados;
            let endpoint = "/api/Empleados/EmpleadosOficio/";
            axios.get(url+ endpoint + oficio).then((response) => {
                resolve(response.data)
            })
        })
    }
}