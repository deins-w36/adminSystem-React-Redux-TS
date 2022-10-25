import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import dataLogin from '../../store/login'

import './auth.scss'

type FromField = {
    name: HTMLInputElement
    pass: HTMLInputElement
}

const Auth: React.FC = () => {
    const [clazz, setClazz] = useState('login__false')
    const navigate = useNavigate()

    const handleSubmit: React.FormEventHandler<HTMLFormElement & FromField> = e => {
        e.preventDefault()
        const form = e.currentTarget
        const { name, pass } = form

        if (dataLogin.login === name.value && dataLogin.password === pass.value) {
            setClazz('login__false')
            localStorage.setItem('auth', 'true')
            navigate('/test')
        } else {
            setClazz(cl => cl + ' login__false_vis')
        }
    }

    return (
        <section className='auth'>
            <div className='login'>
                <h2>Login</h2>
                <form action='#' className='login__form' onSubmit={handleSubmit}>
                    <div className='login__input'>
                        <label htmlFor='name'>Имя пользователя</label>
                        <input type='text' name='name' placeholder='Введите имя пользователя' required />
                    </div>
                    <div className='login__input'>
                        <label htmlFor='pass'>Пароль</label>
                        <input type='text' name='pass' placeholder='Введите пароль' required />
                    </div>
                    <button className='login__btn'>Войти</button>
                </form>
                <p className={clazz}>Данные введены неправильно</p>
            </div>
        </section>
    )
}

export default Auth
