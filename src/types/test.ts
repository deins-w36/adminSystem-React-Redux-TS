export interface TestState {
    tests: any[]
    loading: boolean
    error: null | string
}

export enum TestActionTypes {
    FETCH_TEST = 'FETCH_TEST',
    FETCH_TEST_SUCCESS = 'FETCH_TEST_SUCCESS',
    FETCH_TEST_ERROR = 'FETCH_TEST_ERROR',
    TEST_CREATED = 'TEST_CREATED',
    TEST_DELETE = 'TEST_DELETE'
}

interface FetchTestAction {
    type: TestActionTypes.FETCH_TEST
}
interface FetchTestSuccessAction {
    type: TestActionTypes.FETCH_TEST_SUCCESS
    payload: any[]
}
interface FetchTestErrorAction {
    type: TestActionTypes.FETCH_TEST_ERROR
    payload: string
}
interface TestCreatedAction {
    type: TestActionTypes.TEST_CREATED
    payload: Object
}
interface TestDeleteAction {
    type: TestActionTypes.TEST_DELETE
    payload: number
}
export type TestAction =
    | FetchTestAction
    | FetchTestSuccessAction
    | FetchTestErrorAction
    | TestCreatedAction
    | TestDeleteAction

export interface TestItemProps {
    title: string
    id: number
    getIdDelete(id: number): void
}

export interface ITest {
    id: number
    title: string
    questions: IQuestions[]
}

interface IQuestions {
    question: string
    answers: string[]
    right_answer: number
}
