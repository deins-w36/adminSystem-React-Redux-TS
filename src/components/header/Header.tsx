import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import './header.scss'

const Header: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem('auth')
        navigate(0)
    }

    return (
        <header className='header'>
            <div className='header__name'>Администрирование системы тестирования</div>
            <div className='header__btns'>
                <NavLink
                    end
                    to='/test'
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'none' : 'none',
                        borderBottom: isActive ? '2px solid #fff' : 'none'
                    })}
                >
                    <div className='header__tests'>Тесты</div>
                </NavLink>

                <NavLink
                    end
                    to='/users'
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'none' : 'none',
                        borderBottom: isActive ? '2px solid #fff' : 'none'
                    })}
                >
                    <div className='header__users'>Пользователи</div>
                </NavLink>
                <div onClick={handleClick} className='header__exit'>
                    Выход
                </div>
            </div>
        </header>
    )
}

export default Header
