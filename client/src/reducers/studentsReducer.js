import { getUsers } from '../components/UserFunctions'

let initState = {
    users: ['no data']
}
// const myAsyncFunc = (result) => { 
//     myVal = result;
//     // ...
//  };

// getUsers().then(response => {
//     initState = {
//         users: response
//     }
// })
//     .catch(error => {
//         console.log(error)
//         return {
//             users: ['no data']
//         }
//     })

// console.log(initState)
const studentsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.payload}
        default:
            return state
    }
}

export default studentsReducer