import axios from 'axios';

export const SHOW_DEUDAS = "SHOW_DEUDAS"
export const SHOW_PERIODOS= "SHOW_PERIODOS"

export function showDeudas(params){

    let enlace = 'http://localhost:8081/deudas-service2/deudas';
    if(params != null){
        enlace = `http://localhost:8081/deudas-service2/deudas?idper=
        ${params.idper}&dep=${params.dep}`;
    };

    return (dispatch, getState) => {
        axios.get(enlace)
        .then((response) => dispatch({ type: SHOW_DEUDAS, payload: response.data.deudas}))
    }
    

}

export function showPeriodos(){

    return (dispatch, getState) => {
        axios.get('http://localhost:8081/deudas-service2/periodos')
        .then((response) => dispatch({ type: SHOW_PERIODOS, payload: response.data}))
    }
    

}