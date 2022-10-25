import { UserState, UserActionTypes, UserAction } from '../../types/user'

const initState: UserState = {
    users: [],
    loading: false,
    error: null,
    oneUser: []
}

export const userReducer = (state: UserState = initState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionTypes.REMEMBER_USER:
            return {
                ...state,
                oneUser: action.payload
            }
        default:
            return state
    }
}
