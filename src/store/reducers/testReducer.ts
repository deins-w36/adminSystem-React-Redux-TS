import { TestState, TestActionTypes, TestAction } from '../../types/test'

const initState: TestState = {
    tests: [],
    loading: false,
    error: null
}

export const testReducer = (state: TestState = initState, action: TestAction): TestState => {
    switch (action.type) {
        case TestActionTypes.FETCH_TEST:
            return {
                ...state,
                loading: true
            }
        case TestActionTypes.FETCH_TEST_SUCCESS:
            return {
                ...state,
                loading: false,
                tests: action.payload
            }
        case TestActionTypes.FETCH_TEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case TestActionTypes.TEST_CREATED:
            return {
                ...state,
                tests: [...state.tests, action.payload]
            }
        case TestActionTypes.TEST_DELETE:
            return {
                ...state,
                tests: state.tests.filter(test => test.id !== action.payload)
            }
        default:
            return state
    }
}
