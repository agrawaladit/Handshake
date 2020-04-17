export const get_users = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    }
}