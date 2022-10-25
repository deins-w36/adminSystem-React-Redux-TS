import { TestActionTypes, TestAction, ITest } from '../../types/test'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchTests = () => {
    return async (dispatch: Dispatch<TestAction>) => {
        try {
            dispatch({ type: TestActionTypes.FETCH_TEST })
            const response = await axios.get<ITest[]>('http://localhost:3001/tests')
            dispatch({ type: TestActionTypes.FETCH_TEST_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({ type: TestActionTypes.FETCH_TEST_ERROR, payload: 'Произошла ошибка при загрузке тестов' })
        }
    }
}

export const testCreated = (newObj: Object) => {
    return async (dispatch: Dispatch<TestAction>) => {
        try {
            await axios.post('http://localhost:3001/tests', newObj, { headers: { 'Content-Type': 'application/json' } })
            dispatch({ type: TestActionTypes.TEST_CREATED, payload: newObj })
        } catch (e) {
            console.log(`Произошла ощибка при добавлении теста - ${e}`)
        }
    }
}

export const testDelete = (id: number) => {
    return async (dispatch: Dispatch<TestAction>) => {
        try {
            await axios.delete(`http://localhost:3001/tests/${id}`)
            dispatch({ type: TestActionTypes.TEST_DELETE, payload: id })
        } catch (e) {
            console.log(`Произошла ощибка при добавлении теста - ${e}`)
        }
    }
}
