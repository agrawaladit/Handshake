import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import studentsReducer from './studentsReducer'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    studentsReducer: studentsReducer
})

export default rootReducer