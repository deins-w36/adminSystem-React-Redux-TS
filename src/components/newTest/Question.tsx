import React, { useState, useEffect } from 'react'

import './newTest.scss'

interface QuestProps {
    i: number
    addData(data: Object): void
}

const Question: React.FC<QuestProps> = ({ i, addData }) => {
    const [question, setQuestion] = useState<string>('')
    const [answ1, setAnsw1] = useState<string>('')
    const [answ2, setAnsw2] = useState<string>('')
    const [answ3, setAnsw3] = useState<string>('')
    const [answ4, setAnsw4] = useState<string>('')
    const [radio, setRadio] = useState<string>('')
    const [indexRadio, setindexRadio] = useState<number>()

    const [active, setActive] = useState<boolean>(false)

    let index: React.SetStateAction<number | undefined>

    switch (radio) {
        case answ1:
            index = 0
            break
        case answ2:
            index = 1
            break
        case answ3:
            index = 2
            break
        case answ4:
            index = 3
            break
    }

    useEffect(() => {
        setindexRadio(index)
        // eslint-disable-next-line
    }, [radio])

    const addQuestion = () => {
        const arrayAnsw = {
            question: question,
            answers: [answ1, answ2, answ3, answ4],
            right_answer: indexRadio
        }
        addData(arrayAnsw)
        setActive(true)
    }

    return (
        <div className='new-test__input_answ'>
            <input
                type='text'
                placeholder='Введите вопрос'
                required
                value={question}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
            />
            <div className='new-test__group'>
                <input
                    className='radio'
                    type='radio'
                    name='f'
                    value={answ1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadio(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Первый ответ'
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnsw1(e.target.value)}
                />
            </div>
            <div className='new-test__group'>
                <input
                    className='radio'
                    type='radio'
                    name='f'
                    value={answ2}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadio(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Второй ответ'
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnsw2(e.target.value)}
                />
            </div>
            <div className='new-test__group'>
                <input
                    className='radio'
                    type='radio'
                    name='f'
                    value={answ3}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadio(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Третий ответ'
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnsw3(e.target.value)}
                />
            </div>
            <div className='new-test__group'>
                <input
                    className='radio'
                    type='radio'
                    name='f'
                    value={answ4}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadio(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Четвертый ответ'
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnsw4(e.target.value)}
                />
            </div>
            <div className='new-test__btn text' onClick={addQuestion}>
                {active ? 'Готово. Переходите дальше' : 'Сохранить вопрос'}
            </div>
        </div>
    )
}

export default Question
