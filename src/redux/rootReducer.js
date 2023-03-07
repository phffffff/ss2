import { combineReducers } from 'redux';

// rootReducer của pt smartphone
import cartReducer from './cartReducer/cartReducer';

import taiXiuReducer from './taiXiuReducer/taiXiuReducer'

const rootReducer = combineReducers({
    stateCartPhone: cartReducer,
    stateTaiXiu: taiXiuReducer,
});

// rootReducer của pt tài xỉu
// const rootReducer = combineReducers({})

export default rootReducer;