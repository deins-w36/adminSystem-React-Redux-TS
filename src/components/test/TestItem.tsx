import React, { useState } from 'react'
import { TestItemProps } from '../../types/test'

import './test.scss'

const TestItem: React.FC<TestItemProps> = ({ title, id, getIdDelete }) => {
    const [active, setActive] = useState(false)
    const clazz = active ? 'test__item test__item-dis' : 'test__item'

    const handleClick = () => {
        setActive(act => !act)
    }
    const getId = () => {
        getIdDelete(id)
    }

    return (
        <div className={clazz}>
            <div className='test__name'>{title}</div>
            <div className='test__icons'>
                <div className='test__icon' onClick={handleClick}>
                    <img src={require('./img/eye.svg').default} alt='eye' />
                </div>
                <div className='test__icon'>
                    <img src={require('./img/delete.svg').default} alt='delete' onClick={getId} />
                </div>
            </div>
        </div>
    )
}

export default TestItem
