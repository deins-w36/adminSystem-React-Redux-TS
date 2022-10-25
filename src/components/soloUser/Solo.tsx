import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import SoloAttemp from './SoloAttemp'

import './solo.scss'

const Solo: React.FC = () => {
    const navigate = useNavigate()
    const { oneUser } = useTypedSelector(state => state.user)
    const { tests } = useTypedSelector(state => state.test)
    const [select, setSelect] = useState<string>('0')

    const user = oneUser[0]

    useEffect(() => {
        const isLoggin = localStorage.getItem('auth')
        if (!isLoggin) {
            navigate('/')
        }
    })

    const checkData = () => {
        try {
            return user.tests[select].attempts
        } catch (e) {
            return []
        }
    }
    const testInfo = checkData()

    const DataTest = () => {
        interface Attemps {
            id: number
            date: string
            time: string
            true_answer: number
        }
        return (
            <>
                <div className='solo__param'>
                    4. Количество успешено пройденных -{' '}
                    <span>
                        {Math.round(testInfo.length / 2)} ~{' '}
                        {Math.round((Math.round(testInfo.length / 2) * 100) / testInfo.length)}%
                    </span>
                </div>
                <div className='solo__param'>
                    5. Средний балл -{' '}
                    <span>{((Math.round(testInfo.length / 2) * 5) / testInfo.length).toFixed(2)} </span>
                </div>

                <div className='solo__attempts'>
                    {testInfo.map((user: Attemps, i: number) => (
                        <SoloAttemp key={i} id={i} date={user.date} time={user.time} trueAnsw={user.true_answer} />
                    ))}
                </div>
            </>
        )
    }

    return (
        <section className='solo'>
            <div className='container-solo'>
                <div className='solo__table'>
                    <div className='solo__name'>{user.name}</div>

                    <div className='solo__test'>
                        <div className='solo__text'>2. Тест - </div>
                        <select
                            className='solo__choice'
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelect(e.target.value)}
                        >
                            {tests.map((test, id) => (
                                <option key={id} value={id}>
                                    {test.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='solo__param'>
                        3. Общее количество попыток - <span>{testInfo.length}</span>
                    </div>

                    {testInfo.length ? <DataTest /> : 'Попыток нет'}
                </div>
            </div>
        </section>
    )
}

export default Solo
