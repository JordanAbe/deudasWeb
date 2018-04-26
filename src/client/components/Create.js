import React, { Component } from 'react';
import { connect } from 'react-redux';

class Create extends Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                <h2>Crear Deuda</h2>
                <div class="form-row">
                    <div class="form-row col-sm-6 mr-20">
                        <label>Departamento</label>
                        <input type="text" readonly class="form-control"  value=""/>
                    </div>
                    <div class="form-row col-sm-6">
                        <label>Periodo</label>
                        <input type="text" readonly class="form-control"  value=""/>
                    </div>
                </div>
                <div className="create-body">
                    Servicios
                    <div class="form-row">
                        <div class="form-row col-sm-6">
                            <label class="col-sm-2 col-form-label">Servicio</label>
                            <input type="text" class="col-sm-10 form-control"  value="Agua"/>
                        </div>
                        <div class="form-row col-sm-6">
                            <label class="col-sm-2 col-form-label">Monto</label>
                            <input type="text" class="col-sm-10 form-control"  value="520.00"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-row col-sm-6">
                            <label class="col-sm-2 col-form-label">Servicio</label>
                            <input type="text" class="col-sm-10 form-control"  value="Luz"/>
                        </div>
                        <div class="form-row col-sm-6">
                            <label class="col-sm-2 col-form-label">Monto</label>
                            <input type="text" class="col-sm-10 form-control"  value="25.00"/>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Grabar</button>
                </div>

            </div>
        )
    }
}

export default Create