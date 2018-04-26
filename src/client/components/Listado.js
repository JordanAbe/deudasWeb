import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showDeudas, showPeriodos } from '../actions'

class Listado extends Component {
    constructor() {
        super()
        this.buscarDeudas = this.buscarDeudas.bind(this);
    }

    componentWillMount(){
        this.props.showDeudas(null);
        this.props.showPeriodos();
    }

    renderPeriodos(){
        return this.props.periodos.data.map((periodo) =>{
            return (
                <option key={periodo.idPeriodo} value={periodo.idPeriodo} >{periodo.descripcion}</option>
            )
        })
    }

    renderDeudas(){
        return this.props.deudas.data.map((deuda) =>{
            return (
                <tr key={deuda.idDeuda}>
                    <td>{deuda.idDeuda}</td>
                    <td>{deuda.periodo}</td>
                    <td>{deuda.departamento}</td>
                </tr>
            )
        })
    }

    buscarDeudas(){
        let idper = document.getElementById('idPeriodo').value;
        let dep = document.getElementById('idDepartamento').value;
        console.log(idper, " " ,dep);
        this.props.showDeudas({idper, dep});
    }

    render(){
        console.log(this.props);
        return (
            <div>
                    <h2>Listado de Deudas</h2>
                    <div class="form-row">
                        <label class="col-sm-2">Periodo</label>
                        <select id="idPeriodo" class="form-control col-sm-3">
                            <option value="">Todos</option>
                            {
                                this.renderPeriodos()
                            }
                        </select>
                        <label class="col-sm-2">Departamento</label>
                        <input id="idDepartamento" type="text" class="form-control col-sm-3"/>
                        <div class="col-sm-2">
                            <button onClick={this.buscarDeudas}  class="btn btn-primary ">Buscar</button>
                        </div>
                    </div>
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>PERIODO</th>
                            <th>DEPARTAMENTO</th>
                        </tr>
                        {
                            this.renderDeudas()
                        }
                    </table>
                </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        deudas: state.deudas,
        periodos: state.periodos
    }
}

export default connect(mapStateToProps, { showDeudas, showPeriodos })(Listado)