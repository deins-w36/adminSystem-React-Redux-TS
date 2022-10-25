import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import TestItem from './TestItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import './test.scss'

const TestList: React.FC = () => {
    const navigate = useNavigate()
    const { tests, error, loading } = useTypedSelector(state => state.test)
    const { fetchTests, testDelete } = useActions()

    useEffect(() => {
        const isLoggin = localStorage.getItem('auth')
        if (!isLoggin) {
            navigate('/')
        }

        fetchTests()
        // eslint-disable-next-line
    }, [])

    const getIdDelete = (id: number) => {
        testDelete(id)
    }

    if (loading) {
        return <h1 className='errorLoading'>Идет загрузка</h1>
    }
    if (error) {
        return <h2 className='errorLoading'>{error}</h2>
    }

    return (
        <section className='test'>
            <div className='container-test'>
                <div className='test__items'>
                    {tests.map(test => (
                        <TestItem key={test.id} title={test.title} id={test.id} getIdDelete={getIdDelete} />
                    ))}
                </div>
                <Link to={'/test/new-test'} className='test__btn'>
                    Добавить новый тест
                </Link>
            </div>
        </section>
    )
}

export default TestList
