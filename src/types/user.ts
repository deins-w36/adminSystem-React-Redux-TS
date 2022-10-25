export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
    oneUser: any[]
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    REMEMBER_USER = 'REMEMBER_USER'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: any[]
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string
}
interface RememberUserAction {
    type: UserActionTypes.REMEMBER_USER
    payload: any[]
}
export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | RememberUserAction

export interface IUser {
    id: number
    name: string
    tests: IAttempts[]
}

interface IAttempts {
    attempts: IAtt[]
}
interface IAtt {
    date: string
    time: string
    true_answer: number
}
