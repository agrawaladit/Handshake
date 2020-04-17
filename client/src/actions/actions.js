export const get_users = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    }
}

export const get_jobs = (users) => {
    return {
        type: 'GET_JOBS',
        payload: users
    }
}

export const get_messages = (users) => {
    return {
        type: 'GET_MESSAGES',
        payload: users
    }
}

export const get_apps = (users) => {
    return {
        type: 'GET_APPS',
        payload: users
    }
}

export const get_profile = (profile) => {
    return {
        type: 'GET_PROFILE',
        payload: profile
    }
}


export const set_edu = (profile) => {
    return {
        type: 'SET_EDU',
        payload: profile
    }
}

export const set_exp = (profile) => {
    return {
        type: 'SET_EXP',
        payload: profile
    }
}