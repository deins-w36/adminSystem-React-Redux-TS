import React from 'react'

import './solo.scss'

interface SoloAttempProps {
    id: number
    date: string
    time: string
    trueAnsw: number
}

const SoloAttemp: React.FC<SoloAttempProps> = ({ id, date, time, trueAnsw }) => {
    return (
        <div className='solo__attempt'>
            <div className='solo__attempt__num'>
                Попытка - <span>{id + 1}</span>
            </div>
            <div className='solo__attempt__date'>
                Дата и время начала теста - <span>{date}</span>
            </div>
            <div className='solo__attempt__time'>
                Время, которое было затрачено на прохождение - <span>{time}</span>
            </div>
            <div className='solo__attempt__true-answer'>
                Количество правильных ответов - <span>{trueAnsw}</span>
            </div>
        </div>
    )
}

export default SoloAttemp
