import { login } from '../components/UserFunctions'
import jwt_decode from 'jwt-decode'

const initState = {
}

const loginReducer = (state = initState, action) => {
    if (action.type === 'LOGIN') {
        login(action.user)
        .then(res => {
          const token = localStorage.usertoken
          const decoded = jwt_decode(token)
          
          if (res && decoded.school) {
            console.log(action.props.history);
            
            action.props.history.push(`/profile`)
          }
          if (res && decoded.company) {
            action.props.history.push(`/profilec`)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

    return state
}

export default loginReducer