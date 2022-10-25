import * as TestActionCreators from './test'
import * as UserActionCreators from './user'

export const ActionCreators = {
    ...TestActionCreators,
    ...UserActionCreators
}
