import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import studentsReducer from './studentsReducer'
import profileReducer from './profileReducer'
import expReducer from './expReducer'
import eduReducer from './eduReducer'
import jobsReducer from './jobsReducer'
import appReducer from './appReducer'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    studentsReducer: studentsReducer,
    profileReducer: profileReducer,
    eduReducer: eduReducer,
    expReducer: expReducer,
    jobsReducer: jobsReducer,
    appReducer: appReducer,
    messageReducer: messageReducer
})

export default rootReducer