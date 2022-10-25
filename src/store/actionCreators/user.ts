import { UserActionTypes, UserAction, IUser } from '../../types/user'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER })
            const response = await axios.get<IUser[]>('http://localhost:3001/users')
            dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Произошла ошибка при загрузке тестов' })
        }
    }
}

export const rememberUser = (user: any[]) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.REMEMBER_USER, payload: user })
    }
}
