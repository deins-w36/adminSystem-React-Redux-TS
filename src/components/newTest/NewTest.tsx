import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Question from './Question'
import { useActions } from '../../hooks/useActions'

import './newTest.scss'

const NewTest: React.FC = () => {
    const [_a, setA] = useState(1)// eslint-disable-next-line
    const [_b, setB] = useState<Array<number>>([])// eslint-disable-next-line
    const [questionsLocal, setQuestions] = useState<Array<Object>>([])
    const [title, setTitle] = useState<string>('')
    const { testCreated } = useActions()

    const navigate = useNavigate()

    useEffect(() => {
        const isLoggin = localStorage.getItem('auth')
        if (!isLoggin) {
            navigate('/')
        }
    })

    const addData = (data: Object) => {
        questionsLocal.push(data)
    }

    const createQuestion = () => {
        _b.push(_a)
        setA(_a => _a + 1)
    }

    const submitHandler: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()

        const newTest = {
            title: title,
            questions: questionsLocal
        }
        testCreated(newTest)
        navigate('/test')
    }

    return (
        <section className='new-test'>
            <div className='container__new-test'>
                <div className='new-test__table'>
                    <h3>Новый тест:</h3>
                    <form action='#' className='new-test__form' onSubmit={submitHandler}>
                        <div className='new-test__input'>
                            <label htmlFor='name'>Название теста</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Введите название теста'
                                required
                                value={title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                            />
                        </div>

                        {_b.map(item => (
                            <Question key={item} i={item} addData={addData} />
                        ))}

                        <div className='new-test__btn text' onClick={createQuestion}>
                            Добавить вопрос
                        </div>
                        <button className='new-test__btn'>Сохранить тест</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewTest
