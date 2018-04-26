import { combineReducers } from 'redux';

import deudasReducer from './deudasReducer';
import periodosReducer from './periodosReducer';

const rootReducers = combineReducers({
    deudas: deudasReducer,
    periodos: periodosReducer
});

export default rootReducers;