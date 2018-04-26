import React, { Component } from 'react';
import Listado from './listado'
import Create from './create'

class App extends Component {
    constructor() {
        super()
    }

    render(){
        return (
            <div>
                <header >
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <label class="text-light bg-dark">DEUDAS WEB APP</label>
                    </nav>
                </header>
                <div className="content">
                    <Listado/>
                </div>
                {/* <footer class="page-footer font-small gray pt-4 mt-4">   
                    <div class="footer-copyright py-3 text-center">
                        © 2018 Copyright:
                    </div>
                </footer> */}
            </div>
        )
    }
}

export default App;